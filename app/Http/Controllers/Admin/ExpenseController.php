<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Storage;
use Exception;
use App\Models\Expense;
use App\Models\Voucher;
use App\Traits\VoucherTrait;
use Illuminate\Http\Request;
use App\Models\PaymentDetail;
use App\Models\VoucherDetail;
use App\Http\Resources\Resource;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Base\BaseController;

class ExpenseController extends BaseController
{
    use VoucherTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Expense::with(['branch:id,branch_name', 'employee:id,full_name', 'approved_admin:id,name'])->latest();
        if ($request->has('field_name') && $request->has('value')) {
            $query->whereLike($request->field_name, $request->value);
        }

        if ($request->has('branch_id')) {
            $query->where('branch_id', $request->branch_id);
        }

        if ($request->has('employee_id')) {
            $query->where('employee_id', $request->employee_id);
        }

        if ($request->has('from_expense_date') && $request->empty('to_expense_date')) {
            $date_from = vue_to_server_date($request->from_expense_date);
            $query->where('expense_date', '>=', $date_from);
        }

        if ($request->has('from_expense_date') && $request->has('to_expense_date')) {
            $date_from = vue_to_server_date($request->from_expense_date);
            $date_to = vue_to_server_date($request->to_expense_date);
            $query->whereBetween('expense_date', [$date_from, $date_to]);
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
        // 🔐 Validation first (auto throws 422 if fails)
        $this->validateCheck($request);

        DB::beginTransaction();

        try {
            $data = $request->all();

            $data['expenseid'] = Expense::generateExpenseID();
            $expense_details = $data['expense_details'] ?? [];
            $data['expense_date'] = vue_to_server_date($data['expense_date']);
            unset($data['expense_details']);

            // Insert main expense
            $res = Expense::create($data);

            // Insert details
            if (!empty($expense_details)) {
                foreach ($expense_details as $detail) {
                    $res->expense_details()->create([
                        'account_id' => $detail['account_id'],
                        'amount'     => $detail['amount'],
                        'narration'  => $detail['narration'] ?? null,
                    ]);
                }
            }

            DB::commit();

            return $this->responseReturn("create", $res);
        } catch (\Throwable $ex) {
            DB::rollBack();

            return response()->json([
                'message' => 'Expense create failed',
                'error'   => $ex->getMessage()
            ], 422);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        $expense = Expense::with('expense_details.account', 'branch', 'approved_admin:id,name')->find($id);
        return $expense;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function edit(Expense $expense)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Expense $expense)
    {
        // 🔐 Validation first
        $this->validateCheck($request, $expense->id);

        DB::beginTransaction();

        try {
            $data = $request->all();

            $expense_details = $data['expense_details'] ?? [];
            $data['expense_date'] = vue_to_server_date($data['expense_date']);
            $data['approved_date'] =  vue_to_server_date($data['approved_date']);
            unset($data['expense_details']);

            // Update main expense
            $expense->update($data);

            // Replace details
            if (!empty($expense_details)) {

                // delete previous details
                $expense->expense_details()->delete();

                // insert new details
                foreach ($expense_details as $detail) {
                    $expense->expense_details()->create([
                        'account_id' => $detail['account_id'],
                        'amount'     => $detail['amount'],
                        'narration'  => $detail['narration'] ?? null,
                    ]);
                }
            }

            DB::commit();

            return $this->responseReturn("update", $expense);
        } catch (\Throwable $ex) {
            DB::rollBack();

            return response()->json([
                'message' => 'Expense update failed',
                'error'   => $ex->getMessage()
            ], 422);
        }
    }

    public function approved(Request $request)
    {
        $expenseid = $request->expense_id;

        if (!$expenseid) {
            return $this->responseReturn('error', null, null, false, 'Expense ID missing');
        }

        $user = Auth::guard('admin')->user();

        $expense = Expense::with('expense_details')->find($expenseid);

        if (!$expense) {
            return $this->responseReturn('error', null, null, false, 'Expense not found');
        }

        // already approved check (optional but recommended)
        if ($expense->approved_by) {
            return $this->responseReturn('warning', null, null, false, 'Already approved');
        }

        $expense->approved_by   = $user->id;
        $expense->approved_date = now(); // or date('Y-m-d')
        $expense->save();

        if ($expense->expense_details) {
            foreach ($expense->expense_details as $record) {
                // create payable voucher
                $vdata = [
                    'module'    => 'ExpenseDetail',
                    'date'      => $expense->expense_date,
                    'amount'    => $record->amount,
                    'source_id' => $record->id,
                    'ref_id'    => $expense->employee_id,
                    'account_id' => $record->account_id
                ];
                $this->createPayableVoucher($vdata);
            }
        }

        return $this->responseReturn('success', null, null, false, 'Salary Sheet approved successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expense $expense)
    {
        DB::beginTransaction();

        try {

            // =========================
            // 1️⃣ Check Eligibility (any payment exists?)
            // =========================
            $hasPayment = PaymentDetail::where('reference_type', 'Expense')
                ->where('reference_id', $expense->id)
                ->exists();

            if ($hasPayment) {
                return response()->json([
                    'message' => 'This expense has payments. Delete is not allowed.'
                ], 422);
            }

            // =========================
            // 2️⃣ Delete related vouchers
            // =========================
            $vouchers = Voucher::where('source', 'Expense')
                ->where('source_id', $expense->id)
                ->get();

            foreach ($vouchers as $voucher) {
                VoucherDetail::where('voucher_id', $voucher->id)->delete(); // soft delete
                $voucher->delete(); // soft delete
            }

            // =========================
            // 3️⃣ Delete Expense (soft)
            // =========================
            $expense->delete();

            DB::commit();

            return $this->responseReturn("delete", true);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'exception' => $e->getMessage()
            ], 422);
        }
    }

    public function approvalcancel(Request $request)
    {
        $expense_id = $request->expense_id;

        if (!$expense_id) {
            return response()->json([
                'type' => '',
                'message' => 'Commission '
            ], 422);
            return $this->responseReturn('error', null, null, false, 'Expense ID missing');
        }

        $expense = Expense::with('expense_details')->find($expense_id);

        if (!$expense) {
            return $this->responseReturn('error', null, null, false, 'expense not found');
        }

        $expense->approved_by   = null;
        $expense->approved_date = null;
        $expense->save();

        if ($expense->expense_details) {
            foreach ($expense->expense_details as $expd) {
                $source = [
                    'source' => 'ExpenseDetail',
                    'source_id' => $expd->id
                ];
                $this->removeVoucherBySourceInfo($source);
            }
        }

        return $this->responseReturn('success', null, null, false, 'Expense approval cancelled successfully');
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        return $request->validate([
            'expense_date' => 'required',
            'expense_details' => 'required|array|min:1',
            'expense_details.*.account_id' => 'required|integer|exists:accounts,id',
            'expense_details.*.amount'     => 'required|numeric|min:0.01',
        ], [
            'expense_details.required' => 'Expense details required',
            'expense_details.*.account_id.required' => 'Account is required',
            'expense_details.*.amount.required' => 'Amount is required',
        ]);
    }
}
