<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Withdrawl extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Withdrawl";

    // file image push

    // date format

    public function getWithdrwalDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }
}