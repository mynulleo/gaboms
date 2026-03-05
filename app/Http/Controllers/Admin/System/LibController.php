<?php

namespace App\Http\Controllers\Admin\System;

use PDO;
use App\Models\Area;
use App\Models\Unit;
use App\Models\Branch;
use App\Models\Account;
use App\Models\Service;
use App\Models\Category;
use App\Models\District;
use App\Models\Employee;
use App\Models\Supplier;
use App\Models\Designation;
use App\Models\System\Menu;
use App\Models\Organization;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class LibController extends Controller
{
    private $variable = [];

    private function setTenantDb()
    {
        if (!Auth::check()) return;

        $user = Auth::user();
        $residence = Organization::select('db_host', 'db_name', 'db_user', 'db_password')
            ->where('id', $user->residence_id)
            ->first();

        if (!$residence || !$residence->db_name) return;

        Config::set('database.connections.tenant', [
            'driver' => 'mysql',
            'host' => $residence->db_host ?? 'localhost',
            'port' => env('DB_PORT', '3306'),
            'database' => $residence->db_name,
            'username' => $residence->db_user,
            'password' => $residence->db_password,
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
        ]);

        DB::purge('tenant');
        DB::reconnect('tenant');
        DB::setDefaultConnection('tenant');
    }

    private function index()
    {
        return [
            'variable' => $this->variable,
            'app_env' => config("app.env"),
            'profile_menus' => $this->profileMenus(),
            'payment_status' => $this->getPaymentStatus(),
            'services' => $this->getServices(),
            'modules' => $this->unitModuleNames(),
            'units' => $this->getUnits(),
            'districts' => $this->getDistricts(),
            'designations' => $this->getDesignations(),
            'branches' => $this->getBranches(),
            'employees' => $this->getActiveEmployees(),
            'groupaccounts' => $this->getGroupAccounts(),
            'allaccounts' => $this->getAllAccounts(),
            'accounttypes' => $this->getAccountTypes(),
            'referencetypes' => $this->getReferenceTypes(),
            'opening_balance_types' => $this->getOBlanceTypes(),
            'voucher_types' => $this->getVoucherTypes(),
            'voucher_reference_types' => $this->getVoucherReferenceTypes(),
            'suppliers' => $this->getActiveSuppliers(),
            'loaninfotypes' => $this->getLoanInfoTypes(),
            'scheduledays' => $this->getScheduleDays(),
            'installments' => $this->getInstallments(),
            'montharray' => $this->getMonths(),
            'recentyears' => $this->recentyears(),
            'paymentmethods' => $this->getPaymentMethods(),
            'mbankings' => $this->getMbankings(),
            'bandwidthtypes' => $this->getBandwidthTypes(),
            'clienttypes' => $this->getClientTypes(),
            'service_modules' => $this->getServiceModule()
        ];
    }

    /**
     * Initialize date of system
     *
     * @return array
     */
    public function systems()
    {

        return [
            'global' => $this->index(),
            'permissions' => App::make('permittedMenuArr'),
            'site' => App::make('siteSettingObj'),
            'menus' => App::make('sideMenus'),
            'categoriesModuleNames' => $this->categoriesModuleNames(),
            'user' => auth('admin')->user(),
        ];
    }

    public function profileMenus()
    {
        return Menu::where('show_profile', 1)
            ->oldest('sorting')
            ->get(['icon', 'menu_name', 'route_name', 'params']);
    }

    public function getLoanInfoTypes()
    {
        return [
            ['name' => 'Loan', 'value' => 'Loan'],
            ['name' => 'Advance', 'value' => 'Advance'],
        ];
    }

    public function getServiceModule()
    {
        return [];
    }

    public function getClientTypes()
    {
        return [
            ['name' => 'New', 'value' => 'New'],
            ['name' => 'Existing', 'value' => 'Existing'],
        ];
    }

    public function getScheduleDays()
    {
        $days = [];
        for ($i = 1; $i <= 31; $i++) {
            $days[] = [
                'id' => $i,
                'name' => $i
            ];
        }
        return $days;
    }

    public function getInstallments()
    {
        $installments = [];
        for ($i = 1; $i <= 12; $i++) {
            $installments[] = [
                'id' => $i,
                'name' => $i
            ];
        }
        return $installments;
    }

    public function recentyears()
    {
        $pre_year = date('Y') - 2;
        $previous_year = date('Y') - 1;
        $current_year = date('Y');

        return [
            ['name' => $pre_year,     'value' => $pre_year],
            ['name' => $previous_year,   'value' => $previous_year],
            ['name' => $current_year,  'value' => $current_year],
        ];
    }

    public function getMbankings()
    {
        return [
            ['name' => 'Bkash',     'value' => 'Bkash'],
            ['name' => 'Nagad',   'value' => 'Nagad'],
            ['name' => 'Qcash',  'value' => 'Qcash'],
            ['name' => 'Upay',  'value' => 'Upay'],
        ];
    }

    public function getPaymentMethods()
    {
        return [
            ['name' => 'Cash',   'value' => 'Cash'],
            ['name' => 'Cheque',  'value' => 'Cheque'],
            ['name' => 'Bank',  'value' => 'BankTransfer'],
            ['name' => 'MobileBanking', 'value' => 'MobileBanking'],
        ];
    }

    public function getMonths()
    {
        return [
            ['name' => 'January',   'value' => 'January'],
            ['name' => 'February',  'value' => 'February'],
            ['name' => 'March',     'value' => 'March'],
            ['name' => 'April',     'value' => 'April'],
            ['name' => 'May',       'value' => 'May'],
            ['name' => 'June',      'value' => 'June'],
            ['name' => 'July',      'value' => 'July'],
            ['name' => 'August',    'value' => 'August'],
            ['name' => 'September', 'value' => 'September'],
            ['name' => 'October',   'value' => 'October'],
            ['name' => 'November',  'value' => 'November'],
            ['name' => 'December',  'value' => 'December'],
        ];
    }

    public function getVoucherTypes()
    {
        return [
            ['name' => 'Pay', 'value' => 'Pay'],
            ['name' => 'Receive', 'value' => 'Receive'],
            ['name' => 'Journal', 'value' => 'Journal'],
        ];
    }

    public function getVoucherReferenceTypes()
    {
        return [
            ['name' => 'Client', 'value' => 'Client'],
            ['name' => 'Supplier', 'value' => 'Supplier'],
            ['name' => 'Employee', 'value' => 'Employee'],
            ['name' => 'Invoice', 'value' => 'Invoice'],
            ['name' => 'Purchase', 'value' => 'Purchase'],
            ['name' => 'BandWidth', 'value' => 'BandWidth'],
        ];
    }

    public function getAccountTypes()
    {
        return [
            ['name' => 'Asset', 'value' => 'Asset'],
            ['name' => 'Liability', 'value' => 'Liability'],
            ['name' => 'Income', 'value' => 'Income'],
            ['name' => 'Expense', 'value' => 'Expense'],
            ['name' => 'Equity', 'value' => 'Equity']
        ];
    }

    public function getReferenceTypes()
    {
        return [
            ['name' => 'Client', 'value' => 'Client'],
            ['name' => 'Supplier', 'value' => 'Supplier'],
            ['name' => 'Employee', 'value' => 'Employee'],
            ['name' => 'System', 'value' => 'System']
        ];
    }
    /**
     * Member designation type
     *
     * @return array
     */
    public function categoriesModuleNames()
    {
        return [
            ['name' => 'Bandwidth', 'value' => 'Bandwidth'],
            ['name' => 'Package', 'value' => 'Package'],
            ['name' => 'Item', 'value' => 'Item']
        ];
    }

    public function unitModuleNames()
    {
        return [
            ['name' => 'Service', 'value' => 'Service'],
            ['name' => 'Item', 'value' => 'Item']
        ];
    }

    public function getPaymentStatus()
    {
        return [
            ['name' => 'Paid', 'value' => 'paid'],
            ['name' => 'Unpaid', 'value' => 'unpaid'],
        ];
    }


    public function getOBlanceTypes()
    {
        return [
            ['name' => 'Debit', 'value' => 'debit'],
            ['name' => 'Credit', 'value' => 'Credit'],
        ];
    }

    public function getBandwidthTypes()
    {
        return [
            ['name' => 'UPG', 'value' => 'UPG'],
            ['name' => 'DWNG', 'value' => 'DWNG'],
        ];
    }

    /**
     * Get Current environment
     *
     * @return string
     */
    public function environment()
    {

        $currentUrl = url()->current();

        if (
            str_contains($currentUrl, 'localhost')
            || str_contains($currentUrl, '127.0.0.1')
            || str_contains($currentUrl, '192.168.')
            || str_contains($currentUrl, '103.169.160.21')
        ) {
            return 'local';
        } else {
            return 'production';
        }
    }

    public function getActiveSuppliers()
    {
        return Supplier::where('status', 'active')->get(['id', 'org_name']);
    }

    public function getAllAccounts()
    {
        return Account::where('status', 'active')
            ->select(
                'id',
                DB::raw("CONCAT(account_code, ' - ', account_name) as name")
            )
            ->get();
    }



    public function getItemsByCategory($categoryid)
    {
        return DB::table('items')
            ->where('status', 'active')
            ->where('category_id', $categoryid)
            ->select(
                'id',
                "title"
            )
            ->get();
    }

    public function getGroupAccounts()
    {
        return Account::where('status', 1)
            ->where('is_group', 1)
            ->select(
                'id',
                DB::raw("CONCAT(account_code, ' - ', account_name) as name")
            )
            ->get();
    }

    public function getAccountByType($type)
    {
        $expense_accounts = Account::where('status', 'active')
            ->where('account_type', $type)
            ->select(
                'id',
                'account_type',
                DB::raw("CONCAT(account_code, ' - ', account_name) as name")
            )
            ->get();
        return $expense_accounts;
    }

    public function getActiveEmployees()
    {
        return Employee::where('status', 'active')->whereNull('resign_date')->get(['id', 'full_name']);
    }

    public function getBranches()
    {
        return Branch::where('status', 'active')->get(['id', 'branch_name']);
    }

    public function getDesignations()
    {
        return Designation::where('status', 'active')->get(['id', 'title']);
    }

    public function getAreas($districtid = null)
    {
        $query = Area::where('status', 'active');
        if (!empty($districtid)) {
            $query->where('district_id', $districtid);
        }
        $data = $query->get(['id', 'area_name']);
        return $data;
    }

    public function getUnits($module = null)
    {
        $query = Unit::where('status', 'active');
        if (!empty($module)) {
            $query->where('module', $module);
        }
        $data = $query->get(['id', 'title']);
        return $data;
    }

    public function getDistricts()
    {
        return District::where('status', 'active')->get(['id', 'district_name']);
    }

    public function getServices()
    {
        return Service::where('status', 'active')->get(['id', 'title']);
    }

    public function getcategories($modulename = null)
    {
        $query = Category::where('status', 'active');
        if ($modulename) {
            $query->where('module_name', $modulename);
        }

        $categories = $query->get(['id', 'title']);
        return $categories;
    }
}
