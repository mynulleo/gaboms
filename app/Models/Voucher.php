<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;
use App\Models\FinancialYear;
use App\Models\Payment;
use App\Models\VoucherDetail;
use Illuminate\Database\Eloquent\SoftDeletes;

class Voucher extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "Voucher";

    public static function generateVoucherNo()
    {
        $voucherno = 111;
        $voucher = Voucher::latest()->first(['id', 'voucherno']);

        if ($voucher) {
            $voucherno = $voucher->voucherno + 1;
        }
        return $voucherno;
    }

    public function getVoucherDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function voucher_details()
    {
        return $this->hasMany(VoucherDetail::class, 'voucher_id', 'id')->oldest('id');
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'payment_id', 'id');
    }

    public function financial_year()
    {
        return $this->belongsTo(FinancialYear::class, 'financial_year_id', 'id');
    }



    // file image push

    // date format
}
