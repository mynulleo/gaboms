<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Account;
use App\Models\Base\BaseModel;
use App\Models\Voucher;
use Illuminate\Database\Eloquent\SoftDeletes;

class VoucherDetail extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "VoucherDetail";

    public function voucher()
    {
        return $this->belongsTo(Voucher::class, 'voucher_id', 'id');
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }

    // ✅ Accessor: account_type
    public function getAccountTypeAttribute()
    {
        return $this->account?->account_type;
    }

    // file image push

    // date format
}
