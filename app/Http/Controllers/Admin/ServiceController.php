<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Action\Util\DeleteAction;
use App\Http\Controllers\Base\BaseController;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Artisan;
use App\Rules\Base64Image;



class ServiceController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Service::latest();
        // dd($query);
        $query->whereLike($request->field_name, $request->value);
        $query->whereAny('status', $request->status);

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

                $data['slug'] = Service::createSlug($data['title']);

                $res = Service::create($data);
                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $service = Service::find($id);
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $service;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id, DeleteAction $delete)
    {
        $service = Service::find($id);
        if ($this->validateCheck($request, $service->id)) {
            try {
                $data = $request->all();


                if ($data['title'] !== $service->title) {
                    $data['slug'] = Service::createSlug($data['title']);
                }

                $service->fill($data)->save();

                return $this->responseReturn("update", $service);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = Service::find($id);
        // delete
        app("deleteAction")->arrayImages($service->image);
        $old = $this->oldFile($service->image);
        if (Storage::disk("public")->exists($old)) {
            Storage::delete($old);
        }


        $res = $service->delete();
        return $this->responseReturn("delete", $res);
    }

    //API Function to get services
    public function getServices()
    {
        $services = Service::where('status', 'active')->get(['id', 'title']);
        return response()->json($services);
    }

    public function getServiceInfo($serviceid)
    {
        return Service::where('id', $serviceid)->first();
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
