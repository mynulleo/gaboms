<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Storage;
use Exception;
use App\Models\Client;
use App\Models\Voucher;
use App\Models\Commission;
use App\Traits\VoucherTrait;
use Illuminate\Http\Request;
use App\Models\PaymentDetail;
use App\Models\VoucherDetail;
use App\Http\Resources\Resource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Base\BaseController;

class CommissionController extends BaseController
{
    use VoucherTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Commission::with([
            'employee:id,full_name',
            'client:id,name',
            'package:id,title',
            'approved_admin:id,name',
        ])->latest();

        // Client filter
        if ($request->filled('client_id')) {
            $query->where('client_id', $request->client_id);
        }

        // Employee filter
        if ($request->filled('employee_id')) {
            $query->where('employee_id', $request->employee_id);
        }

        // Package filter
        if ($request->filled('package_id')) {
            $query->where('package_id', $request->package_id);
        }

        // Is Closed filter (boolean)
        if (!is_null($request->is_closed) && $request->is_closed !== '') {
            $query->where('is_closed', $request->is_closed);
        }

        // আগের generic whereLike দরকার হলে রাখতে পারো
        if ($request->filled('field_name') && $request->filled('value')) {
            $query->whereLike($request->field_name, $request->value);
        }

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
                $data = $request->all();
                // push the insert text
                $res = Commission::create($data);
                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        $commission = Commission::with('employee:id,full_name', 'client:id,name', 'package', 'approved_admin:id,name')->find($id);
        return $commission;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function edit(Commission $commission)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Commission $commission)
    {
        if ($commission->is_closed == 1 || !empty($commission->approved_by)) {
            return response()->json(['exception' => 'Cannot update a closed or approved commission.'], 422);
        }

        if ($this->validateCheck($request, $commission->id)) {
            try {
                $data = $request->all();
                // push the update text
                $commission->fill($data)->save();

                return $this->responseReturn("update", $commission);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Commission  $commission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Commission $commission)
    {
        DB::beginTransaction();

        try {

            // =========================
            // 1️⃣ Check Eligibility (any payment exists?)
            // =========================
            $hasPayment = PaymentDetail::where('reference_type', 'Commission')
                ->where('reference_id', $commission->id)
                ->exists();

            if ($hasPayment) {
                return response()->json([
                    'message' => 'This commission has payments. Delete is not allowed.'
                ], 422);
            }

            // =========================
            // 2️⃣ Delete related vouchers
            // =========================
            $vouchers = Voucher::where('source', 'Commission')
                ->where('source_id', $commission->id)
                ->get();

            foreach ($vouchers as $voucher) {
                VoucherDetail::where('voucher_id', $voucher->id)->delete(); // soft delete
                $voucher->delete(); // soft delete
            }

            // =========================
            // 3️⃣ Delete Commission (soft)
            // =========================
            $commission->delete();

            DB::commit();

            return $this->responseReturn("delete", true);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'exception' => $e->getMessage()
            ], 422);
        }
    }

    public function getClientsForCommission($serviceid = null)
    {
        $query = Client::where('status', 'active');
        if ($serviceid) {
            $query->where('service_id', $serviceid);
        }
        $record = $query->whereNotIn('id', function ($q) {
            $q->select('client_id')
                ->from('commissions')
                ->where('status', 'active');
        })->get(['id', 'name']);
        return $record;
    }

    public function approved(Request $request)
    {
        $commission_id = $request->commission_id;

        if (!$commission_id) {
            return $this->responseReturn('error', null, null, false, 'Commission ID missing');
        }

        $user = Auth::guard('admin')->user();

        $commission = Commission::find($commission_id);

        if (!$commission) {
            return $this->responseReturn('error', null, null, false, 'Commission not found');
        }

        // already approved check (optional but recommended)
        if ($commission->approved_by) {
            return $this->responseReturn('warning', null, null, false, 'Commission Already approved');
        }

        $commission->approved_by   = $user->id;
        $commission->approved_date = date('Y-m-d'); // or date('Y-m-d')
        $commission->save();

        return $this->responseReturn('success', null, null, false, 'Commission approved successfully');
    }

    public function approvalcancel(Request $request)
    {
        $commission_id = $request->commission_id;

        if (!$commission_id) {
            return $this->responseReturn('error', null, null, false, 'Commission ID missing');
        }

        $commission = Commission::find($commission_id);

        if (!$commission) {
            return $this->responseReturn('error', null, null, false, 'Commission not found');
        }

        $commission->approved_by   = null;
        $commission->approved_date = null;

        if ($commission->save()) {
            $source = [
                'source' => 'Commission',
                'source_id' => $commission->id
            ];
            $this->removeVoucherBySourceInfo($source);
        }

        return $this->responseReturn('success', null, null, false, 'Commission approval cancelled successfully');
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
