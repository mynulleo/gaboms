<?php

namespace App\Traits;

use Illuminate\Support\Facades\Http;

trait SMSTrait
{
    public function sendSms($mno, $message, $unicode = 0)
    {
        $phone_no = "88" . $mno;

        $apiURL = 'https://sms.lpeek.com/API/sendSMS';

        $auth = [
            'acode' => 30000106,
            'apiKey' => "308b8814fbf3a97dd1267185c5d42d15a3fe09c16f5726f029846c6f33a7ab34"
        ];

        $smsInfo = [
            "requestID" => "625adea35Quill", // should be unique per request ideally
            'message' => $message,
            'is_unicode' => $unicode, // 0 = English, 1 = Unicode/Bangla
            'masking' => "8809604901000",
            'msisdn' => $phone_no,
            "transactionType" => "T"
        ];

        $request = [
            'auth' => $auth,
            'smsInfo' => $smsInfo
        ];

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json'
            ])->post($apiURL, $request);

            if ($response->successful()) {
                $resultArray = $response->json();
                $status = $resultArray['response']['code'] ?? null;

                // Optional: Uncomment if you want boolean return
                // return $status == 200 ? 1 : 0;

                return $status;
            } else {
                // API returned error status code
                return null;
            }
        } catch (\Exception $e) {
            // Network error / exception
            return null;
        }
    }
}
