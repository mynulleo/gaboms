<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Traits\VoucherTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;

class Invoice extends BaseModel
{
    use VoucherTrait, SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "Invoice";

    protected static function booted()
    {
        static::created(function ($invoice) {
            $vdata = [
                'module'    => 'Invoice',
                'date'      => vue_to_server_date($invoice->invoice_date),
                'amount'    => $invoice->amount,
                'source_id' => $invoice->id,
                'ref_id'    => $invoice->client_id,
            ];

            app()->make(self::class)->createReceivableVoucher($vdata);
        });

        // 🔹 After update → delete old voucher & recreate
        static::updated(function ($invoice) {

            // 1️⃣ Remove previous voucher
            $source = [
                'source'    => 'Invoice',
                'source_id' => $invoice->id,
            ];

            $invoice->removeVoucherBySourceInfo($source);

            // 2️⃣ Re-create voucher
            $vdata = [
                'module'    => 'Invoice',
                'date'      => vue_to_server_date($invoice->invoice_date),
                'amount'    => $invoice->amount,
                'source_id' => $invoice->id,
                'ref_id'    => $invoice->client_id,
            ];

            $invoice->createReceivableVoucher($vdata);
        });
    }

    // file image push
    public static function generateInvoiceNumber()
    {
        $invoiceno = 111;
        // invoices টেবিল থেকে সর্বশেষ ইনভয়েস নাম্বার বের করা
        $lastInvoice = self::orderBy('id', 'desc')->first();
        if ($lastInvoice) {
            // last invoice number integer এ কনভার্ট
            $lastNumber = intval($lastInvoice->invoice_no);
            // ১ যোগ করে নতুন নাম্বার রিটার্ন করা
            $invoiceno =  $lastNumber + 1;
        }
        return $invoiceno;
    }
    // date format

    public function getInvoiceDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function invoice_details()
    {
        return $this->hasMany(InvoiceDetails::class, 'invoice_id', 'id')->oldest('id');
    }

    public function invoice_months()
    {
        return $this->hasMany(InvoiceMonth::class, 'invoice_id', 'id')->oldest('id');
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function payment_details()
    {
        return $this->hasMany(PaymentDetail::class, 'reference_id', 'id')
            ->where('reference_type', 'Invoice')
            ->oldest('id');
    }
}
