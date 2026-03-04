<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;
use App\Models\Residence;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class CheckExpiry
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $expired_date = null;
        $user = Auth::user();
        if ($user) {
            $residence_id = $user->residence_id;
            $residence = Residence::select('expired_date')->where('id', $residence_id)->first();

            if ($residence && $residence->expired_date && Carbon::now()->gt($residence->expired_date)) {

                // এখানে যেসব route allow করা হবে সেগুলো define করুন
                $allowedRoutes = [
                    'qpanel',
                    'failed-from-ssl',
                    'success-from-ssl',
                    'ssl-payment-cancel',
                    'warning-from-ssl',
                    'failed-from-ssl',
                    'admin/dashboard',
                    'admin/invoice',
                    'admin/invoice/*',
                    'admin/initialize-systems',
                    'admin/subscription',
                    'admin/get-residence',
                    'admin/logout',
                ];

                // যদি request কোনো allowed route এর সাথে match না করে
                $isAllowed = false;
                foreach ($allowedRoutes as $route) {
                    if ($request->is($route)) {
                        $isAllowed = true;
                        break;
                    }
                }

                if (!$isAllowed) {
                    if ($request->expectsJson()) {
                        return response()->json(['message' => 'Your subscription expired'], 403);
                    }
                    return redirect()->route('invoice.payment');
                }

                // যদি allowed route হয় → শুধু next
                return $next($request);
            }
        }

        return $next($request);
    }
}
