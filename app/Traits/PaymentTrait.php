<?php

namespace App\Traits;

use App\Models\Account;
use App\Models\Commission;
use App\Models\Expense;
use App\Models\ExpenseDetail;
use App\Models\Invoice;
use App\Models\LoanInfo;
use App\Models\LoanInstallment;
use App\Models\Payment;
use App\Models\PaymentDetail;
use App\Models\Purchase;
use App\Models\SalarySheetDetail;

trait PaymentTrait
{

    /**
     * Retrieve all due invoices and bandwidth charges for a client.
     *
     * Fetches unpaid bandwidth history records and invoices with pending amounts
     * for the specified client, formatting them into a standardized array structure
     * containing reference type, ID, descriptive info, and amount due.
     *
     * @param int $clientid The ID of the client
     * @return array An array of due items with keys: reference_type, reference_id, reference_info, amount
     */
    public function clientDueInvoices($clientid)
    {
        $datas = [];

        $invoices = Invoice::where('client_id', $clientid)->where('is_closed', 0)->get();

        if ($invoices) {
            foreach ($invoices as $idata) {

                $paid_amount = $this->getRefPaidAmount('Invoice', $idata->id);

                $due_amount = $idata->amount - $paid_amount;

                $data = [
                    'reference_type'    => 'Invoice',
                    'reference_id'      => $idata->id,
                    'account_id'        => $this->getAccountID('accounts-receivable'),
                    'reference_info'    => $idata->invoice_no . '-' . date('d M, Y', strtotime($idata->invoice_date)),
                    'amount'            => $idata->amount,
                    'paid_amount'       => $paid_amount,
                    'due_amount'        => $due_amount,
                    'ref_module'        => 'Invoice',
                    'ref_module_id'     => $idata->id,
                ];
                $datas[] = $data;
            }
        }
        return $datas;
    }

    public function EmployeeLoanInstallment($empid)
    {
        $datas = [];
        $today = date('Y-m-d');
        $currentMonth = date('Y-m'); // যেমন: 2026-02
        $currentYear  = date('Y');
        $currentMonthNo = date('m');

        $loans = LoanInstallment::with('loaninfo')->where('employee_id', $empid)
            ->where('deduct_from_salary', 0)
            ->whereDate('instalment_date', '<=', $today)
            ->where('is_closed', 0)
            ->whereHas('loaninfo', function ($q) {
                $q->whereNotNull('approved_by');
            })
            ->get();

        foreach ($loans as $loan) {

            // All conditions passed → datas এ ঢুকবে
            $employeeLoanAccountId = $this->getAccountID('employee-loan-receivable');

            $datas[] = [
                'reference_type' => 'LoanInstallment',
                'reference_id'   => $loan->id,
                'account_id'     => $employeeLoanAccountId,
                'reference_info' => $loan->type . ' TrnsID-' . $loan->loaninfo?->trnsid . ' | Amount: ' . $loan->loninfo?->amount
                    . ' | Approved: ' . $loan->loaninfo?->approved_date,
                'amount'         => (float) $loan->amount,
                'paid_amount'    => 0,
                'due_amount'     => (float) $loan->amount,
            ];
        }

        return $datas;
    }

    public function supplierPurchaseInvoices($supid)
    {
        $datas = [];
        $pinvoices = Purchase::where('supplier_id', $supid)->where('is_closed', 0)->get();

        if ($pinvoices) {
            foreach ($pinvoices as $idata) {

                $paid_amount = $this->getRefPaidAmount('Purchase', $idata->id);

                $due_amount = $idata->amount - $paid_amount;

                $data = [
                    'reference_type'    => 'Purchase',
                    'reference_id'      => $idata->id,
                    'account_id'        => $this->getExpenseAccount('Purchase'),
                    'reference_info'    => $idata->invoiceno . '-' . date('d M, Y', strtotime($idata->purchase_date)),
                    'amount'            => $idata->total_amount,
                    'paid_amount'       => $paid_amount,
                    'due_amount'        => $due_amount
                ];
                $datas[] = $data;
            }
        }
        return $datas;
    }

    public function getEmpPayableDatas($empid)
    {
        $datas = [];

        // Salary Sheet data start
        $details = SalarySheetDetail::with('salary_sheet')
            ->where('employee_id', $empid)
            ->where('is_paid', 0)
            ->whereHas('salary_sheet', function ($q) {
                $q->whereNotNull('approved_by');
            })
            ->get();

        $datas = $details->map(function ($d) {
            return [
                'reference_type' => 'SalarySheetDetail',
                'reference_id'   => $d->id,
                'account_id'     => $this->getExpenseAccount('SalarySheetDetail'),
                'reference_info' => $d->salary_sheet->month . ' ' . $d->salary_sheet->year,
                'amount'         => $d->total,
                'paid_amount'    => 0,
                'due_amount'     => $d->total,
            ];
        })->toArray();

        // Salary Sheet data end

        // Loan data start
        $loanhistories = LoanInfo::where('employee_id', $empid)
            ->where('is_paid', 0)
            ->whereNotNull('approved_by')
            ->get();

        foreach ($loanhistories as $loan) {
            $employee_loan_account_id = $this->getAccountID('employee-loan-receivable');
            $data = [
                'reference_type' => 'LoanInfo',
                'reference_id'   => $loan->id,
                'account_id'     => $employee_loan_account_id,
                'reference_info' => $loan->trns_type . 'TrnsID -' . $loan->trnsid . '<br> Amount - ' . $loan->amount . '<br> Approved Date -' . $loan->approved_date,
                'amount'         => $loan->amount,
                'paid_amount'    => 0,
                'due_amount'     => $loan->amount,
            ];
            $datas[] = $data;
        }
        // Loan data end

        // Loan data start
        $expense_details = ExpenseDetail::with('expense')
            ->where('is_closed', 0)
            ->whereHas('expense', function ($q) use ($empid) {
                $q->where('employee_id', $empid)
                    ->whereNotNull('approved_by');
            })
            ->get();

        foreach ($expense_details as $detail) {

            $expense = $detail->expense;

            $data = [
                'reference_type' => 'ExpenseDetail',
                'reference_id'   => $detail->id,
                'account_id'     => $detail->account_id,
                'reference_info' => 'Exp Date -' . $expense->expense_date . '<br>' . $detail->narration,
                'amount'         => $detail->amount,
                'paid_amount'    => 0,
                'due_amount'     => $detail->amount,
            ];

            $datas[] = $data;
        }

        $commissions = Commission::with('client:id,name')
            ->where('status', 'active')
            ->where('is_closed', 0)
            ->where('approved_by', '!=', null)
            ->get();

        if ($commissions) {
            $commission_account_id = Account::where('system_key_name', 'commission-expense')->first()->id;
            foreach ($commissions as $commission) {
                $data = [
                    'reference_type' => 'Commission',
                    'reference_id'   => $commission->id,
                    'account_id'     => $commission_account_id,
                    'reference_info' => 'Commission for the client -' .  $commission->client?->name,
                    'amount'         => $commission->amount,
                    'paid_amount'    => 0,
                    'due_amount'     => $commission->amount,
                ];

                $datas[] = $data;
            }
        }

        return $datas;
    }

    public function getofficeexpenses()
    {
        $datas = [];
        $records = ExpenseDetail::with('expense')
            ->whereHas('expense', function ($q) {
                $q->whereNull('employee_id');
                $q->whereNotNull('approved_by');
            })
            ->where('is_closed', 0)
            ->get();

        foreach ($records as $record) {
            $paid_amount = $this->getRefPaidAmount('ExpenseDetail', $record->id);
            $data = [
                'reference_type' => 'ExpenseDetail',
                'reference_id'   => $record->id,  //Expense Detail ID
                'reference_info' => 'exp ID -' . $record->expense?->expenseid . ', <br> Exp Date -' . $record->expense?->expense_date,
                'account_id'     => $record->account_id,
                'amount'         => $record->amount,
                'paid_amount'    => $paid_amount,
                'due_amount'     => (float) ($record->amount - $paid_amount),
            ];
            $datas[] = $data;
        }

        //Commission expenses
        $commissions = Commission::with('client:id,name')
            ->where('status', 'active')
            ->where('is_closed', 0)
            ->whereNull('employee_id')
            ->whereNotNull('approved_by')
            ->get();

        if ($commissions) {
            $commission_account_id = Account::where('system_key_name', 'commission-expense')->first()->id;
            foreach ($commissions as $commission) {
                $paid_amount = $this->getRefPaidAmount('Commission', $commission->id);
                $data = [
                    'reference_type' => 'Commission',
                    'reference_id'   => $commission->id,
                    'account_id'     => $commission_account_id,
                    'reference_info' => 'Commission for the client -' .  $commission->client?->name,
                    'amount'         => $commission->amount,
                    'paid_amount'    => $paid_amount,
                    'due_amount'     => (float) ($commission->amount - $paid_amount),
                ];

                $datas[] = $data;
            }
        }
        return $datas;
    }

    public function getRefPaidAmount($ref_type, $ref_id)
    {
        $paid_amt = PaymentDetail::where('reference_type', $ref_type)
            ->where('reference_id', $ref_id)
            ->sum('amount');
        return $paid_amt;
    }

    /**
     * Update the reference value based on reference type.
     *
     * Routes the update operation to the appropriate handler method based on
     * the reference_type field. Currently supports 'Invoice' type; other types
     * are silently ignored.
     *
     * @param array $ref An associative array with at least 'reference_type' key
     * @return bool True if update succeeded or was ignored, false if reference_type is missing
     */
    public function updateRefValue(array $ref, string $payment_type = ''): bool
    {
        if (empty($ref['reference_type'])) {
            return false;
        }

        if ($ref['reference_type'] === 'Invoice') {
            return $this->updateInvoiceInfo($ref);
        }

        if ($ref['reference_type'] === 'SalarySheetDetail') {
            return $this->updateSalarySheet($ref);
        }

        if ($ref['reference_type'] === 'Commission') {
            return $this->updateCommission($ref);
        }

        if ($ref['reference_type'] === 'LoanInfo') {
            return $this->updateLoanInfo($ref, $payment_type);
        }

        if ($ref['reference_type'] === 'ExpenseDetail') {
            return $this->updateExpenseDetail($ref);
        }

        if ($ref['reference_type'] == 'LoanInstallment' && $payment_type == 'Receive') {
            return $this->updateLoanInstallment($ref);
        }

        return true; // other reference types ignored intentionally
    }

    public function updateExpenseDetail(array $ref): bool
    {
        $expense = ExpenseDetail::find($ref['reference_id']);

        if (!$expense) {
            return false;
        }

        $isClosed = ($ref['amount'] == $expense->amount) || (!empty($ref['is_closed']));

        $expense->update([
            'is_paid' => 1,
            'is_closed' => $isClosed ? 1 : 0
        ]);

        return true;
    }


    /**
     * Update invoice payment status and closure state.
     *
     * Finds an invoice by ID and updates its closure status. The invoice is marked
     * as closed if either the paid amount equals the total invoice amount or if
     * the is_closed flag is explicitly set in the input array.
     *
     * @param array $inv An associative array containing:
     *   - reference_id: The invoice ID to update
     *   - amount: The payment amount (compared against invoice total)
     *   - is_closed: (optional) Flag to force closure
     * @return bool True if invoice was updated successfully, false if invoice not found
     */
    public function updateInvoiceInfo(array $inv): bool
    {
        $invoice = Invoice::find($inv['reference_id']);

        if (!$invoice) {
            return false;
        }

        $isClosed = ($inv['amount'] == $invoice->amount) || (!empty($inv['is_closed']));

        $invoice->update([
            'paid_amount' => $inv['amount'],
            'is_closed' => $isClosed ? 1 : 0
        ]);

        return true;
    }

    public function updateSalarySheet($ref)
    {
        $salarysheetdetails = SalarySheetDetail::find($ref['reference_id']);

        if (!$salarysheetdetails) {
            return false;
        }

        $isPaid = ($ref['amount'] == $salarysheetdetails->total) || (!empty($ref['is_closed']));

        $salarysheetdetails->update([
            'is_paid' => $isPaid ? 1 : 0
        ]);

        if ($salarysheetdetails->installment > 0 && $salarysheetdetails->installment_history) {

            $installmenthistories = json_decode($salarysheetdetails->installment_history, 1);
            // update installment data
            foreach ($installmenthistories as $hdata) {
                $LoanInstallment = LoanInstallment::find($hdata['id']);
                $LoanInstallment->update([
                    'is_closed' => 1
                ]);
            }
        }

        return true;
    }

    public function updateLoanInstallment(array $refdata): bool
    {
        $loaninstallmentid = $refdata['reference_id'];
        $loanInstllment = LoanInstallment::find($loaninstallmentid);
        if ($loanInstllment) {
            $loanInstllment->update([
                'is_closed' => 1
            ]);
        }
        return true;
    }

    public function updateCommission(array $refdata): bool
    {

        $commission = Commission::find($refdata['reference_id']);

        if (!$commission) {
            return false;
        }

        $isClosed = ($refdata['amount'] == $commission->amount) || (!empty($refdata['is_closed']));

        $commission->update([
            'is_closed' => $isClosed ? 1 : 0
        ]);

        return true;
    }

    public function updateLoanInfo(array $refdata, string $payment_type): bool
    {
        $loaninfo = LoanInfo::find($refdata['reference_id']);
        if (!$loaninfo) {
            return false;
        }

        if ($payment_type == 'Receive') {
            $paidNow = (float) $refdata['amount'];
            // Due হিসাব করো
            $dueAmount = max(0, (float) $loaninfo->due_amount - $paidNow);
            // Closed হবে শুধু তখনই যখন due 0
            $isClosed = ($dueAmount == 0);
            $loaninfo->update([
                'due_amount'  => $dueAmount,
                'is_closed'   => $isClosed ? 1 : 0,
            ]);
        }

        if ($payment_type == 'Pay') {
            $loaninfo->update([
                'is_paid'     => 1,
            ]);
        }


        return true;
    }
}
