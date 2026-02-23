<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Package;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Base\BaseController;
use Storage;

class PackageController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Package::with(['service:id,title', 'unit:id,title'])->latest();

        if (!empty($request->field_name) && !empty($request->value)) {
            $query->whereLike($request->field_name, $request->value);
        }

        if (!empty($request->service_id)) {
            $query->where('service_id', $request->service_id);
        }

        if (!empty($request->unit_id)) {
            $query->where('unit_id', $request->unit_id);
        }

        if (!empty($request->from_price) && empty($request->to_price)) {
            $query->where('price', $request->from_price);
        }

        if (!empty($request->from_price) && !empty($request->to_price)) {
            $query->whereBetween('price', [$request->from_price, $request->to_price]);
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
                // push the insert text

                $res = Package::create($data);
                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Package $package)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $package;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function edit(Package $package)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Package $package)
    {
        if ($this->validateCheck($request, $package->id)) {
            try {
                $data = $request->all();
                // push the update text
                $package->fill($data)->save();

                return $this->responseReturn("update", $package);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy(Package $package)
    {
        // delete


        $res = $package->delete();
        return $this->responseReturn("delete", $res);
    }

    public function getPackageByClientID(Request $request, $clientid = null)
    {
        if (empty($clientid)) {
            return null;
        }

        $package = Package::whereHas('client', function ($q) use ($clientid) {
            $q->where('id', $clientid);
        })
            ->where('status', 'active') // optional
            ->first();
        return $package;
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
