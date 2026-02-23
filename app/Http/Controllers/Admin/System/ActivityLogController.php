<?php

namespace App\Http\Controllers\Admin\System;

use App\Http\Controllers\Controller;
use App\Http\Resources\Resource;
use App\Models\System\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Activity::select('id', 'log_name', 'description', 'status', 'created_at')->latest();
        $query->whereLike($request->field_name, $request->value);
        $query->whereLike('description', $request->description);
        $query->whereDates('created_at', $request->from_date, $request->to_date);

        $query->whereAny('status', $request->status);
        $query->whereLike('event', $request->action);

        $datas = $query->paginate($request->pagination);

        return new Resource($datas);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.admin_app');
        }

        $activity = Activity::find($id);

        if ($activity->status != 'restored') {
            $activity->update(['status' => 'r']);
        }

        return $activity;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $activity = Activity::find($id);
        if ($activity->delete()) {
            return response()->json(['message' => 'Delete Successfully!'], 200);
        } else {
            return response()->json(['message' => 'Delete Unsuccessfully!'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function allRead()
    {
        Activity::where('status', 'ur')->update(['status' => 'r']);

        return response()->json(['message' => 'Read Successfully!'], 200);
    }

    public function sitemap()
    {
        // return $this->sitemapData();
        return view('layouts.admin_app');
    }

    public function sitemapData()
    {
        $menus = Menu::where('parent_id', null)->get();
        $data = [];
        foreach ($menus as $key => $value) {
            $value->children = $this->child($value->id);
            $data[] = $value;
        }

        return $data;
    }

    public function child($parentId)
    {
        $childData = Menu::where('parent_id', $parentId)->get();
        $child = [];
        if (count($childData) != 0) {
            foreach ($childData as $key => $value) {
                $value->children = $this->child($value->id);
                $child[] = $value;
            }
        }

        return $child;
    }

    public function restore(Activity $activity)
    {
        if ($activity->status == 'restored') {
            return response()->json(['message' => 'Data restored already!']);
        }

        DB::beginTransaction();
        try {
            $data = [];
            foreach ($activity->properties['old'] as $key => $value) {
                if ($value) {
                    if (is_array($value)) {
                        $value = json_encode($value);
                    }
                    $data[$key] = $value;
                }
            }

            if ($activity->event == 'deleted') {
                $activity->subject_type::create($data);
            } else {
                $activity->subject_type::find($activity->subject_id)->update($data);
            }

            $activity->update(['status' => 'restored']);

            DB::commit();
            return response()->json(['message' => 'Data restored successfully!']);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['message' => 'Something went wrong!'], 500);
        }
    }
}
