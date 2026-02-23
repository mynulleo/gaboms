<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentDetail extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "PaymentDetail";

    // file image push

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'payment_id', 'id');
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }

    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'reference_id', 'id');
    }

    // date format
}
