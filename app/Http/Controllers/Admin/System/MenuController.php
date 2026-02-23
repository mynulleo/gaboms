<?php

namespace App\Http\Controllers\Admin\System;

use App\Http\Controllers\Controller;
use App\Http\Resources\Resource;
use App\Models\System\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Menu::with(['parent:id,menu_name,icon'])
            ->select('id', 'parent_id', 'menu_name', 'route_name', 'sorting', 'params', 'show_dasboard', 'icon')
            ->latest();

        $query->whereLike($request->field_name, $request->value);

        if ($request->filled('parent_id')) {
            $query->where('parent_id', $request->parent_id);
        }

        if ($request->filled('show_dashboard') && $request->show_dashboard == 'true') {
            $query->where('show_dasboard', 1);
        }

        $datas = $query->paginate($request->pagination);
        // dd($datas);
        return new Resource($datas);
    }

    /**
     * Get parent menu
     */
    public function getParentMenu()
    {
        $menus = Menu::whereNull('parent_id')->get(['id', 'menu_name']);
        return response()->json($menus);
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
        $this->validateCheck($request);
        Cache::forget('side_menu_cache');
        $res = Menu::create($request->all());

        return $this->responseReturn('create', $res);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Menu  $Menu
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Menu $menu)
    {
        if ($request->format() == 'html') {
            return view('layouts.admin_app');
        }

        return $menu;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit(Menu $menu)
    {
        return view('layouts.admin_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Menu  $Menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Menu $menu)
    {
        $this->validateCheck($request);
        Cache::forget('side_menu_cache');

        $data = $request->all();
        $menu->fill($data)->save();

        return $this->responseReturn('update', $menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Menu  $Menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu)
    {
        Cache::forget('side_menu_cache');
        $res = $menu->delete();

        return $this->responseReturn('delete', $res);
    }

    public function menus(Request $request, $data = null)
    {
        return Menu::getMenuList();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Authorizedmenu  $authorizedmenu
     * @return \Illuminate\Http\Response
     */
    public function dashboardMenu()
    {
        return Menu::where('show_dasboard', 1)->get();
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        return $request->validate([
            'menu_name' => 'required|string|min:0|max:191',
            'sorting' => 'required',
        ]);
    }


}
