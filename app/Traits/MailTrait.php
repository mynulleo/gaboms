<?php

namespace App\Traits;

use App\Models\System\SiteSetting;
use Exception;

trait MailTrait
{
    protected function sendMail($to, $to_name, $sub, $body, $cusSub = false)
    {
        $sendgridapikey = config('app.sendgrid_api_key');
        $from = 'info@nogorsolutions.com';
        $from_name = 'Nogor Solutions Ltd';
        $subject = $sub ? $sub . ' | Mail From Nogor Solutions Ltd' : 'Mail From Nogor Solutions Ltd';
        $subject = ! empty($cusSub) ? $cusSub : $sub;

        $email = new \SendGrid\Mail\Mail();
        $email->setFrom("$from", "$from_name");
        $email->setSubject("$subject");
        $email->addTo("$to", "$to_name");

        $email->addContent(
            'text/html',
            "<p>$body</p>"
        );

        // IF SEND ANY IMAGE
        // <img style='margin-top:50px; width:400px; height:80px !important;' src='IMAGE_URL' alt='img' data-responsive='true'>

        $sendgrid = new \SendGrid($sendgridapikey);
        try {
            $response = $sendgrid->send($email);

            return response()->json(true);
        } catch (Exception $e) {
            return response()->json(false);
        }
    }

    protected function contactMail($contact_email, $contact_name, $contact_sub, $contact_body, $cusSub = false)
    {
        // author mail
        $siteSetting = SiteSetting::first();
        $to = $siteSetting->contact_email;
        $to_name = $siteSetting->short_title;
        //contact person mail
        $from = $contact_email;
        $from_name = $contact_name;
        $subject = $contact_sub ? $contact_sub : 'No Subject';
        $subject = ! empty($cusSub) ? $cusSub : $contact_sub;

        $email = new \SendGrid\Mail\Mail();
        $email->setFrom("$from", "$from_name");
        $email->setSubject("$subject");
        $email->addTo("$to", "$to_name");

        $email->addContent(
            'text/html',
            "<p>$contact_body</p>"
        );

        //
        $sendgrid = new \SendGrid('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');
        try {
            $response = $sendgrid->send($email);

            return response()->json(true);
        } catch (Exception $e) {
            return response()->json(false);
        }
    }
}

/**
 * use your controller.
 *
 * @return $this
 */

/******************************************
    use App\Traits\MailTrait;
    use MailTrait; //use it inside the controller

    $toEmail    = "";
    $toName     = "Touch of Technology";
    $subject    = "Test Mail";
    $body       = "Test Mail for testing";

    $this->sendMail(
            $toEmail,
            $toName,
            $subject,
            $body
        );
    return  "success";
 */
