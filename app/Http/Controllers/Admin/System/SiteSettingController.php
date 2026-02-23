<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin\System;

use App\Rules\Base64Image;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Models\System\SiteSetting;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Base\BaseController;
use Illuminate\Validation\Rule;

class SiteSettingController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        return response()->json(SiteSetting::first());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('layouts.admin_app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Artisan::call('optimize:clear');

        $conf = SiteSetting::first();
        $data = $request->all();
        $logo = $request->logo_base64;
        $logo_small = $request->logo_small_base64;
        $favicon = $request->file('favicon');

        if (!empty($conf)) {
            $this->validateCheck($request);

            if (!empty($logo)) {
                $resizeValue = $data['logo_resize_value'] ?? '204x70,175x60';
                $data['logo'] = cloudflare(file: $logo, folder: 'logo', resizeSize: $resizeValue, base64: true);
            }
            if (!empty($logo_small)) {
                $resizeValue = $data['logo_small_resize_value'] ?? '600x200,300x100,150x50';
                $data['logo_small'] = cloudflare(file: $logo_small, folder: 'logo_small', resizeSize: $resizeValue, base64: true);
            }

            // Favicon Icon...
            if (!empty($favicon)) {
                $data['favicon'] = $this->upload($favicon, 'conf', $conf->favicon);
            } else {
                $data['favicon'] = $this->oldFile($conf->favicon);
            }

            $conf->update($data);

            return $this->responseReturn('update', $conf);
        } else {
            $this->validateCheck($request);
            if (!empty($logo)) {
                $resizeValue = $data['logo_resize_value'] ?? '204x70,175x60';
                $data['logo'] = cloudflare(file: $logo, folder: 'logo', resizeSize: $resizeValue, base64: true);
            }
            if (!empty($logo_small)) {
                $resizeValue = $data['logo_small_resize_value'] ?? '600x200,300x100,150x50';
                $data['logo_small'] = cloudflare(file: $logo_small, folder: 'logo_small', resizeSize: $resizeValue, base64: true);
            }
            if (!empty($favicon)) {
                $data['favicon'] = $this->upload($favicon, 'conf');
            }

            $setting = SiteSetting::create($data);

            return $this->responseReturn('create', $setting);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\SiteSetting  $SiteSetting
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        if ($request->format() == 'html') {
            return view('layouts.admin_app');
        }

        return response()->json(SiteSetting::first());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\SiteSetting  $SiteSetting
     * @return \Illuminate\Http\Response
     */
    public function edit(SiteSetting $siteSetting)
    {
        return view('layouts.admin_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Model\SiteSetting  $SiteSetting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SiteSetting $siteSetting)
    {
        return view('layouts.admin_app');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\SiteSetting  $SiteSetting
     * @return \Illuminate\Http\Response
     */
    public function destroy(SiteSetting $siteSetting)
    {
        $old1 = $this->oldFile($siteSetting->logo);
        $old2 = $this->oldFile($siteSetting->logo_small);
        $old3 = $this->oldFile($siteSetting->favicon);

        if (Storage::disk('public')->exists($old1)) {
            Storage::delete($old1);
        }

        if (Storage::disk('public')->exists($old2)) {
            Storage::delete($old2);
        }

        if (Storage::disk('public')->exists($old3)) {
            Storage::delete($old3);
        }

        if ($siteSetting->delete()) {
            return response()->json(['message' => 'Delete Successfully!'], 200);
        } else {
            return response()->json(['message' => 'Delete Unsuccessfully!'], 200);
        }
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request)
    {
        return $request->validate([
            'title' => 'required|string|min:0|max:191',
            'short_title' => 'required|string|min:0|max:191',
            'logo_base64' => ['nullable', 'string', new Base64Image()],
            'logo_resize_value' => ['nullable', 'string'],
            'logo_small_base64' => ['nullable', 'string', new Base64Image()],
            'logo_small_resize_value' => ['nullable', 'string'],
            'favicon' => ['nullable', Rule::file()->types(['jpeg', 'jpg', 'png'])->max(1024 * 5)],
        ]);
    }
}
