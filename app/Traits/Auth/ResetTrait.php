<?php

namespace App\Traits\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

trait ResetTrait
{
    public function reset(Request $request)
    {

        $permission = DB::table('password_resets')
            ->where('token', $request->token)
            ->where('expired_at', '>', time())
            ->first();

        if (empty($permission)) {
            return abort(404);
        }

        if (! $request->ajax()) {
            $token = $request->token;

            return view('admin.layouts.login_app', compact('token'));
        }

        if ($request->password !== $request->reset_password) {
            return response()->json([
                'status' => 'error',
                'message' => "Oops, the password doesn't match. Please try again!",
            ]);
        }

        $update = DB::table('admins')->where('email', $permission->email)->update([
            'password' => bcrypt($request->password),
        ]);

        // Remove the used the token.
        DB::table('password_resets')
            ->where('token', $request->token)->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Your password has been changed successfully!',
        ]);
    }
}
