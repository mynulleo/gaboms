<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Base\BaseController;
use App\Http\Resources\Resource;
use App\Models\Account;
use App\Models\Employee;
use App\Models\LoanInfo;
use App\Models\PaymentDetail;
use App\Models\SalarySheet;
use App\Models\SalarySheetDetail;
use App\Models\Voucher;
use App\Models\VoucherDetail;
use App\Traits\VoucherTrait;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Storage;

class LoanInfoController extends BaseController
{
    use VoucherTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = LoanInfo::with(['employee:id,full_name'])->latest();

        if (!empty($request->value)) {
            $query->where('trnsid', $request->value);
        }

        if (!empty($request->trns_type)) {
            $query->where('trns_type', $request->trns_type);
        }

        if ($request->trns_type == '1') {
            $query->where('due_amount', 0);
        }

        if (
            isset($request->from_trns_date, $request->to_trns_date) &&
            !empty($request->from_trns_date) &&
            !empty($request->to_trns_date)
        ) {
            $query->whereDate('trns_date', '>=', vue_to_server_date($request->from_trns_date));
            $query->whereDate(
                'trns_date',
                '<=',
                vue_to_server_date($request->to_trns_date)
            );
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

            DB::beginTransaction();

            try {
                $data = $request->all();

                $data['trnsid'] = LoanInfo::generateTrnsID();
                $data['trns_date'] = vue_to_server_date($data['trns_date']);
                $data['return_date'] = vue_to_server_date($data['return_date'] ?? null);
                $data['schedule_day'] = $data['schedule_day'] ?? 0;
                $data['deduct_from_salary'] = $data['deduct_from_salary'] == "1" ? 1 : 0;
                $data['due_amount'] = $data['amount'];

                $loan = LoanInfo::create($data);

                $total_installment   = (int) $data['total_installment'];
                $installment_amount = (float) $data['installment_amount'];

                // ✅ Dynamic start date logic
                $startDate = $this->getInstallmentStartDate($data['trns_type'], $data['trns_date']);

                $installments = [];

                for ($i = 1; $i <= $total_installment; $i++) {
                    $installments[] = [
                        'loan_info_id'     => $loan->id,
                        'employee_id'      => $data['employee_id'],
                        'type'             => $data['trns_type'],
                        'deduct_from_salary' => $data['deduct_from_salary'],
                        'instalment_date' => $startDate->copy()->addMonths($i - 1)->format('Y-m-d'),
                        'amount'           => $installment_amount,
                    ];
                }

                DB::table('loan_installments')->insert($installments);

                DB::commit();

                return $this->responseReturn("create", $loan);
            } catch (\Exception $ex) {
                DB::rollBack();
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LoanInfo  $loanInfo
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, LoanInfo $loanInfo)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        $loanInfo->load('employee.designation:id,title,total_salary');
        // dd($loanInfo);
        return $loanInfo;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LoanInfo  $loanInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(LoanInfo $loanInfo)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LoanInfo  $loanInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LoanInfo $loanInfo)
    {
        if ($this->validateCheck($request, $loanInfo->id)) {

            DB::beginTransaction();

            try {
                $data = $request->all();

                $data['trns_date']   = vue_to_server_date($data['trns_date']);
                $data['return_date'] = vue_to_server_date($data['return_date'] ?? null);
                $data['schedule_day'] = $data['schedule_day'] ?? 0;
                $data['deduct_from_salary'] = $data['deduct_from_salary'] == "1" ? 1 : 0;
                $data['due_amount'] = $data['amount'];

                $loanInfo->fill($data)->save();

                // আগের installment delete
                DB::table('loan_installments')
                    ->where('loan_info_id', $loanInfo->id)
                    ->delete();

                $total_installment   = (int) $data['total_installment'];
                $installment_amount = (float) $data['installment_amount'];

                // ✅ Dynamic start date logic
                $startDate = $this->getInstallmentStartDate($data['trns_type'], $data['trns_date']);

                $installments = [];

                for ($i = 1; $i <= $total_installment; $i++) {
                    $installments[] = [
                        'loan_info_id'     => $loanInfo->id,
                        'employee_id'      => $data['employee_id'],
                        'type'             => $data['trns_type'],
                        'instalment_date' => $startDate->copy()->addMonths($i - 1)->format('Y-m-d'),
                        'amount'           => $installment_amount,
                    ];
                }

                DB::table('loan_installments')->insert($installments);

                DB::commit();

                return $this->responseReturn("update", $loanInfo);
            } catch (\Exception $ex) {
                DB::rollBack();
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }


    private function getInstallmentStartDate($trnsType, $trnsDate)
    {
        $startDate = Carbon::parse($trnsDate);

        if ($trnsType === 'Advance') {

            $monthName = $startDate->format('F');   // February
            $year      = $startDate->format('Y');   // 2026

            $salarySheetExists = DB::table('salary_sheets')
                ->where('month', $monthName)
                ->where('year', $year)
                ->whereNull('deleted_at')
                ->where('status', 'active')
                ->exists();

            // ✅ salary sheet থাকলে next month থেকে installment
            if ($salarySheetExists) {
                $startDate = $startDate->addMonth();
            }

            // salary sheet না থাকলে current month থেকেই শুরু
        } else {
            // Loan হলে সবসময় next month
            $startDate = $startDate->addMonth();
        }

        return $startDate;
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LoanInfo  $loanInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy(LoanInfo $loanInfo)
    {
        DB::beginTransaction();

        try {

            // =========================
            // Check Eligibility (any payment exists?)
            // =========================
            $hasPayment = PaymentDetail::where('reference_type', 'LoanInfo')
                ->where('reference_id', $loanInfo->id)
                ->whereNull('deleted_at')   // soft delete aware
                ->exists();

            if ($hasPayment) {
                return response()->json([
                    'message' => 'This loan has payment/receive entries. Delete is not allowed.'
                ], 422);
            }

            // =========================
            // Delete related vouchers
            // =========================
            $vouchers = Voucher::where('source', 'LoanInfo')
                ->where('source_id', $loanInfo->id)
                ->get();

            foreach ($vouchers as $voucher) {
                VoucherDetail::where('voucher_id', $voucher->id)->delete(); // soft delete
                $voucher->delete(); // soft delete
            }

            // =========================
            // Delete LoanInfo (soft)
            // =========================
            $loanInfo->delete(); // soft delete

            DB::commit();

            return $this->responseReturn("delete", true);
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'exception' => $e->getMessage()
            ], 422);
        }
    }

    public function approved(Request $request)
    {
        $loanid = $request->loan_info_id;

        if (!$loanid) {
            return response()->json([
                'type' => 'error',
                'message' => 'Loan Info ID missing'
            ], 422);
        }

        $user = Auth::guard('admin')->user();

        $loaninfo = LoanInfo::find($loanid);

        if (!$loaninfo) {
            return response()->json([
                'type' => 'error',
                'message' => 'Loan Info not found'
            ], 404);
        }

        // already approved check (optional but recommended)
        if ($loaninfo->approved_by) {
            return response()->json([
                'type' => 'warning',
                'message' => 'Already approved'
            ], 400);
        }

        $loaninfo->approved_by   = $user->id;
        $loaninfo->approved_date = now(); // or date('Y-m-d')
        $loaninfo->save();

        $employee_loan_account_id = $this->getAccountID('employee-loan-receivable');

        // Loan full amount payable
        // $this->createLoanVoucher($loaninfo);

        return response()->json([
            'type' => 'success',
            'message' => 'Loan Info approved successfully'
        ]);
    }

    public function approvalcancel(Request $request)
    {
        $loan_info_id = $request->loan_info_id;

        if (!$loan_info_id) {
            return response()->json([
                'type' => 'error',
                'message' => 'Commission ID missing'
            ], 422);
            return $this->responseReturn('error', null, null, false, 'Loan Info ID missing');
        }

        $loaninfo = LoanInfo::find($loan_info_id);

        if (!$loaninfo) {
            return $this->responseReturn('error', null, null, false, 'Loan Info not found');
        }

        $loaninfo->approved_by   = null;
        $loaninfo->approved_date = null;
        $loaninfo->save();

        if ($loaninfo) {
            $source = [
                'source' => 'LoanInfo',
                'source_id' => $loaninfo->id
            ];
            $this->removeVoucherBySourceInfo($source);
        }

        return $this->responseReturn('success', null, null, false, 'Loan Info approval cancelled successfully');
    }

    public function getLoanHistories($empid)
    {
        $loan_histories = [];
        if (!empty($empid)) {
            $query = LoanInfo::with(['approved_admin:id,name'])->where('employee_id', $empid)->where('is_closed', 0);
            $loan_histories = $query->get();
            if (!empty($loan_histories)) {
                $loan_histories = $loan_histories->toArray();
            }
        }
        return $loan_histories;
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck(Request $request, $id = null)
    {
        $request->validate([
            'employee_id'        => 'required|integer|exists:employees,id',
            'trns_type'          => 'required|string|in:Advance,Loan',
            'amount'             => 'required|numeric|min:1',
            'total_installment'  => 'required|integer|min:1',
            'installment_amount' => 'required|numeric|min:1',
            'deduct_from_salary' => 'required|boolean',
            'trns_date'          => 'required',
        ]);

        $employeeId = (int) $request->employee_id;
        $trnsType   = $request->trns_type;
        $amount     = (float) $request->amount;

        /**
         * -----------------------------------
         * 🔹 Common Rule (Loan only)
         * -----------------------------------
         * Previous unpaid Loan থাকলে নতুন Loan নিতে পারবে না
         */
        if ($trnsType === 'Loan') {
            $hasPendingLoan = LoanInfo::where('employee_id', $employeeId)
                ->where('trns_type', 'Loan')
                ->where('is_closed', 0)
                ->when($id, fn($q) => $q->where('id', '!=', $id))
                ->exists();

            if ($hasPendingLoan) {
                throw ValidationException::withMessages([
                    'trns_type' => ['Previous unpaid loan exists. New loan is not allowed.'],
                ]);
            }
        }

        /**
         * -----------------------------------
         * 🔹 Advance Rules Only
         * -----------------------------------
         */
        if ($trnsType === 'Advance') {

            /**
             * Pending Advance থাকলে আবার Advance দেওয়া যাবে না
             */
            $hasPendingAdvance = LoanInfo::where('employee_id', $employeeId)
                ->where('trns_type', 'Advance')
                ->whereNull('approved_by')
                ->when($id, fn($q) => $q->where('id', '!=', $id))
                ->exists();

            if ($hasPendingAdvance) {
                throw ValidationException::withMessages([
                    'trns_type' => ['Employee already has a pending advance.'],
                ]);
            }

            /**
             * Date Range Calculate
             * current month salary sheet না থাকলে:
             * today -> last salary sheet date পর্যন্ত
             * last salary sheet না থাকলে:
             * today -> last month same day পর্যন্ত
             */
            $today = Carbon::today();

            // $currentMonthSheet = SalarySheet::where('month', $today->format('F'))
            //     ->where('year', $today->year)
            //     ->whereNotNull('approved_date')
            //     ->first();

            // if ($currentMonthSheet) {
            //     throw ValidationException::withMessages([
            //         'trns_date' => ['Current month salary sheet already generated. Advance not allowed.'],
            //     ]);
            // }

            $lastSalarySheet = SalarySheet::whereNotNull('approved_date')
                ->orderBy('generated_date', 'desc')
                ->first();

            if ($lastSalarySheet) {
                $rangeStart = Carbon::parse($lastSalarySheet->generated_date);
            } else {
                $rangeStart = Carbon::today()->subMonth(); // fallback
            }

            /**
             * ঐ date range এর মধ্যে employee কত Advance নিয়েছে
             */
            $advanceTaken = LoanInfo::where('employee_id', $employeeId)
                ->where('trns_type', 'Advance')
                ->whereBetween('trns_date', [$rangeStart, $today])
                ->sum('amount');

            /**
             * ঐ date range এর মধ্যে employee salary কত
             */
            $salary = Employee::find($employeeId)->salary;

            /**
             * Total advance <= salary
             */
            if (($advanceTaken + $amount) > $salary) {
                throw ValidationException::withMessages([
                    'amount' => ['Advance amount cannot be greater than employee salary for selected period.'],
                ]);
            }
        }

        /**
         * -----------------------------------
         * Installment math rules
         * -----------------------------------
         */
        $total_installment  = (int) $request->total_installment;
        $installmentAmount = (float) $request->installment_amount;

        if ($installmentAmount > $amount) {
            throw ValidationException::withMessages([
                'installment_amount' => ['Installment amount cannot be greater than loan amount'],
            ]);
        }

        if (round($total_installment * $installmentAmount, 2) !== round($amount, 2)) {
            throw ValidationException::withMessages([
                'amount' => ['Loan amount must be equal to (total_installment x installment_amount)'],
            ]);
        }

        return true;
    }
}
