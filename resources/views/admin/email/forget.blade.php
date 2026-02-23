@component('mail::message')
Dear {{ $data['name'] }},

To complete your reset password,Please click the button below to reset you password:
[ {{ backend_password_reset_url($data['email']) }}]( {{ backend_password_reset_url($data['email']) }} )

If you did not requested for a password reset, please ignore this email.

"Please note that this URL will expire within the next two hours."

Best regards,
{{ env('APP_NAME') }}
@endcomponent
