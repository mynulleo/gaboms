<?php

namespace App\Traits;

use App\Models\System\SiteSetting;
use Exception;

trait MailTrait {}

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
