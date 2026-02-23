<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class GlobalMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * User information for email.
     *
     * @var [array]
     */
    public $viewData;

    /**
     * User information for email.
     *
     * @var [array]
     */
    public $subject;

    /**
     * User information for email.
     *
     * @var [array]
     */
    public $markdown;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subject, $viewData, $markdown)
    {
        $this->subject = $subject;
        $this->viewData = $viewData;
        $this->markdown = $markdown;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject($this->subject)
            ->markdown($this->markdown);
    }
}
