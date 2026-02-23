<?php

namespace App\Traits;

use Exception;
use App\Models\Client;
use App\Models\Account;
use App\Models\Invoice;
use App\Models\Voucher;
use App\Models\Purchase;
use App\Models\FinancialYear;
use App\Models\VoucherDetail;
use App\Models\InvoiceDetails;
use App\Models\BandwidthHistory;
use Illuminate\Support\Facades\DB;
use App\Models\BandwidthHistoryDetail;

trait UplinkProviderTrait
{

    public function createPreviousDueInvoiceForUplinkProvider($uplink_provider_id, $data, $entry_type = 'Insert')
    {
        DB::beginTransaction();

        try {

            $previous_due  = $data['previous_due'] ?? 0;
            $purchase_date = date('Y-m-d', strtotime($data['previous_purchase_date']));

            if ($previous_due <= 0 || empty($purchase_date)) {
                DB::commit();
                return false;
            }
            // =========================
            // 🔁 If Update → delete old records
            // =========================
            if ($entry_type == 'Update') {

                $oldHistory = BandwidthHistory::where('uplink_provider_id', $uplink_provider_id)
                    ->where('type', 'purchase')
                    ->whereDate('transaction_date', $purchase_date)
                    ->first();

                if ($oldHistory) {

                    // delete voucher details + voucher
                    $oldVoucher = Voucher::where('source', 'BandwidthHistory')
                        ->where('source_id', $oldHistory->id)
                        ->first();

                    if ($oldVoucher) {
                        VoucherDetail::where('voucher_id', $oldVoucher->id)->delete();
                        $oldVoucher->delete();
                    }

                    // delete bandwidth history details + history
                    BandwidthHistoryDetail::where('bandwidth_history_id', $oldHistory->id)->delete();
                    $oldHistory->delete();
                }
            }

            // =========================
            // ❌ Insert mode duplicate protection
            // =========================
            if ($entry_type === 'Insert') {
                $exists = BandwidthHistory::where('uplink_provider_id', $uplink_provider_id)
                    ->where('type', 'purchase')
                    ->whereDate('transaction_date', $purchase_date)
                    ->exists();

                if ($exists) {
                    throw new Exception('Previous due invoice already created for this date!');
                }
            }

            // Accounts
            $purchaseAccountId = Account::where('system_key_name', 'bandwidth-expense')->value('id');
            $payableAccountId  = Account::where('system_key_name', 'accounts-payable')->value('id');

            if (!$purchaseAccountId || !$payableAccountId) {
                throw new Exception('Required accounts not found!');
            }

            // =========================
            // 1️⃣ Bandwidth History (Invoice)
            // =========================
            $bandwidthHistory = BandwidthHistory::create([
                'bhno'                 => BandwidthHistory::generateBHNumber(),
                'type'                 => 'purchase',
                'transaction_date'     => $purchase_date,
                'uplink_provider_id'   => $uplink_provider_id,
                'total_bandwidth'      => 0,
                'unit_id'              => 1,
                'vat'                  => 0,
                'total_amount'         => $previous_due,
                'total_include_amount' => $previous_due,
                'is_closed'            => 0,
            ]);

            // =========================
            // 2️⃣ Bandwidth History Detail
            // =========================
            BandwidthHistoryDetail::create([
                'bandwidth_history_id' => $bandwidthHistory->id,
                'is_vat'               => 0,
                'type'                 => 'purchase',
                'category_id'          => 1,
                'unit_id'              => 1,
                'bandwidth'            => 0,
                'price'                => $previous_due,
                'exclude_amount'       => $previous_due,
                'include_amount'       => $previous_due,
            ]);

            // =========================
            // 3️⃣ Voucher (Payable Journal)
            // =========================
            $voucher = Voucher::create([
                'voucherno'         => Voucher::generateVoucherNo(),
                'voucher_type'      => 'Journal',
                'voucher_date'      => $purchase_date,
                'narration'         => 'Previous due purchase entry for uplink provider',
                'financial_year_id' => $this->getFinancialYearId(),
                'source'            => 'BandwidthHistory',
                'source_id'         => $bandwidthHistory->id,
            ]);

            // Dr: Purchase
            VoucherDetail::create([
                'voucher_id'     => $voucher->id,
                'account_id'     => $purchaseAccountId,
                'dr_amount'      => $previous_due,
                'cr_amount'      => 0,
                'reference_type' => 'UplinkProvider',
                'reference_id'   => $uplink_provider_id,
                'line_narration' => 'Previous due bandwidth purchase',
            ]);

            // Cr: Payable
            VoucherDetail::create([
                'voucher_id'     => $voucher->id,
                'account_id'     => $payableAccountId,
                'dr_amount'      => 0,
                'cr_amount'      => $previous_due,
                'reference_type' => 'UplinkProvider',
                'reference_id'   => $uplink_provider_id,
                'line_narration' => 'Payable created for previous due',
            ]);

            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }

    private function getFinancialYearId()
    {
        $fyearid = null;
        $fyear = FinancialYear::where('is_current', 1)->first();
        if ($fyear) {
            $fyearid = $fyear->id;
        }
        return $fyearid;
    }
}
