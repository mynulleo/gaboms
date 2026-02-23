<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;

class Payment extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $logName = "Payment";

    public static function getPaySlipNo()
    {
        $slipno = 111;
        $payment = Payment::latest()->first(['id', 'payslipno']);

        if ($payment) {
            $slipno = $payment->payslipno + 1;
        }
        return $slipno;
    }

    public function getPaymentDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function payment_details()
    {
        return $this->hasMany(PaymentDetail::class, 'payment_id', 'id')->oldest('id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id', 'id');
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id', 'id');
    }

    public function uplink_provider()
    {
        return $this->belongsTo(UplinkProvider::class, 'uplink_provider_id', 'id');
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

    // file image push

    // date format
}
