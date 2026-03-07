<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Workorder;
use App\Models\WorkorderDetail;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Base\BaseController;
use Storage;

class WorkorderController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Workorder::with(
            'client:id,org_name,name',
            'currency:id,title,short_name,symbol'
        )->latest();

        // Global search
        $query->whereLike($request->field_name, $request->value);

        // Client filter
        $query->when($request->client_id, function ($q) use ($request) {
            $q->where('client_id', $request->client_id);
        });

        // Order Date range
        $query->when($request->from_order_date, function ($q) use ($request) {
            $q->whereDate('order_date', '>=', $request->from_order_date);
        });

        $query->when($request->to_order_date, function ($q) use ($request) {
            $q->whereDate('order_date', '<=', $request->to_order_date);
        });

        // Delivery Date range
        $query->when($request->from_delivery_date, function ($q) use ($request) {
            $q->whereDate('delivery_date', '>=', $request->from_delivery_date);
        });

        $query->when($request->to_delivery_date, function ($q) use ($request) {
            $q->whereDate('delivery_date', '<=', $request->to_delivery_date);
        });

        if ($request->allData) {
            return $query->get();
        } else {
            $datas = $query->paginate($request->pagination ?? 10);
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

                $res = DB::transaction(function () use ($request) {

                    $data = $request->except('workorder_details');
                    $data['order_date'] = vue_to_server_date($data['order_date']);
                    $data['delivery_date'] = vue_to_server_date($data['delivery_date']);
                    // Master insert
                    $workorder = Workorder::create($data);

                    // Details insert
                    if (!empty($request->workorder_details)) {
                        $workorder_details = json_decode($request->workorder_details, 1);
                        foreach ($workorder_details as $row) {

                            WorkorderDetail::create([
                                'workorder_id' => $workorder->id,
                                'description' => $row['description'] ?? '',
                                'actual_qty' => $row['actual_qty'] ?? 0,
                                'ordered_qty' => $row['ordered_qty'] ?? 0,
                                'unit_price' => $row['unit_price'] ?? 0,
                                'price' => $row['price'] ?? 0,
                            ]);
                        }
                    }

                    return $workorder;
                });

                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workorder  $workorder
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }

        $workorder = Workorder::with(['currency', 'client', 'workorder_details'])->find($id);
        return $workorder;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workorder  $workorder
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
     * @param  \App\Models\Workorder  $workorder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $workorder = Workorder::find($id);

        if ($this->validateCheck($request, $workorder->id)) {

            try {

                $res = DB::transaction(function () use ($request, $workorder) {

                    $data = $request->except('workorder_details');
                    $data['order_date'] = vue_to_server_date($data['order_date']);
                    $data['delivery_date'] = vue_to_server_date($data['delivery_date']);
                    // Master update
                    $workorder->fill($data)->save();

                    // Delete old details
                    WorkorderDetail::where('workorder_id', $workorder->id)->delete();

                    // Insert new details
                    if (!empty($request->workorder_details)) {

                        foreach ($request->workorder_details as $row) {

                            WorkorderDetail::create([
                                'workorder_id' => $workorder->id,
                                'description' => $row['description'] ?? '',
                                'actual_qty' => $row['actual_qty'] ?? 0,
                                'ordered_qty' => $row['ordered_qty'] ?? 0,
                                'unit_price' => $row['unit_price'] ?? 0,
                                'price' => $row['price'] ?? 0,
                            ]);
                        }
                    }

                    return $workorder;
                });

                return $this->responseReturn("update", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workorder  $workorder
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $workorder = Workorder::find($id);
        // delete
        $res = $workorder->delete();
        return $this->responseReturn("delete", $res);
    }


    public function importWorkorderExcel(Request $request)
    {

        $request->validate([
            'file' => 'required|mimes:xlsx,csv'
        ]);

        $rows = Excel::toArray([], $request->file('file'));

        $sheet = $rows[0];

        $header = array_map('strtolower', $sheet[0]);

        $data = [];

        foreach (array_slice($sheet, 1) as $row) {

            $rowData = array_combine($header, $row);

            $descriptionParts = [];

            foreach ($rowData as $key => $value) {

                if (str_starts_with($key, 'des-')) {
                    $label = str_replace('des-', '', $key);
                    $label = ucfirst($label);

                    if ($value) {
                        $descriptionParts[] = $label . ' - ' . $value;
                    }
                }
            }

            $data[] = [
                'description'   => implode("\n", $descriptionParts),
                'actual_qty'    => $rowData['actual_quantity'] ?? '',
                'unit_price'    => $rowData['unit_price'] ?? '',
                'ordered_qty'   => $rowData['ordered_quantity'] ?? '',
                'price'         => $rowData['price'] ?? ''
            ];
        }

        return response()->json($data);
    }

    /**$data
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
