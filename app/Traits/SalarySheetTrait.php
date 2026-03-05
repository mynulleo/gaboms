<?php

namespace App\Traits;

use App\Models\Employee;
use App\Models\LoanInstallment;
use App\Models\SalarySheet;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

trait SalarySheetTrait
{
    public function getsalarysheetdata()
    {
        $salarysheetdata =  Employee::with('designation:id,title,total_salary')
            ->select('id', 'empid', 'full_name', 'designation_id', 'salary')
            ->get()
            ->map(function ($emp) {
                $installments = $this->getEmpInstallment($emp->id);
                return [
                    'employee_id' => $emp->id,
                    'employee_name' => '(' . $emp->empid . ') ' . $emp->full_name,
                    'designation' => $emp->designation->title ?? '',
                    'salary' => $emp->salary ?? 0,
                    'installment' => $installments['total_installment'],
                    'installment_history' => json_encode($installments['data'])
                ];
            });

        return $salarysheetdata;
    }

    public function getEmpInstallment($empid)
    {
        $totalInstallment = 0;
        $today = date('Y-m-d');
        $total_installment = 0;
        $history_data = [];

        if (empty($empid)) {
            return 0;
        }

        $loans = LoanInstallment::with('loaninfo')->where('employee_id', $empid)
            ->where('deduct_from_salary', 1)
            ->whereDate('instalment_date', '<=', $today)
            ->where('is_closed', 0)
            ->whereHas('loaninfo', function ($q) {
                $q->whereNotNull('approved_by');
                $q->where('is_paid', 1);
            })
            ->get();

        foreach ($loans as $loan) {

            $total_installment += $loan->amount;
            $history_data[] = [
                'id' => $loan->id,
                'amount' => $loan->amount
            ];
        }

        return [
            'total_installment' => $total_installment,
            'data'              => $history_data
        ];
    }

    public function approved(Request $request)
    {
        $salarysheetid = $request->salary_sheet_id;

        if (!$salarysheetid) {
            return response()->json([
                'type' => '',
                'message' => ''
            ], 422);
            return $this->responseReturn('error', null, null, false, 'Salary Sheet ID missing');
        }

        $user = Auth::guard('admin')->user();

        $salarySheet = SalarySheet::with('salary_sheet_details')->find($salarysheetid);

        if (!$salarySheet) {
            return $this->responseReturn('error', null, null, false, 'Salary Sheet not found');
        }

        // already approved check (optional but recommended)
        if ($salarySheet->approved_by) {
            return $this->responseReturn('warning', null, null, false, 'Already approved');
        }

        $salarySheet->approved_by   = $user->id;
        $salarySheet->approved_date = now(); // or date('Y-m-d')
        $salarySheet->save();

        if ($salarySheet->salary_sheet_details) {
            foreach ($salarySheet->salary_sheet_details as $record) {
                // create payable voucher
                $vdata = [
                    'module'    => 'SalarySheetDetail',
                    'date'      => $salarySheet->generated_date,
                    'amount'    => $record->total,
                    'source_id' => $record->id,
                    'ref_id'    => $record->employee_id
                ];
                $this->createPayableVoucher($vdata);
            }
        }

        return $this->responseReturn('success', null, null, false, 'Salary Sheet approved successfully');
    }


    public function approvalcancel(Request $request)
    {
        $salary_sheet_id = $request->salary_sheet_id;

        if (!$salary_sheet_id) {
            return response()->json([
                'type' => 'error',
                'message' => 'Commission ID missing'
            ], 422);
        }

        $salary_sheet = SalarySheet::with('salary_sheet_details')->find($salary_sheet_id);

        if (!$salary_sheet) {
            return $this->responseReturn('error', null, null, false, 'expense not found');
        }

        $salary_sheet->approved_by   = null;
        $salary_sheet->approved_date = null;
        $salary_sheet->save();

        if ($salary_sheet->salary_sheet_details) {
            foreach ($salary_sheet->salary_sheet_details as $ssd) {
                $source = [
                    'source' => 'SalarySheetDetail',
                    'source_id' => $ssd->id
                ];
                $this->removeVoucherBySourceInfo($source);
            }
        }

        return response()->json([
            'type' => 'success',
            'message' => 'Commission approval cancelled successfully'
        ]);
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        $request->validate([
            'month' => 'required|string',
            'year'  => 'required|integer',
            'salary_sheet_details' => 'required|array|min:1',
            'salary_sheet_details.*.employee_id' => 'required|integer|exists:employees,id',
            'salary_sheet_details.*.salary' => 'required|numeric|min:0',
            'salary_sheet_details.*.total'  => 'required|numeric|min:0',
        ]);

        $exists = SalarySheet::where('month', $request->month)
            ->where('year', $request->year)
            ->when($id, fn($q) => $q->where('id', '!=', $id))
            ->exists();

        if ($exists) {
            throw \Illuminate\Validation\ValidationException::withMessages([
                'month' => ["Salary Sheet already created for {$request->month} {$request->year}"]
            ]);
        }

        return true;
    }
}
