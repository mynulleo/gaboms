<?php

namespace App\Traits;

use App\Models\Account;
use App\Models\Expense;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\LoanInfo;
use App\Models\Purchase;
use App\Models\Commission;
use App\Models\ExpenseDetail;
use App\Models\PaymentDetail;
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
}
