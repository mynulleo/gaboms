<?php

namespace App\Http\Controllers\Admin;

use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Models\BandwidthHistory;
use App\Http\Controllers\Base\BaseController;
use Illuminate\Pagination\LengthAwarePaginator;

class AllInvoiceController extends BaseController
{

    public function index(Request $request)
    {
        $perPage = $request->pagination ?? 10;
        $search  = $request->search ?? null;

        // 🔍 Filters from Vue
        $clientId = $request->input('client_id');
        $fromDate = $request->input('from_invoice_date');
        $toDate   = $request->input('to_invoice_date');
        $isClosed = $request->input('is_closed');

        // 🛠 Fix type issues
        if ($clientId === '') $clientId = null;
        elseif (!is_null($clientId)) $clientId = (int) $clientId;

        if (!is_null($isClosed)) $isClosed = $isClosed ? 1 : 0;

        /* ========= 1) Invoices ========= */
        $invoices = Invoice::with('client:id,clientid,name')
            ->when($search, function ($q) use ($search) {
                $q->where('invoice_no', 'like', "%$search%")
                    ->orWhereHas('client', function ($c) use ($search) {
                        $c->where('name', 'like', "%$search%")
                            ->orWhere('clientid', 'like', "%$search%");
                    });
            })
            ->when(!is_null($clientId), fn($q) => $q->where('client_id', $clientId))
            ->when($fromDate, fn($q) => $q->whereDate('invoice_date', '>=', $fromDate))
            ->when($toDate, fn($q) => $q->whereDate('invoice_date', '<=', $toDate))
            ->when(!is_null($isClosed), fn($q) => $q->where('is_closed', $isClosed))
            ->latest()
            ->get();

        /* ========= 2) Bandwidth ========= */
        $bandwidths = BandwidthHistory::with('client:id,clientid,name')
            ->where('type', 'Sale')
            ->when($search, function ($q) use ($search) {
                $q->where('bhno', 'like', "%$search%")
                    ->orWhereHas('client', function ($c) use ($search) {
                        $c->where('name', 'like', "%$search%")
                            ->orWhere('clientid', 'like', "%$search%");
                    });
            })
            ->when(!is_null($clientId), fn($q) => $q->where('client_id', $clientId))
            ->when($fromDate, fn($q) => $q->whereDate('transaction_date', '>=', $fromDate))
            ->when($toDate, fn($q) => $q->whereDate('transaction_date', '<=', $toDate))
            ->when(!is_null($isClosed), fn($q) => $q->where('is_closed', $isClosed))
            ->latest('transaction_date')
            ->get();

        /* ========= 3) Merge & Map ========= */
        $merged = $invoices->merge($bandwidths)->map(function ($row) {
            if ($row instanceof Invoice) {
                return [
                    'source'      => 'Invoice',
                    'id'          => $row->id,
                    'client_id'   => $row->client_id,
                    'client_name' => $row->client->name ?? null,
                    'ref_no'      => $row->invoice_no,
                    'date'        => $row->invoice_date,
                    'amount'      => $row->amount,
                    'paid_amount' => $row->paid_amount,
                    'is_closed'   => $row->is_closed,
                    'created_at'  => $row->created_at,
                ];
            }

            return [
                'source'      => 'Bandwidth',
                'id'          => $row->id,
                'client_id'   => $row->client_id,
                'client_name' => $row->client->name ?? null,
                'ref_no'      => $row->bhno,
                'date'        => $row->transaction_date,
                'amount'      => $row->total_include_amount,
                'paid_amount' => null,
                'is_closed'   => $row->is_closed,
                'created_at'  => $row->created_at,
            ];
        });

        /* ========= 4) Sort ========= */
        $merged = $merged->sortByDesc('date')->values();

        /* ========= 5) Manual Pagination ========= */
        $page  = LengthAwarePaginator::resolveCurrentPage();
        $total = $merged->count();
        $results = $merged->slice(($page - 1) * $perPage, $perPage)->values();
        $lastPage = (int) ceil($total / $perPage);

        $basePath = url()->current();
        $query    = $request->query();

        $makeUrl = function ($page) use ($basePath, $query) {
            if (!$page) return null;
            return $basePath . '?' . http_build_query(array_merge($query, ['page' => $page]));
        };

        $from = $total ? (($page - 1) * $perPage + 1) : null;
        $to   = $total ? min($page * $perPage, $total) : null;

        $metaLinks = [];

        $metaLinks[] = [
            'url'    => $page > 1 ? $makeUrl($page - 1) : null,
            'label'  => '&laquo; Previous',
            'active' => false,
        ];

        for ($i = 1; $i <= $lastPage; $i++) {
            $metaLinks[] = [
                'url'    => $makeUrl($i),
                'label'  => (string) $i,
                'active' => $i === $page,
            ];
        }

        $metaLinks[] = [
            'url'    => $page < $lastPage ? $makeUrl($page + 1) : null,
            'label'  => 'Next &raquo;',
            'active' => false,
        ];

        return response()->json([
            'data'  => $results,
            'links' => [
                'first' => $makeUrl(1),
                'last'  => $makeUrl($lastPage),
                'prev'  => $page > 1 ? $makeUrl($page - 1) : null,
                'next'  => $page < $lastPage ? $makeUrl($page + 1) : null,
            ],
            'meta'  => [
                'current_page' => $page,
                'from'         => $from,
                'last_page'    => $lastPage,
                'links'        => $metaLinks,
                'path'         => $basePath,
                'per_page'     => (int) $perPage,
                'to'           => $to,
                'total'        => $total,
            ],
        ]);
    }
}
