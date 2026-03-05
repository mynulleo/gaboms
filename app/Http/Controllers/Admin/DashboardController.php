<?php

namespace App\Http\Controllers\Admin;

use App\Models\Invoice;
use App\Models\Package;
use App\Models\Service;
use App\Models\Residence;
use App\Models\System\Menu;
use Illuminate\Http\Request;
use App\Models\UserLoginHistory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\ItemStockSummary;
use Spatie\Activitylog\Models\Activity;


class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = auth('admin')->user();

        if ($request->ajax()) {
            $role = $user->role_id;

            switch ($role) {
                case 1:
                    $dashboardData = $this->getAdminDashboard($user);
                    break;
                default:
                    $dashboardData = $this->getCommonDashboard();
                    break;
            }

            return response()->json([
                'role_id' => $role,
                'dashboard' => $dashboardData,
            ]);
        }

        return view('admin.layouts.admin_app');
    }

    public function getAdminDashboard()
    {
        $menus = Menu::get();
        $dashboardMenus = Menu::query()
            ->where('show_dasboard', true)
            ->get()
            ->each(function ($menu) use ($menus) {
                $getParentById = function ($id, $parents) {
                    $parent = $parents->firstWhere('id', $id);

                    return $parent;
                };

                $parent = $getParentById($menu->parent_id, $menus);

                if (! is_null($parent)) {
                    $menu->parent_title = $parent->menu_name;
                } else {
                    $menu->parent_title = $menu->menu_name;
                }

                // Resolve the model class and count the total data
                if ($menu->module_name) {
                    $model = $menu->module_name;
                    $menu->total_data_count = $model::count();
                } else {
                    $menu->total_data_count = 0;
                }
            });

        return [
            'dashboardMenus' => $dashboardMenus,
            'pieData' => $this->pieData(),
            'barData' => $this->barData(),
            'stockData' => $this->stockData(),
            'clientSummary' => $this->clientSummary(),
            'statisticsData' => $this->statisticsData(),
        ];
    }

    public function getCommonDashboard()
    {
        $menus = Menu::get();
        $dashboardMenus = Menu::query()
            ->where('show_dasboard', true)
            ->get()
            ->each(function ($menu) use ($menus) {
                $getParentById = function ($id, $parents) {
                    $parent = $parents->firstWhere('id', $id);

                    return $parent;
                };

                $parent = $getParentById($menu->parent_id, $menus);

                if (! is_null($parent)) {
                    $menu->parent_title = $parent->menu_name;
                } else {
                    $menu->parent_title = $menu->menu_name;
                }

                // Resolve the model class and count the total data
                if ($menu->module_name) {
                    $model = $menu->module_name;
                    $menu->total_data_count = $model::count();
                } else {
                    $menu->total_data_count = 0;
                }
            });
        return [
            'dashboardMenus' => $dashboardMenus,
            'pieData' => $this->pieData(),
            'stockData' => $this->stockData(),
            'bandwidthData' => $this->bandwidthData()
        ];
    }

    public function statisticsData()
    {
        $month = date('m');
        $year  = date('Y');

        /* -----------------------------------
        | 1. Total Bandwidth Sale (Overall)
        |-----------------------------------*/
        $totalBandwidthSale = DB::table('bandwidth_history_details as bhd')
            ->join('bandwidth_histories as bh', 'bh.id', '=', 'bhd.bandwidth_history_id')
            ->where('bh.type', 'Sale')
            ->where('bh.status', 'active')
            ->where('bhd.status', 'active')
            ->sum(DB::raw('CAST(bhd.bandwidth AS UNSIGNED)'));

        /* -----------------------------------
        | 1. Total Bandwidth Sale (Overall)
        |-----------------------------------*/
        $totalBandwidthPurchase = DB::table('bandwidth_history_details as bhd')
            ->join('bandwidth_histories as bh', 'bh.id', '=', 'bhd.bandwidth_history_id')
            ->where('bh.type', 'Sale')
            ->where('bh.status', 'active')
            ->where('bhd.status', 'active')
            ->sum(DB::raw('CAST(bhd.bandwidth AS UNSIGNED)'));

        /* -----------------------------------
        | 2. Total Items
        |-----------------------------------*/
        $totalItems = DB::table('items')
            ->where('status', 'active')
            ->count();

        /* -----------------------------------
        | 3. Total Suppliers (Uplink Providers)
        |-----------------------------------*/
        $totalSuppliers = DB::table('suppliers')
            ->where('status', 'active')
            ->count();

        /* -----------------------------------
        | 4. Current Month Purchase
        |-----------------------------------*/
        $currentMonthPurchase = DB::table('purchases')
            ->whereMonth('purchase_date', $month)
            ->whereYear('purchase_date', $year)
            ->where('status', 'active')
            ->sum('total_amount');

        /* -----------------------------------
        | Response Format (Dashboard Ready)
        |-----------------------------------*/
        return [
            'total_bandwidth_sale'          => (int) $totalBandwidthSale,        // Mbps
            'total_bandwidth_purchase'      => (int) $totalBandwidthPurchase,
            'total_suppliers'               => (int) $totalSuppliers,
            'total_items'                   => (int) $totalItems,
            'current_month_purchase'        => (float) $currentMonthPurchase,
        ];
    }

    public function stockData()
    {
        return ItemStockSummary::with('Item:id,title,barcode')->take(10)->get();
    }

    public function bandwidthData()
    {

        $month = date('m');
        $year  = date('Y');

        return DB::table('bandwidth_history_details as bhd')
            ->join('bandwidth_histories as bh', 'bh.id', '=', 'bhd.bandwidth_history_id')
            ->join('categories as c', 'c.id', '=', 'bhd.category_id')
            ->select(
                'bhd.category_id',
                'c.title as category_name',
                DB::raw('SUM(CAST(bhd.bandwidth AS UNSIGNED)) as total_bandwidth')
            )
            ->whereMonth('bh.transaction_date', $month)
            ->whereYear('bh.transaction_date', $year)
            ->where('bh.status', 'active')
            ->where('bhd.status', 'active')
            ->groupBy('bhd.category_id', 'c.title')
            ->orderBy('bhd.category_id')
            ->get();
    }

    public function clientSummary()
    {
        // ===== Date Ranges =====
        $today = date('Y-m-d');

        // Previous Month
        $pm_first_date = date('Y-m-01', strtotime('first day of last month'));
        $pm_last_date  = date('Y-m-t', strtotime('last day of last month'));

        // Current Month
        $cm_first_date = date('Y-m-01');

        // ===== Clients =====
        $totalClients = DB::table('clients')
            ->where('status', 'active')
            ->count();

        $previous_month_clients = DB::table('clients')
            ->where('status', 'active')
            ->whereBetween('reg_date', [$pm_first_date, $pm_last_date])
            ->count();

        $current_month_clients = DB::table('clients')
            ->where('status', 'active')
            ->whereBetween('reg_date', [$cm_first_date, $today])
            ->count();

        // ================= INVOICE DUE =================

        // Total Invoice Due
        $total_invoice_due = DB::table('invoices')
            ->where('status', 'active')
            ->select(DB::raw('SUM(amount - IFNULL(paid_amount,0)) as due'))
            ->value('due');

        // Previous Month Invoice Due
        $pm_invoice_due = DB::table('invoices')
            ->where('status', 'active')
            ->whereBetween('invoice_date', [$pm_first_date, $pm_last_date])
            ->select(DB::raw('SUM(amount - IFNULL(paid_amount,0)) as due'))
            ->value('due');

        // Current Month Invoice Due
        $cm_invoice_due = DB::table('invoices')
            ->where('status', 'active')
            ->whereBetween('invoice_date', [$cm_first_date, $today])
            ->select(DB::raw('SUM(amount - IFNULL(paid_amount,0)) as due'))
            ->value('due');

        // ================= BANDWIDTH DUE =================
        // ধরছি total_include_amount ই due amount

        // Total Bandwidth Due
        $total_bandwidth_due = DB::table('bandwidth_histories')
            ->where('type', 'Sale')
            ->where('status', 'active')
            ->where('is_closed', 0)
            ->sum('total_include_amount');

        // Previous Month Bandwidth Due
        $pm_bandwidth_due = DB::table('bandwidth_histories')
            ->where('type', 'Sale')
            ->where('status', 'active')
            ->where('is_closed', 0)
            ->whereBetween('transaction_date', [$pm_first_date, $pm_last_date])
            ->sum('total_include_amount');

        // Current Month Bandwidth Due
        $cm_bandwidth_due = DB::table('bandwidth_histories')
            ->where('type', 'Sale')
            ->where('status', 'active')
            ->where('is_closed', 0)
            ->whereBetween('transaction_date', [$cm_first_date, $today])
            ->sum('total_include_amount');

        // ================= FINAL DUE (INVOICE + BANDWIDTH) =================

        $total_outstanding   = ($total_invoice_due ?? 0) + ($total_bandwidth_due ?? 0);
        $previous_month_due  = ($pm_invoice_due ?? 0) + ($pm_bandwidth_due ?? 0);
        $current_month_due   = ($cm_invoice_due ?? 0) + ($cm_bandwidth_due ?? 0);

        return [
            'total_clients'     => $totalClients,
            'pm_clients'        => $previous_month_clients,
            'cm_clients'        => $current_month_clients,

            'total_outstanding' => round($total_outstanding, 2),
            'pm_due'            => round($previous_month_due, 2),
            'cm_due'            => round($current_month_due, 2),

            // Debug চাইলে আলাদা আলাদা amount-ও পাঠাতে পারো
            'invoice_due_total' => round($total_invoice_due ?? 0, 2),
            'bandwidth_due_total' => round($total_bandwidth_due ?? 0, 2),
        ];
    }

    /**
     * Bar chart
     *
     * @return array
     */
    public function barData()
    {
        $year = date('Y');

        $invoices = DB::table('invoices')
            ->selectRaw("
            MONTH(invoice_date) as month,
            SUM(amount) as total_invoice,
            SUM(COALESCE(paid_amount, 0)) as total_receive
        ")
            ->whereYear('invoice_date', $year)
            ->whereNull('deleted_at')
            ->groupBy(DB::raw('MONTH(invoice_date)'))
            ->orderBy(DB::raw('MONTH(invoice_date)'))
            ->get();

        $report = $this->reArrangeDataFormate($invoices);

        return [
            'labels' => [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            'data' => $report
        ];
    }

    public function reArrangeDataFormate($invoices)
    {
        $invoice = [];
        $receive = [];
        $due = [];

        // Initialize all 12 months
        foreach (range(1, 12) as $month) {
            $invoice[$month] = 0;
            $receive[$month] = 0;
            $due[$month] = 0;
        }

        foreach ($invoices as $row) {
            $month = (int) $row->month;

            $invoice[$month] = (float) $row->total_invoice;
            $receive[$month] = (float) $row->total_receive;
            $due[$month] = (float) ($row->total_invoice - $row->total_receive);
        }

        return [
            'invoice' => $invoice,
            'receive' => $receive,
            'due' => $due,
        ];
    }

    /**
     * Pie chart
     *
     * @return array
     */
    public function pieData()
    {
        $result = DB::table('clients')
            ->join('services', 'services.id', '=', 'clients.service_id')
            ->where('clients.status', 'active')
            ->groupBy('clients.service_id', 'services.title')
            ->orderBy('services.id') // sequence ঠিক রাখার জন্য
            ->select(
                'services.title as service_name',
                DB::raw('COUNT(clients.id) as total_client')
            )
            ->get();

        $response = [
            'labels' => [],
            'data'   => [],
        ];

        foreach ($result as $row) {
            $response['labels'][] = $row->service_name;
            $response['data'][]   = $row->total_client;
        }

        return $response;
    }
}
