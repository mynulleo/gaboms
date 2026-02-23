<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class FundAccountBalance extends BaseModel
{
    protected $guarded = ['id'];
    protected $table = 'fund_account_balance';
    protected $logName = "FundAccountBalance";

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }

    // file image push

    // date format
}
