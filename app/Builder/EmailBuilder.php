<?php

namespace App\Builder;

use App\Mail\GlobalMail;
use Illuminate\Support\Facades\Mail;

class EmailBuilder
{
    protected $subject;

    protected $markdown;

    protected $recipient;

    protected $viewData = [];

    public function subject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    public function markdown($markdown)
    {
        $this->markdown = $markdown;

        return $this;
    }

    public function to($recipient)
    {
        $this->recipient = $recipient;

        return $this;
    }

    public function withData(array $data)
    {
        $this->viewData = $data;

        return $this;
    }

    public function send()
    {
        try {
            Mail::to($this->recipient)
                ->send(
                    new GlobalMail(
                        subject: $this->subject,
                        markdown: $this->markdown,
                        viewData: $this->viewData
                    )
                );

            return true;
        } catch (\Exception $exception) {
            throw $exception;
        }
    }
}
