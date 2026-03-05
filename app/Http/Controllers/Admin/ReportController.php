<?php

namespace App\Http\Controllers\Admin;

use Storage;
use App\Traits\ReportTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Base\BaseController;
use App\Models\FundAccountBalance;
use App\Models\ItemStockSummary;
use App\Models\PaymentDetail;

class ReportController extends BaseController
{
    use ReportTrait;


    public function itemLadger(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }
        $from_date = null;
        $to_date = null;

        $itemid = null;
        $searchdata = $request->all();
        if ($searchdata && array_key_exists('item_id', $searchdata)) {
            $itemid = $searchdata['item_id'];
            $from_date = vue_to_server_date($searchdata['start_date']);
            $to_date = vue_to_server_date($searchdata['end_date']);
        }

        $stockledger = $this->getItemLadger($itemid, $from_date, $to_date);
        return $stockledger;
    }

    public function availablestock(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }
        $searchdata = $request->all();

        $query = ItemStockSummary::query()
            ->with([
                'item:id,title,category_id,unit_id',
                'item.category:id,title',
                'item.unit:id,title'
            ]);

        if ($searchdata) {
            /** 🔍 Category filter */
            if (!empty($searchdata['category_id'])) {
                $query->whereHas('item', function ($q) use ($searchdata) {
                    $q->where('category_id', $searchdata['category_id']);
                });
            }

            if ($searchdata['is_zero'] == '1') {
                $query->where('current_stock', 0);
            }

            if (
                isset($searchdata['from_qty'], $searchdata['to_qty']) &&
                is_numeric($searchdata['from_qty']) &&
                is_numeric($searchdata['to_qty'])
            ) {
                $query->where('current_stock', '>=', (int) $searchdata['from_qty']);
                $query->where('current_stock', '<=', (int) $searchdata['to_qty']);
            }
        }


        /** 📊 Order for report */
        $query->orderBy('item_id');

        $results = $query->get();
        return $results;
    }

    public function incomestatement(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }
        $searchdata = $request->all();
        $datas = $this->getIncomeStatement($searchdata);
        return $datas;
    }

    public function expensestatement(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getExpenseStatement($searchdata);
    }

    public function cashbook(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getCashBook($searchdata);
    }

    public function ledger(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getLedger($searchdata);
    }

    public function trialbalance(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getTrialBalance($searchdata);
    }

    public function receivable(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getReceivable($searchdata);
    }

    public function payable(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getPayable($searchdata);
    }

    public function balancesheet(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getBalancesheet($searchdata);
    }

    public function clientLedger(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getClientLedger($searchdata);
    }

    public function uplinkproviderledger(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $searchdata = $request->all();
        return $this->getUplinkProviderLedger($searchdata);
    }

    public function supplierledger(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $data = $request->all();
        $supplierledger = $this->getSupplierLedger($data);
        return $supplierledger;
    }

    public function employeeledger(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $data = $request->all();
        $employeeledger = $this->getEmployeeLedger($data);
        return $employeeledger;
    }

    public function funds(Request $request)
    {
        if ($request->format() == 'html') {
            return view('admin.layouts.admin_app');
        }

        $funds = FundAccountBalance::get();
        $total_fund = $funds->sum('current_balance');
        return [
            'funds' => $funds,
            'total_fund' => $total_fund
        ];
    }
}
