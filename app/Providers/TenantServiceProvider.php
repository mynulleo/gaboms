<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use App\Models\System\SiteSetting;

class TenantServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if (Auth::check()) {
            View::composer('*', function ($view) {
                $sitesettings = SiteSetting::first();
                $view->with('siteSetting', $sitesettings);
            });
        }
    }
}
