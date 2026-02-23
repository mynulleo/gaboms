<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Storage;
use Exception;
use App\Models\Item;
use App\Models\Issue;
use App\Models\IssueDetail;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Models\StockTransaction;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Base\BaseController;

class IssueController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Issue::with(['branch:id,branch_name', 'employee:id,full_name', 'client:id,name'])->latest();

        if (!empty($request->field_name) && !empty($request->value)) {
            $query->whereLike($request->field_name, $request->value);
        }

        if (!empty($request->branch_id)) {
            $query->where('branch_id', $request->branch_id);
        }

        if (!empty($request->employee_id)) {
            $query->where('employee_id', $request->employee_id);
        }

        if (!empty($request->client_id)) {
            $query->where('client_id', $request->client_id);
        }

        if (!empty($request->from_issue_date)) {
            $query->whereDate('issue_date', '>=', vue_to_server_date($request->from_issue_date));
        }
        if (!empty($request->to_issue_date)) {
            $query->whereDate('issue_date', '<=', vue_to_server_date($request->to_issue_date));
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

                $data['issueno'] = Issue::generateIssueNo();
                $data['issue_date'] = vue_to_server_date($data['issue_date']);
                $issue_details = $data['issue_details'];
                unset($data['issue_details']);
                // push the insert text
                $res = Issue::create($data);

                if ($res && !empty($issue_details)) {
                    $issue_details = json_decode($issue_details, true);
                    foreach ($issue_details as $detail) {
                        $detail['issue_id'] = $res->id;

                        // remove item object from detail array
                        unset($detail['items']);
                        // insert purchase details
                        $issuedetail = IssueDetail::create($detail);
                        //dd($data['issue_date'], $detail['item_id'], $detail['qty'], $res->id);
                        $stock_transection =
                            [
                                'item_id' => $detail['item_id'],
                                'transaction_date' => $data['issue_date'],
                                'transaction_type' => 'Issue',
                                'reference_type' => 'Issue',
                                'reference_id' => $res->id,
                                'qty_in' => 0,
                                'qty_out' => $detail['qty'],
                                'status' => 'active',
                            ];

                        // insert stock transection data    
                        StockTransaction::create($stock_transection);
                    }
                }

                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        $issue = Issue::with(
            [
                'branch:id,branch_name',
                'employee:id,full_name',
                'client:id,name',
                'issue_details.category',
                'issue_details.item',
            ]
        )->find($id);

        // 🔥 each row তে category wise items attach
        $issue->issue_details->transform(function ($detail) {
            $detail->items = Item::where('category_id', $detail->category_id)
                ->select('id', 'title')
                ->get();

            return $detail;
        });


        return $issue;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function edit(Issue $issue)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Issue $issue)
    {
        if ($this->validateCheck($request, $issue->id)) {

            DB::beginTransaction();

            try {
                // --------------------
                // Parent Update
                // --------------------
                $data = $request->all();
                $data['issue_date'] = vue_to_server_date($data['issue_date']);

                $issue_details = $data['issue_details'] ? json_decode($request->issue_details, true) : [];
                unset($data['issue_details']);
                // dd($issue_details);
                $issue->fill($data)->save();

                // --------------------
                // Issue Details
                // --------------------
                $existingIds = $issue->issue_details()
                    ->pluck('id')
                    ->toArray();

                $requestIds = [];

                foreach ($issue_details as $detail) {

                    $detailData = [
                        'category_id'   => $detail['category_id'],
                        'item_id'       => $detail['item_id'],
                        'qty'           => $detail['qty'],
                    ];

                    if (!empty($detail['id'])) {
                        // update existing row
                        $issue->issue_details()
                            ->where('id', $detail['id'])
                            ->update($detailData);

                        $requestIds[] = $detail['id'];
                    } else {
                        // insert new row
                        $new = $issue->issue_details()
                            ->create($detailData);

                        $requestIds[] = $new->id;
                    }
                }

                // delete removed rows (optional)
                $deleteIds = array_diff($existingIds, $requestIds);
                if (!empty($deleteIds)) {
                    $issue->issue_details()
                        ->whereIn('id', $deleteIds)
                        ->delete();
                }

                DB::commit();

                return $this->responseReturn("update", $issue);
            } catch (\Exception $ex) {
                DB::rollBack();
                return response()->json([
                    'exception' => $ex->errorInfo ?? $ex->getMessage()
                ], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function destroy(Issue $issue)
    {
        // delete


        $res = $issue->delete();
        return $this->responseReturn("delete", $res);
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
