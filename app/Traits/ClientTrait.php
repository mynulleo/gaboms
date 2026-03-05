<?php

namespace App\Traits;

use Exception;
use App\Models\Client;
use App\Models\Account;
use App\Models\Invoice;
use App\Models\Voucher;
use App\Models\VoucherDetail;
use App\Models\InvoiceDetails;
use Illuminate\Support\Facades\DB;

trait ClientTrait
{

    public function createPreviousDueInvoiceForNewClient($client_id, $data)
    {
        DB::beginTransaction();

        try {
            $invoiceId = null;
            $previous_due = $data['previous_due'] ?? 0;
            $account_id = Account::where('system_key_name', 'sales-revenue')->value('id');

            // 🔥 Update case হলে আগে আগের Previous Due remove করো
            $this->deletePreviousDueInvoiceAndVoucher($client_id);

            if ($previous_due > 0) {

                $invoiceNo = Invoice::generateInvoiceNumber();

                $invoice = Invoice::create([
                    'client_id'         => $client_id,
                    'invoice_no'        => $invoiceNo,
                    'invoice_date'      => now()->toDateString(),
                    'original_amount'   => $previous_due,
                    'discount'          => 0,
                    'amount'            => $previous_due,
                    'paid_amount'       => 0,
                    'is_previous_due'   => 1,
                    'status'            => 'active',
                ]);

                if ($invoice) {
                    InvoiceDetails::create([
                        'invoice_id'  => $invoice->id,
                        'account_id'  => $account_id,
                        'description' => 'Previous Due',
                        'amount'      => $previous_due,
                    ]);

                    $invoiceId = $invoice->id;
                }
            }

            DB::commit();
            return $invoiceId;
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function deletePreviousDueInvoiceAndVoucher($client_id)
    {
        // আগের Previous Due Invoice খুঁজি
        $oldInvoice = Invoice::where('client_id', $client_id)
            ->where('is_previous_due', 1)
            ->first();

        if (!$oldInvoice) {
            return true; // কিছুই নাই, safe exit
        }

        // 🔥 আগে Voucher + Voucher Details delete
        $voucher = Voucher::where('source', 'Invoice')
            ->where('source_id', $oldInvoice->id)
            ->first();

        if ($voucher) {
            VoucherDetail::where('voucher_id', $voucher->id)->delete();
            $voucher->delete();
        }

        // 🔥 Invoice Details delete
        InvoiceDetails::where('invoice_id', $oldInvoice->id)->delete();

        // 🔥 Invoice delete
        $oldInvoice->delete();

        return true;
    }
}
