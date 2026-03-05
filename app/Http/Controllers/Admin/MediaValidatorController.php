<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use Illuminate\Http\Request;
use App\Models\MediaValidator;
use Illuminate\Validation\Rule;
use App\Http\Resources\Resource;
use App\Http\Controllers\Base\BaseController;

class MediaValidatorController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = MediaValidator::select('id', 'model_name', 'field_name', 'field_type', 'max_size', 'status')->latest();
        $query->whereLike($request->field_name, $request->value);
        $query->whereLike('status', $request->status);
        $query->whereLike('field_type', $request->field_type);

        if ($request->allData) {
            return $query->get();
        } else {
            $datas = $query->paginate($request->pagination);
            return new Resource($datas);
        }
    }

    public function getFields($modelName)
    {
        $mediaValidators = MediaValidator::active()
            ->where('model_name', $modelName)
            ->get(['field_name', 'field_type', 'max_size', 'min_width', 'min_height', 'resize_value']);

        $data = [];
        foreach ($mediaValidators as $mediaValidator) {
            $data[$mediaValidator->field_name] = [
                'field_type' => $mediaValidator->field_type,
                'max_size' => $mediaValidator->max_size,
                'min_width' => $mediaValidator->min_width,
                'min_height' => $mediaValidator->min_height,
                'resize_value' => implode(",", $mediaValidator->resize_value),
            ];
        }

        return response()->json($data);
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
            $data = $request->all();
            $isExistModel = MediaValidator::where('model_name', $data['model_name'])
                ->where('field_name', $data['field_name'])
                ->where('field_type', $data['field_type'])
                ->exists();

            if ($isExistModel) {
                return response()->json(['exception' => 'Media Validator already exists!'], 422);
            }

            try {
                $data['resize_value'] = json_encode($data['resize_value']);
                $res = MediaValidator::create($data);
                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MediaValidator  $mediaValidator
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, MediaValidator $mediaValidator)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $mediaValidator;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MediaValidator  $mediaValidator
     * @return \Illuminate\Http\Response
     */
    public function edit(MediaValidator $mediaValidator)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MediaValidator  $mediaValidator
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MediaValidator $mediaValidator)
    {
        if ($this->validateCheck($request, $mediaValidator->id)) {
            $data = $request->all();
            $isExistModel = MediaValidator::where('model_name', $data['model_name'])
                ->where('field_name', $data['field_name'])
                ->where('field_type', $data['field_type'])
                ->whereNot('id', $mediaValidator->id)
                ->exists();

            if ($isExistModel) {
                return response()->json(['exception' => 'Media Validator already exists!'], 422);
            }

            try {
                $data['resize_value'] = json_encode($data['resize_value']);
                $mediaValidator->fill($data)->save();

                return $this->responseReturn("update", $mediaValidator);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MediaValidator  $mediaValidator
     * @return \Illuminate\Http\Response
     */
    public function destroy(MediaValidator $mediaValidator)
    {
        // delete


        $res = $mediaValidator->delete();
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
            'model_name' => ['required', 'string', 'max:190'],
            'field_name' => ['required', 'string', 'max:190'],
            'field_type' => ['required', 'string', 'max:190', 'in:file,image'],
            'max_size' => ['required', 'numeric', 'min:1'],
            'min_width' => ['nullable', Rule::requiredIf($request->field_type === 'image'), 'numeric', 'min:1'],
            'min_height' => ['nullable', Rule::requiredIf($request->field_type === 'image'), 'numeric', 'min:1'],
            'resize_value' => ['nullable', Rule::requiredIf($request->field_type === 'image'), 'array'],
            'resize_value.*' => ['nullable', Rule::requiredIf($request->field_type === 'image'), 'string', 'max:190'],
            'status' => ['required', 'string', 'max:190', 'in:active,deactive'],
        ]);
    }
}
