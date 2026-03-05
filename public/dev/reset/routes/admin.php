<?php

use App\Helpers\GlobalHelper;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\RobotController;
use App\Http\Controllers\Admin\Support\SupportController;
use App\Http\Controllers\Admin\System\ModuleController;
use Illuminate\Support\Facades\Route;

// Backend Route...
Route::group(['prefix' => 'backend', 'as' => 'backend.'], function () {

    // Auth Route...
    Route::post('forget', [App\Http\Controllers\Auth\AdminLoginController::class, 'forget'])->name('forget');
    Route::any('password-reset', [App\Http\Controllers\Auth\AdminLoginController::class, 'reset'])->name('reset');
});

// Authorized Route...
Route::group(['middleware' => 'auth:admin'], function () {

    // Support Route...
    Route::get('support/countries', [SupportController::class, 'countries']);
    Route::get('support/page', [SupportController::class, 'page']);
    Route::get('get-modules', [ModuleController::class, 'getModules']);

    Route::get('/frontend-routes', function () {
        return response()->json(GlobalHelper::getAllRouteNames());
    });

    // Custom Pagination Example Route...
    Route::get('custom/pagination', [ProfileController::class, 'news']);

    // Sitemap Route...
    Route::get('sitemap-data', [App\Http\Controllers\Admin\System\ActivityLogController::class, 'sitemapData'])->name('sitemapData');

    // Auth Route...
    Route::post('logout', [App\Http\Controllers\Auth\AdminLoginController::class, 'logout'])->name('logout');

    // Systems Route...
    Route::get('systems-update', [App\Http\Controllers\Admin\System\RoleController::class, 'systemsRoleUpdate']);
    Route::get('get-permissions', [App\Http\Controllers\Admin\System\RoleController::class, 'getPermissions']);
    Route::get('get-menus/{any?}', [App\Http\Controllers\Admin\System\MenuController::class, 'menus']);
    Route::get('initialize-systems', [App\Http\Controllers\Admin\System\LibController::class, 'systems']);

    // Category Route...
    Route::get('get-category/{type}', [App\Http\Controllers\Admin\CategoryController::class, 'getCategory']);
    Route::get('paynow/{invoiceid}', [App\Http\Controllers\Admin\InvoiceController::class, 'paynow']);

    // Admin Route...
    Route::post('check-old-password', [App\Http\Controllers\Admin\AdminController::class, 'checkOldPassword']);
    Route::post('change-password', [App\Http\Controllers\Admin\AdminController::class, 'passwordChange']);
    Route::get('get-dashboard-menus', [App\Http\Controllers\Admin\System\MenuController::class, 'dashboardMenu']);

    // Module Route...
    Route::view('module', 'admin.layouts.admin_app')->name('module.index');
    Route::get('module/check-model', [App\Http\Controllers\Admin\System\ModuleController::class, 'checkModel']);

    // Table Route...
    Route::get('table-sorting', [App\Http\Controllers\Base\SortingController::class, 'sorting']);
    Route::get('get-last-sorting', [App\Http\Controllers\Base\SortingController::class, 'lastSorting']);

    Route::get('backend-parent-menus', [App\Http\Controllers\Admin\System\MenuController::class, 'getParentMenu'])->name('backendParentMenu');
    Route::get('getcategories/{modulename?}', [App\Http\Controllers\Admin\System\LibController::class, 'getcategories'])->name('getcategories');
    Route::get('getunits/{modulename?}', [App\Http\Controllers\Admin\System\LibController::class, 'getunits'])->name('getunits');
    Route::get('getpackages/{serviceid?}', [App\Http\Controllers\Admin\System\LibController::class, 'getPackages'])->name('getpackages');
    Route::get('getpackagebyid/{packageid}', [App\Http\Controllers\Admin\System\LibController::class, 'getPackageByID'])->name('getpackagebyid');
    Route::get('getareas/{districtid?}', [App\Http\Controllers\Admin\System\LibController::class, 'getAreas'])->name('getAreas');
    Route::get('clientinfo/{clientid?}', [App\Http\Controllers\Admin\ClientController::class, 'getClientInfo'])->name('getClientInfo');
    Route::get('employeeinfo/{employeeid?}', [App\Http\Controllers\Admin\EmployeeController::class, 'getEmployeeInfo'])->name('getEmployeeInfo');
    Route::get('voucherref/{reftype?}', [App\Http\Controllers\Admin\VoucherController::class, 'getVoucherRef'])->name('getVoucherRef');
    Route::get('clients/{service_id?}', [App\Http\Controllers\Admin\ClientController::class, 'getClients'])->name('getClients');
    Route::get('accountsbytype/{accounttype?}', [App\Http\Controllers\Admin\System\LibController::class, 'getAccountByType'])->name('getAccountByType');
    Route::get('getitemsbycategory/{categoryid?}', [App\Http\Controllers\Admin\System\LibController::class, 'getItemsByCategory'])->name('getItemsByCategory');
    Route::get('getitemstock/{itemid}', [App\Http\Controllers\Admin\ItemController::class, 'getItemStock'])->name('getItemStock');
    Route::get('getsalarysheetdata', [App\Http\Controllers\Admin\SalarySheetController::class, 'getsalarysheetdata']);
    Route::get('getclientdueinvoices/{clientid?}', [App\Http\Controllers\Admin\PaymentController::class, 'clientDueInvoices'])->name('Payment.clientDueInvoices');
    Route::get('getclientbyid/{clientid?}', [App\Http\Controllers\Admin\ClientController::class, 'getClientByID'])->name('Client.getClientByID');
    Route::get('getsupplierbyid/{supid?}', [App\Http\Controllers\Admin\SupplierController::class, 'getSupplierByID'])->name('Supplier.getSupplierByID');
    Route::get('getpurchaseinvoices/{supid?}', [App\Http\Controllers\Admin\PaymentController::class, 'supplierPurchaseInvoices'])->name('Payment.supplierPurchaseInvoices');
    Route::get('getulpbyid/{supid?}', [App\Http\Controllers\Admin\UplinkProviderController::class, 'getULPByID'])->name('UplinkProvicer.getULPByID');
    Route::get('getulpbandwidths/{ulpid?}', [App\Http\Controllers\Admin\PaymentController::class, 'ULPBandwidth'])->name('Payment.ULPBandwidth');
    Route::get('getemppayabledatas/{empid?}', [App\Http\Controllers\Admin\PaymentController::class, 'getEmpPayableDatas'])->name('Payment.getEmpPayableDatas');
    Route::get('getofficeexpenses', [App\Http\Controllers\Admin\PaymentController::class, 'getOfficeExpenses'])->name('Payment.getOfficeExpenses');
    Route::get('getloanhistories/{empid?}', [App\Http\Controllers\Admin\LoanInfoController::class, 'getLoanHistories'])->name('Payment.getLoanHistories');
    Route::get('getsalaryparameters', [App\Http\Controllers\Admin\SalaryParameterController::class, 'getSalaryParameters'])->name('Payment.getSalaryParameters');
    Route::get('clientsforcommissions/{serviceid?}', [App\Http\Controllers\Admin\CommissionController::class, 'getClientsForCommission'])->name('Commission.clientsforcommissions');
    Route::get('getpackagebyclientid/{clientid?}', [App\Http\Controllers\Admin\PackageController::class, 'getPackageByClientID'])->name('Package.getpackagebyclientid');
    Route::get('/invoice/{invoice}/months', [App\Http\Controllers\Admin\InvoiceController::class, 'months']);
    Route::post('generate-invoice', [App\Http\Controllers\Admin\InvoiceController::class, 'generateInvoice']);
    Route::get('getbanks', [App\Http\Controllers\Admin\BankController::class, 'getBanks']);
    Route::get('getservices', [App\Http\Controllers\Admin\ServiceController::class, 'getServices']);
    Route::get('uplinkproviders', [App\Http\Controllers\Admin\UplinkProviderController::class, 'getUplinkProviders']);
    Route::get('suppliers', [App\Http\Controllers\Admin\SupplierController::class, 'getSuppliers']);
    Route::get('employees', [App\Http\Controllers\Admin\EmployeeController::class, 'getEmployees']);
    Route::get('getemploaninstallment/{empid?}', [App\Http\Controllers\Admin\PaymentController::class, 'EmployeeLoanInstallment']);






    // User Permission Based Routing...
    Route::middleware('auth.access')->group(function () {
        // Dashboard Route...
        Route::get('dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard.index');

        // Profile route
        Route::get('profile', [AdminController::class, 'profileDetails'])->name('profile.profileDetails');
        Route::put('profile', [AdminController::class, 'updateProfile'])->name('profile.updateProfile');

        // Module Route...
        Route::match(['get', 'post'], 'module/create', [App\Http\Controllers\Admin\System\ModuleController::class, 'create'])->name('module.create');

        Route::get('siteSetting', [App\Http\Controllers\Admin\System\SiteSettingController::class, 'show'])->name('siteSetting.show');
        Route::post('siteSetting', [App\Http\Controllers\Admin\System\SiteSettingController::class, 'store'])->name('siteSetting.store');
        Route::get('siteSetting/edit', [App\Http\Controllers\Admin\System\SiteSettingController::class, 'edit'])->name('siteSetting.store');

        Route::resource('admin', App\Http\Controllers\Admin\AdminController::class);
        // Route::resource('plugin', App\Http\Controllers\Admin\PluginController::class);
        // robot txt
        Route::get('/robots', [App\Http\Controllers\Admin\RobotController::class, 'index'])->name('robots.index');
        Route::get('robots-file', [App\Http\Controllers\Admin\RobotController::class, 'getfilecontent'])->name('robots.getfilecontent');
        Route::post('robots-file', [RobotController::class, 'savefilecontent'])->name('robots.savefilecontent');

        // for xml
        Route::get('/searchData', [App\Http\Controllers\Admin\XMLController::class, 'index'])->name('searchData.index');

        Route::get('/generate-xml', [App\Http\Controllers\Admin\XMLController::class, 'generateXmlFile'])->name('searchData.generateXmlFile');
        Route::get('/xml-file', [App\Http\Controllers\Admin\XMLController::class, 'getXmlFile'])->name('searchData.getXmlFile');
        Route::get('/get-broken-url', [App\Http\Controllers\Admin\XMLController::class, 'getBrokenUrl'])->name('searchData.getBrokenUrl');

        Route::get('bulkdataimport/employee', [App\Http\Controllers\Admin\BulkDataImportController::class, 'employee'])->name('bulkdataimport.employee');
        Route::get('bulkdataimport/client', [App\Http\Controllers\Admin\BulkDataImportController::class, 'client'])->name('bulkdataimport.client');

        Route::post('bulkdataimport/empimport', [App\Http\Controllers\Admin\BulkDataImportController::class, 'empimport'])->name('bulkdataimport.empimport');
        Route::post('bulkdataimport/clientimport', [App\Http\Controllers\Admin\BulkDataImportController::class, 'clientimport'])->name('bulkdataimport.clientimport');

        // invoice extra action
        Route::get('invoice/bill/{id}', [App\Http\Controllers\Admin\InvoiceController::class, 'bill'])->name('invoice.bill');
        Route::get('invoice/moneyreceipt/{id}', [App\Http\Controllers\Admin\InvoiceController::class, 'moneyreceipt'])->name('invoice.moneyreceipt');
        Route::get('allinvoice', [App\Http\Controllers\Admin\AllInvoiceController::class, 'index'])->name('allinvoice.index');


        Route::post('salarySheet/paynow', [App\Http\Controllers\Admin\SalarySheetController::class, 'paynow'])->name('salarySheet.paynow');
        Route::post('salarySheet/paynow', [App\Http\Controllers\Admin\SalarySheetController::class, 'paynow'])->name('salarySheet.paynow');

        // Resident Approval & Actions Start

    });
    Route::get('mediaValidator/{modelName}/getFields', [App\Http\Controllers\Admin\MediaValidatorController::class, 'getFields'])->name('mediaValidator.getFields');
    Route::get('helpInfo/{modelName}/{pageType}/', [App\Http\Controllers\Admin\HelpInfoController::class, 'getHelpInfo'])->name('get.HelpInfo');
});
