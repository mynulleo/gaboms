<?php

namespace App\Traits\Auth;

use App\Mail\Admin\ForgetMail;
use App\Models\Admin;
use Exception;
use Illuminate\Support\Facades\Mail;

trait ForgetTrait
{
    /**
     * Forget password
     *
     * @return bool
     */
    public function forget()
    {
        $rule = [
            'email' => 'required', 'string', 'email', 'max:191',
        ];

        request()->validate($rule);

        $email = request('email');
        $admin = Admin::where('email', $email)->first();

        if (empty($admin)) {
            return response()->json([
                'status' => 'error',
                'message' => "Oops, we couldn't find an account with that information",
            ]);
        }

        $this->sendForgetMail($admin);

        return response()->json([
            'status' => 'success',
            'message' => 'Password reset email sent. Please check your inbox and follow the instructions',
        ]);
    }

    public function sendForgetMail($admin)
    {
        try {
            Mail::to($admin->email)->send(new ForgetMail($admin));

            return true;
        } catch (Exception $exception) {
            throw new Exception($exception);
        }
    }
}
