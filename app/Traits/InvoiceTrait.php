<?php

namespace App\Traits;

use App\Models\BandwidthHistory;
use Exception;
use App\Models\Invoice;
use App\Models\PaymentDetail;
use App\Models\PromoCode;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

trait InvoiceTrait
{

    private function autoInvoiceForPackage()
    {
        $today        = date('Y-m-d');
        $invoiceMonth = date('Y-m-01');

        $clients = DB::table('clients as c')
            ->join('services as s', 's.id', '=', 'c.service_id')
            ->where('c.status', 'active')
            ->whereNotNull('c.package_id')
            ->where('s.auto_invoice', 1)
            ->where('s.module', 'package')
            ->select('c.*')
            ->get();

        foreach ($clients as $client) {

            $alreadyExists = DB::table('invoice_months')
                ->where('client_id', $client->id)
                ->where('invoice_month', $invoiceMonth)
                ->exists();

            if ($alreadyExists) continue;

            if (empty($client->package_id) || $client->package_id == null) continue;

            $package = DB::table('packages')
                ->where('id', $client->package_id)
                ->where('status', 'active')
                ->first();

            if (!$package) continue;

            $price        = (float) $package->price;
            $vatPercent   = (float) $package->vat;
            $vatAmount    = ($price * $vatPercent) / 100;
            $finalAmount  = $price + $vatAmount;

            $invoiceId = DB::table('invoices')->insertGetId([
                'client_id'       => $client->id,
                'invoice_no'      => Invoice::generateInvoiceNumber(),
                'invoice_date'    => $today,
                'original_amount' => $price,
                'discount'        => 0,
                'amount'          => $finalAmount,
                'paid_amount'     => 0,
                'is_closed'       => 0,
                'status'          => 'active',
            ]);

            DB::table('invoice_details')->insert([
                'invoice_id'   => $invoiceId,
                'account_id'   => 1,
                'description'  => 'Monthly Package Bill (' . date('F Y') . ')',
                'amount'       => $price,
                'month_count'  => 1,
                'total_amount' => $finalAmount,
                'status'       => 'active',
            ]);

            DB::table('invoice_months')->insert([
                'invoice_id'    => $invoiceId,
                'client_id'     => $client->id,
                'invoice_month' => $invoiceMonth
            ]);
        }
    }

    //Invoice auto generated for Bandwidth

    private function autoInvoiceForBandwidth()
    {
        $today = date('Y-m-d');

        $clients = DB::table('clients as c')
            ->join('services as s', 's.id', '=', 'c.service_id')
            ->where('c.status', 'active')
            ->where('s.auto_invoice', 1)
            ->where('s.module', 'BandwidthHistory')
            ->whereNotNull('c.invoice_setup')
            ->select('c.*')
            ->get();

        foreach ($clients as $client) {

            $exists = BandwidthHistory::where('client_id', $client->id)
                ->whereMonth('transaction_date', date('m'))
                ->whereYear('transaction_date', date('Y'))
                ->exists();

            if ($exists) continue;

            $setup = json_decode($client->invoice_setup, true);

            if (empty($setup) || !is_array($setup)) {
                continue;
            }

            // 🔹 valid rows filter (category_id null skip)
            $validRows = array_filter($setup, function ($row) {
                return !empty($row['category_id']);
            });

            // 🔥 যদি valid row না থাকে → invoice create হবে না
            if (empty($validRows)) {
                continue;
            }

            // Totals
            $totalBandwidth      = $client->total_bandwidth ?? 0;
            $totalAmount         = $client->total_amount ?? 0;
            $totalIncludeAmount  = $client->total_include_amount ?? 0;
            $vat                 = $client->vat ?? 0;

            // 🔹 Create Bandwidth History
            $bandwidth = BandwidthHistory::create([
                'bhno'                 => BandwidthHistory::generateBHNumber(),
                'type'                 => 'Sale',
                'transaction_date'     => $today,
                'client_id'            => $client->id,
                'total_bandwidth'      => $totalBandwidth,
                'unit_id'              => $validRows[array_key_first($validRows)]['unit_id'] ?? 1,
                'vat'                  => $vat,
                'total_amount'         => $totalAmount,
                'total_include_amount' => $totalIncludeAmount,
                'is_closed'            => 0,
                'status'               => 'active',
            ]);

            // 🔹 Insert Details
            foreach ($validRows as $row) {

                [$startDate, $endDate] = $this->resolveBillingDates(
                    $row['start_date'],
                    $row['end_date']
                );

                DB::table('bandwidth_history_details')->insert([
                    'bandwidth_history_id' => $bandwidth->id,
                    'is_vat'               => !empty($row['is_vat']) ? 1 : 0,
                    'type'                 => $row['type'],
                    'category_id'          => $row['category_id'],
                    'unit_id'              => $row['unit_id'],
                    'linkid'               => $row['linkid'],
                    'bandwidth'            => $row['bandwidth'],
                    'start_date'           => $startDate,
                    'end_date'             => $endDate,
                    'days'                 => $row['days'],
                    'price'                => $row['price'],
                    'exclude_amount'       => $row['exclude_amount'],
                    'include_amount'       => $row['include_amount'],
                    'status'               => 'active',
                ]);
            }
        }
    }

    // start date & end date finding function
    private function resolveBillingDates($startDate, $endDate): array
    {
        $startDay = (int) date('d', strtotime($startDate));
        $endDay   = (int) date('d', strtotime($endDate));

        $currentYear  = date('Y');
        $currentMonth = date('m');

        $monthLastDay = (int) date('t'); // current month last day

        $resolvedStart = date('Y-m-d', strtotime("$currentYear-$currentMonth-$startDay"));

        // যদি আগের মাসের end_date last day হয় → current month এর last day বসবে
        if ($endDay === (int) date('t', strtotime($endDate))) {
            $resolvedEnd = date('Y-m-d', strtotime("$currentYear-$currentMonth-$monthLastDay"));
        } else {
            $resolvedEnd = date('Y-m-d', strtotime("$currentYear-$currentMonth-$endDay"));
        }

        return [$resolvedStart, $resolvedEnd];
    }

    private function previousBandwidthDue($client_id, $current_invoice_id = null)
    {
        $query = BandwidthHistory::where('client_id', $client_id)
            ->where('is_closed', 0)
            ->where('status', 'active');

        if ($current_invoice_id) {
            $query->where('id', '!=', $current_invoice_id);
        }

        $invoices = $query->get();

        // payment sum group by invoice
        $payments = PaymentDetail::where('reference_type', 'BandwidthHistory')

            ->where('is_closed', 0)
            ->selectRaw('reference_id, SUM(amount) as paid')
            ->groupBy('reference_id')
            ->pluck('paid', 'reference_id');

        $total_due = 0;

        foreach ($invoices as $invoice) {

            $paid_amount = $payments[$invoice->id] ?? 0;
            $due = $invoice->total_include_amount - $paid_amount;

            if ($due > 0) {
                $total_due += $due;
            }
        }

        return $total_due;
    }

    private function previousPackageDue($client_id, $current_invoice_id = null)
    {
        $query = Invoice::where('client_id', $client_id)
            ->where('is_closed', 0)
            ->where('status', 'active');

        if ($current_invoice_id) {
            $query->where('id', '!=', $current_invoice_id);
        }

        $invoices = $query->get();

        // payment sum group by invoice
        $payments = PaymentDetail::where('reference_type', 'Invoice')
            ->where('is_closed', 0)
            ->selectRaw('reference_id, SUM(amount) as paid')
            ->groupBy('reference_id')
            ->pluck('paid', 'reference_id');

        $total_due = 0;

        foreach ($invoices as $invoice) {

            $paid_amount = $payments[$invoice->id] ?? 0;
            $due = $invoice->amount - $paid_amount;

            if ($due > 0) {
                $total_due += $due;
            }
        }

        return $total_due;
    }
}
