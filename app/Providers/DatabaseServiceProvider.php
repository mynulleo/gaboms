<?php

namespace App\Providers;

use App\Models\Organization;
use App\Models\System\Menu;
use App\Models\System\SiteSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\System\RolePermission;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;

class DatabaseServiceProvider extends ServiceProvider
{
    protected $defer = true;

    /**
     * Register services.
     */
    public function register()
    {
        /*----- SITE SETTINGS (Tenant Aware) -----*/
        $this->app->singleton('siteSettingObj', function ($app) {
            if (!Auth::check()) return [];

            $user = Auth::user();
            $this->switchTenantDB($user->residence_id);

            return Cache::rememberForever('site_setting_cache_' . $user->residence_id, function () {
                $site = SiteSetting::first();
                return $site ? $site->toArray() : [];
            });
        });

        /*----- LEFT MENUS (Tenant Aware) -----*/
        $this->app->singleton('sideMenus', function ($app) {
            if (!Auth::check()) return [];

            $user = Auth::user();
            $this->switchTenantDB($user->residence_id);

            return Menu::menus();
        });

        /*----- PERMITTED MENUS / ROLE PERMISSIONS (Tenant Aware) -----*/
        $this->app->singleton('permittedMenuArr', function ($app) {
            if (!Auth::check()) return [];

            $user = Auth::user();
            $this->switchTenantDB($user->residence_id);

            $obj = RolePermission::permissions();
            if ($obj->count()) {
                return RolePermission::permissionProcess($obj);
            }

            return [];
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot()
    {
        //
    }

    /**
     * Switch to tenant DB based on residence_id
     */
    private function switchTenantDB($residenceId)
    {
        if (!$residenceId) return;

        $residence = Organization::find($residenceId);
        if (!$residence) return;

        config([
            'database.connections.tenant.database' => $residence->db_name,
            'database.connections.tenant.username' => $residence->db_user,
            'database.connections.tenant.password' => $residence->db_password,
        ]);

        DB::setDefaultConnection('tenant');
    }
}
