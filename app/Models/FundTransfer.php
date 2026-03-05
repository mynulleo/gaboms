<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class FundTransfer extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "FundTransfer";


    public function from_account()
    {
        return $this->belongsTo(Account::class, 'from_account_id', 'id');
    }

    public function to_account()
    {
        return $this->belongsTo(Account::class, 'to_account_id', 'id');
    }

    public function getTransferDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    // file image push

    // date format
}