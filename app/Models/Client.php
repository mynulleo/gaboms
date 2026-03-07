<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Client extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Client";

    protected $appends = ['is_invoice_setup'];

    protected $casts = [
        'invoice_setup' => 'array'
    ];

    public function getIsInvoiceSetupAttribute()
    {
        $setup = $this->invoice_setup;

        // যদি string হয় তাহলে decode
        if (is_string($setup)) {
            $setup = json_decode($setup, true) ?? [];
        }

        // যদি null হয়
        if (empty($setup)) {
            return 'No';
        }

        foreach ($setup as $row) {
            if (!empty($row['category_id'])) {
                return 'Yes';
            }
        }

        return 'No';
    }

    // file image push
    public static function generateClientID()
    {
        $clientid = 111;
        $client = Client::latest()->first(['id', 'clientid']);
        if ($client) {
            $clientid = $client->clientid + 1;
        }
        return $clientid;
    }

    public function getRegDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    // date format
}
