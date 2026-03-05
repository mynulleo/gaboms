<?php

namespace App\Mail\Admin;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgetMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    /**
     * User information for email.
     *
     * @var [array]
     */
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from([
            'email' => $this->data['email'],
        ])->subject('Password Reset')
            ->markdown('admin.email.forget')
            ->with('data', $this->data);
    }
}
