<?php

namespace App\Traits;

use DateTime;
use App\Models\Client;
use App\Models\Account;
use App\Models\Expense;
use App\Models\Payment;
use App\Models\Employee;
use App\Models\Purchase;
use App\Models\Supplier;
use App\Models\SalarySheet;
use Illuminate\Http\Request;
use App\Models\ExpenseDetail;
use App\Models\PaymentDetail;
use App\Models\VoucherDetail;
use App\Models\AccountDetails;
use App\Models\UplinkProvider;
use Illuminate\Support\Carbon;
use App\Models\SalarySheetDetail;
use Illuminate\Support\Facades\DB;

trait ReportTrait {}
