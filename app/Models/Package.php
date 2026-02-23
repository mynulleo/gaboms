<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Package extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Package";

    // file image push



    public function getSmsAttribute($value)
    {
        return $value ? 1 : 0;
    }

    public function getScheduleInvoiceAttribute($value)
    {
        return $value ? 1 : 0;
    }

    public function getRemainderSmsAttribute($value)
    {
        return $value ? 1 : 0;
    }

    public function getDisplayWebAttribute($value)
    {
        return $value ? 1 : 0;
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }


    public static function getPackageAmount($package_id, $period, $field)
    {
        $amount = 0;
        $package = Package::where('id', $package_id)
            ->where('status', 'active')
            ->first();

        if ($package && $field == 'registration') {
            $amount = $package['registration_fee'];
        }

        if ($package && $field == 'renew') {
            $amount = $package->price;
            if ($period == 'yearly') {
                $amount = $package->yearly_price;
            }
        }
        return $amount;
    }

    public function client()
    {
        return $this->hasMany(Client::class, 'package_id', 'id')->oldest('id');
    }

    // date format
}
