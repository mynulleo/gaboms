<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Storage;
use Exception;
use App\Models\Account;
use Illuminate\Http\Request;
use App\Models\UplinkProvider;
use App\Http\Resources\Resource;
use App\Traits\UplinkProviderTrait;
use App\Http\Controllers\Base\BaseController;

class UplinkProviderController extends BaseController
{
    use UplinkProviderTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = UplinkProvider::latest();
        $query->whereLike($request->field_name, $request->value);

        if ($request->allData) {
            return $query->get();
        } else {
            $datas = $query->paginate($request->pagination);
            return new Resource($datas);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('layouts.backend_app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->validateCheck($request)) {
            try {
                $data = $request->all();
                $data['previous_purchase_date'] = vue_to_server_date($data['previous_purchase_date']);
                // push the insert text
                $res = UplinkProvider::create($data);

                if ($res) {
                    $this->createPreviousDueInvoiceForUplinkProvider($res->id, $res);
                }

                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UplinkProvider  $uplinkProvider
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }

        $uplinkProvider = UplinkProvider::with('bank')->find($id);

        if (empty($uplinkProvider->alternative_contacts) || $uplinkProvider->alternative_contacts == null) {
            $uplinkProvider->alternative_contacts = [
                [
                    'designation' => null,
                    'contact_person' => null,
                    'contact_no' => null,
                ]
            ];
        } else {
            $uplinkProvider->alternative_contacts = json_decode($uplinkProvider->alternative_contacts, true);
        }

        return $uplinkProvider;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UplinkProvider  $uplinkProvider
     * @return \Illuminate\Http\Response
     */
    public function edit(UplinkProvider $uplinkProvider)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UplinkProvider  $uplinkProvider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UplinkProvider $uplinkProvider)
    {
        if ($this->validateCheck($request, $uplinkProvider->id)) {
            try {
                $old_previous_due = $uplinkProvider->previous_due;
                $old_purchase_date  = $uplinkProvider->previous_purchase_date;

                $data = $request->all();
                $data['previous_purchase_date'] = vue_to_server_date($data['previous_purchase_date']);
                $previous_due = $data['previous_due'];
                $purchase_date = $data['previous_purchase_date'];
                // push the update text
                $uplinkProvider->fill($data)->save();

                $old_purchase_date = $old_purchase_date
                    ? date('Y-m-d', strtotime($old_purchase_date))
                    : null;

                $purchase_date = !empty($data['previous_purchase_date'])
                    ? date('Y-m-d', strtotime($data['previous_purchase_date']))
                    : null;
                // dd((float)$old_previous_due, (float)$previous_due, $old_purchase_date, $purchase_date);
                if ((float)$old_previous_due != (float)$previous_due || $old_purchase_date !== $purchase_date) {

                    $this->createPreviousDueInvoiceForUplinkProvider($uplinkProvider->id, $data, 'Update');
                }

                return $this->responseReturn("update", $uplinkProvider);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UplinkProvider  $uplinkProvider
     * @return \Illuminate\Http\Response
     */
    public function destroy(UplinkProvider $uplinkProvider)
    {
        // delete
        $res = $uplinkProvider->delete();
        return $this->responseReturn("delete", $res);
    }

    public function getULPByID($ulpid)
    {
        $uplinkprovider = null;
        if ($ulpid) {
            $uplinkprovider = UplinkProvider::where('id', $ulpid)->first();
            if ($uplinkprovider) {
                $uplinkprovider = $uplinkprovider->toArray();
            }
        }

        return $uplinkprovider;
    }

    //API Functions
    public function getUplinkProviders()
    {
        $query = UplinkProvider::where('status', 'active');

        $data = $query->get(['id', 'org_name']);
        return $data;
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        return true;
        return $request->validate([
            //ex: 'name' => 'required|email|nullable|date|string|min:0|max:191',
        ], [
            //ex: 'name' => "This name is required" (custom message)
        ]);
    }
}
