<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Base\BaseController;
use App\Http\Resources\Resource;
use App\Models\HelpInfo;
use Exception;
use Illuminate\Http\Request;
use Storage;

class HelpInfoController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = HelpInfo::select('id', 'model_name', 'page_type', 'description', 'sorting', 'status')->latest();
        $query->whereLike($request->field_name, $request->value);
        $query->whereAny('status', $request->status);
        $query->whereLike('page_type', $request->page_type);

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
                $data['model_name'] = ucfirst(string: $data['model_name']);
                HelpInfo::where('model_name', $data['model_name'])
                    ->where('page_type', $data['page_type'])
                    ->update(['status' => 'deactive']);
                $data['status'] = 'active';
                $res = HelpInfo::create($data);

                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HelpInfo  $helpInfo
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, HelpInfo $helpInfo)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $helpInfo;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HelpInfo  $helpInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(HelpInfo $helpInfo)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HelpInfo  $helpInfo
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, HelpInfo $helpInfo)
    {
        if ($this->validateCheck($request, $helpInfo->id)) {
            try {
                $data = $request->all();
                $data['model_name'] = ucfirst(string: $data['model_name']);
                if ($data['status'] == 'active') {
                    HelpInfo::where('model_name', $data['model_name'])
                        ->where('page_type', $data['page_type'])
                        ->where('id', '!=', $helpInfo->id)
                        ->update(['status' => 'deactive']);
                    $data['status'] = 'active';
                }

                $helpInfo->fill($data)->save();

                return $this->responseReturn("update", $helpInfo);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HelpInfo  $helpInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy(HelpInfo $helpInfo)
    {
        // delete

        $res = $helpInfo->delete();
        return $this->responseReturn("delete", $res);
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {

        return $request->validate([
            'model_name' => 'required|string|max:191',
            'page_type' => 'required|string|max:191',
        ], []);
    }

    public function getHelpInfo($modelName, $pageType)
    {
        $data = HelpInfo::active()->where('model_name', $modelName)->where('page_type', $pageType)->first();
        return $data;
    }
}
