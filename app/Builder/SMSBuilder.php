<?php

namespace App\Builder;

class SMSBuilder
{
    protected $username;

    protected $password;

    protected $sid;

    protected $srand;

    protected $url;

    protected $apiKey;

    protected $message;

    protected $to;

    public function url($url)
    {
        $this->url = $url;

        return $this;
    }

    public function username($username)
    {
        $this->username = $username;

        return $this;
    }

    public function password($password)
    {
        $this->password = $password;

        return $this;
    }

    public function sid($sid)
    {
        $this->sid = $sid;

        return $this;
    }

    public function apiKey($apiKey)
    {
        $this->apiKey = $apiKey;

        return $this;
    }

    public function message($message)
    {
        $this->message = $message;

        return $this;
    }

    public function to($to)
    {
        $this->to = $to;

        return $this;
    }

    public function send()
    {
        $smsRequest = $this->build();

        return $this->execute($smsRequest);
    }

    private function build()
    {
        return [
            'user' => $this->username,
            'api_token' => $this->apiKey,
            'sid' => $this->sid,
            'msisdn' => $this->to,
            'sms' => $this->message,
            'csms_id' => rand(9999999, 1111111),
        ];
    }

    private function execute($smsRequest)
    {
        $apiEndpoint = rtrim($this->url, '/').'/api/v3/send-sms';
        $smsRequestJson = json_encode($smsRequest);

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => 2,
            CURLOPT_URL => $apiEndpoint,
            CURLOPT_HEADER => false,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $smsRequestJson,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'Content-Length: '.strlen($smsRequestJson),
                'Accept: application/json',
            ],
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        if ($response) {
            $response = json_decode($response);

            if ($response->status === 'SUCCESS') {
                return response()->json(true);
            }
        }

        return false;
    }
}
