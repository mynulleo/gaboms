<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Workorder extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Workorder";

    // file image push

    public function getOrderDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function getDeliveryDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }

    public function workorder_details()
    {
        return $this->hasMany(WorkorderDetail::class, 'workorder_id', 'id')->oldest('id');
    }

    // date format
}
