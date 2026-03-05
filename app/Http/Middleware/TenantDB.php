<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class TenantDB
{
    // app/Http/Middleware/TenantDB.php
    public function handle($request, Closure $next)
    {
        if ($user = Auth::user()) {
            $organization = $user->organization; // relation বা query

            if ($organization) {
                Config::set('database.connections.tenant', [
                    'driver' => 'mysql',
                    'host' => $organization->db_host,
                    'database' => $organization->db_name,
                    'username' => $organization->db_user,
                    'password' => $organization->db_password,
                    'charset' => 'utf8mb4',
                    'collation' => 'utf8mb4_unicode_ci',
                    'prefix' => '',
                ]);
                DB::purge('tenant');
                DB::reconnect('tenant');
                DB::setDefaultConnection('tenant');
            }
        }

        return $next($request);
    }
}
