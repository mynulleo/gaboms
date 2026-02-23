<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Withdrawl;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Traits\VoucherTrait;
use App\Http\Controllers\Base\BaseController;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Storage;

class WithdrawlController extends BaseController
{
    use VoucherTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Withdrawl::with('account:id,account_name')
            ->latest();

        // Filter by Account ID
        if (!empty($request->account_id)) {
            $query->where('account_id', $request->account_id);
        }

        // Filter by From withdraw Date
        if (!empty($request->from_withdraw_date)) {
            $from_date = vue_to_server_date($request->from_withdraw_date);
            $query->whereDate('withdrwal_date', '>=', $from_date);
        }

        // Filter by To withdraw Date
        if (!empty($request->from_withdraw_date) && !empty($request->to_withdraw_date)) {
            $query->whereBetween('withdrwal_date', [
                Carbon::parse($request->from_withdraw_date)->format('Y-m-d'),
                Carbon::parse($request->to_withdraw_date)->format('Y-m-d')
            ]);
        }

        // Return all data
        if ($request->allData) {
            return $query->get();
        }

        // Return paginated data
        $datas = $query->paginate($request->pagination ?? 10);

        return new Resource($datas);
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
            DB::beginTransaction();
            try {
                $data = $request->all();

                $data['withdrwal_date'] = vue_to_server_date($data['withdrwal_date']);

                // Insert Withdrawl
                $res = Withdrawl::create($data);

                if ($res) {
                    $data['id'] = $res->id;

                    // Create Voucher
                    $this->voucherForWithdraw($data);
                }

                DB::commit();
                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                DB::rollBack();
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Withdrawl  $withdrawl
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Withdrawl $withdrawl)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $withdrawl;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Withdrawl  $withdrawl
     * @return \Illuminate\Http\Response
     */
    public function edit(Withdrawl $withdrawl)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Withdrawl  $withdrawl
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Withdrawl $withdrawl)
    {
        if ($this->validateCheck($request, $withdrawl->id)) {
            DB::beginTransaction();
            try {
                $data = $request->all();
                $data['withdrwal_date'] = vue_to_server_date($data['withdrwal_date']);

                if ($withdrawl->fill($data)->save()) {
                    $data['id'] = $withdrawl->id;

                    // ✅ Update Voucher
                    $this->removeVoucherBySourceInfo([
                        'source' => 'CashWithdrawal',
                        'source_id' => $withdrawl->id
                    ]);
                    $this->voucherForWithdraw($data);
                }

                DB::commit();
                return $this->responseReturn("update", $withdrawl);
            } catch (Exception $ex) {
                DB::rollBack();
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Withdrawl  $withdrawl
     * @return \Illuminate\Http\Response
     */
    public function destroy(Withdrawl $withdrawl)
    {
        DB::beginTransaction();
        try {
            // ✅ Remove related voucher
            $this->removeVoucherBySourceInfo([
                'source' => 'CashWithdrawal',
                'source_id' => $withdrawl->id
            ]);

            // ✅ Delete Withdrawl
            $res = $withdrawl->delete();

            DB::commit();
            return $this->responseReturn("delete", $res);
        } catch (Exception $ex) {
            DB::rollBack();
            return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
        }
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