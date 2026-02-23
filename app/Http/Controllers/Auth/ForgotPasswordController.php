<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Traits\MailTrait;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails, MailTrait;

    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = Admin::where('email', $request->input('email'))->first();

        if ($user) {
            // Generate the password reset token
            $token = Password::broker()->createToken($user);

            // Now you can use this $token to send it to the user
            $url = url('qpanel?token=' . $token . '&email=' . $user->email);

            $this->sendMail(
                $user->email,
                $user->name,
                'Forgotten Password Reset Link',
                'Your forgotten password reset link is ' . $url
            );

            return response()->json(['message' => 'Password Reset Link sent to your email.']);
        } else {
            return response()->json(['message' => "We can't find a user with that email address."], 422);
        }
    }
}
