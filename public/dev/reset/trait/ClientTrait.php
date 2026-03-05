<?php

namespace App\Traits;

use Exception;
use App\Models\Client;
use App\Models\Account;
use App\Models\Invoice;
use App\Models\InvoiceDetails;
use Illuminate\Support\Facades\DB;

trait ClientTrait
{

    public function createPreviousDueInvoiceForNewClient($client_id, $data)
    {
        DB::beginTransaction();

        try {
            $invoice = null;
            $previous_due = $data['previous_due'] ?? 0;
            $accoiunt_id = Account::where('system_key_name', 'sales-revenue')->first()?->id ?? null;

            if ($previous_due > 0) {

                $invoiceNo = Invoice::generateInvoiceNumber();

                // ✅ Insert main invoice
                $invoice = Invoice::create([
                    'client_id'         => $client_id,
                    'invoice_no'        => $invoiceNo,
                    'invoice_date'      => now()->toDateString(),
                    'original_amount'   => $previous_due,
                    'discount'          => 0,
                    'amount'            => $previous_due,
                    'paid_amount'       => 0,
                    'status'            => 'active',
                    'created_at'        => now(),
                    'updated_at'        => now(),
                ]);

                if ($invoice) {
                    // Update invoice number with prefix
                    $invoiceId = $invoice->id;

                    // ✅ Insert invoice_details
                    InvoiceDetails::create([
                        'invoice_id'      => $invoice->id,
                        'account_id'      => $accoiunt_id,
                        'description'     => 'Previous Due',
                        'amount'         => $previous_due,
                        'created_at'     => now(),
                        'updated_at'     => now(),
                    ]);
                }
            }

            DB::commit();
            return $invoiceId;
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }
}
