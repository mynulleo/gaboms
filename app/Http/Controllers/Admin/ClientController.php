<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Client;
use App\Models\Commission;
use App\Traits\ClientTrait;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Http\Controllers\Base\BaseController;

class ClientController extends BaseController
{
    use ClientTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Client::with(['area:id,area_name'])->latest();

        if (!empty($request->service_id)) {
            $query->where('service_id', $request->service_id);
        }

        if (!empty($request->package_id)) {
            $query->where('package_id', $request->package_id);
        }

        if (!empty($request->district_id)) {
            $query->where('district_id', $request->district_id);
        }

        if (!empty($request->area_id)) {
            $query->where('area_id', $request->area_id);
        }

        if (!empty($request->field_name) && !empty($request->value)) {
            $query->whereLike($request->field_name, $request->value);
        }

        // dd($request->from_reg_date);
        if (!empty($request->from_reg_date) && empty($request->to_reg_date)) {
            $fromdate = vue_to_server_date($request->from_reg_date);
            $query->whereDate('reg_date', $fromdate);
        }

        if (!empty($request->from_reg_date) && !empty($request->to_reg_date)) {

            $fromdate = vue_to_server_date($request->from_reg_date);
            $todate = vue_to_server_date($request->to_reg_date);
            $query->whereBetween('reg_date', [$fromdate, $todate]);
        }

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
                $data['invoice_setup'] = json_encode($data['invoice_setup']);
                // push the insert text
                if (empty($data['clientid'])) {
                    $data['clientid'] = Client::generateClientID();
                }

                $data['reg_date'] = vue_to_server_date($data['reg_date']);

                $res = Client::create($data);

                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        $client = Client::with(
            [
                'area:id,area_name',
                'bank:id,bank_name',
                'district:id,district_name',
            ]
        )->find($id);

        return response()->json($client->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $client = Client::find($id);
        if ($this->validateCheck($request, $client->id)) {
            try {
                $old_pre_due = $client->previous_due;
                $data = $request->all();

                $oldclientname = $client->name;
                $data['reg_date'] = vue_to_server_date($data['reg_date']);
                // push the update text
                $client->fill($data)->save();

                return $this->responseReturn("update", $client);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        // delete
        $res = $client->delete();
        return $this->responseReturn("delete", $res);
    }

    public function getClients()
    {
        $query = Client::where('status', 'active');

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

    public function getClientInfo(Request $request)
    {
        $clientid   = $request->query('clientid');    // business/client code
        $client_id  = $request->query('client_id');   // primary key id

        if (!$clientid && !$client_id) {
            return response()->json([
                'message' => 'clientid or client_id is required'
            ], 422);
        }

        $query = Client::with([
            'service:id,title',
            'package:id,title,bandwidth,unit_id,price,vat',
            'package.unit:id,title',
            'area:id,area_name',
        ]);

        if ($clientid) {
            $query->where('clientid', $clientid);
        }

        if ($client_id) {
            $query->where('id', $client_id);
        }

        $client = $query->first();

        if (!$client) {
            return response()->json([
                'message' => 'Client not found'
            ], 404);
        }

        return response()->json($client);
    }

    public function getClientByID($id)
    {
        $client = null;
        if ($id) {
            $client = Client::with(
                [
                    'service:id,title',
                    'package:id,title,bandwidth,unit_id,price,vat',
                    'package.unit:id,title',
                    'area:id,area_name'
                ]
            )->where('id', $id)->first();
            if ($client) {
                $client = $client->toArray();
            }
        }

        return $client;
    }
}
