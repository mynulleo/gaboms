<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\SalaryParameter;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Base\BaseController;
use Storage;

class SalaryParameterController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = SalaryParameter::latest();
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
                // push the insert text
                $res = SalaryParameter::create($data);
                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SalaryParameter  $salaryParameter
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, SalaryParameter $salaryParameter)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $salaryParameter;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SalaryParameter  $salaryParameter
     * @return \Illuminate\Http\Response
     */
    public function edit(SalaryParameter $salaryParameter)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SalaryParameter  $salaryParameter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SalaryParameter $salaryParameter)
    {
        if ($this->validateCheck($request, $salaryParameter->id)) {
            try {
                $data = $request->all();
                // push the update text
                $salaryParameter->fill($data)->save();

                return $this->responseReturn("update", $salaryParameter);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SalaryParameter  $salaryParameter
     * @return \Illuminate\Http\Response
     */
    public function destroy(SalaryParameter $salaryParameter)
    {
        // delete


        $res = $salaryParameter->delete();
        return $this->responseReturn("delete", $res);
    }

    public function getSalaryParameters()
    {
        return SalaryParameter::where('status', 'active')->get();
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
