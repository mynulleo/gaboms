<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Base\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Resources\Resource;
use App\Models\Account;
use App\Models\Invoice;
use App\Models\Voucher;
use App\Models\VoucherDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Storage;

class VoucherController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Voucher::latest();
        $query->whereLike($request->field_name, $request->value);

        if ($request->allData) {
            return $query->get();
        } else {
            $datas = $query->paginate($request->pagination);
            return new Resource($datas);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('layouts.backend_app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$this->validateCheck($request)) {
            return response()->json(['message' => 'Validation failed'], 422);
        }

        DB::beginTransaction();

        try {
            $data = $request->all();
            $data['voucherno'] = Voucher::generateVoucherNo();
            // 🔹 Voucher Details JSON decode
            $voucherDetails = json_decode($data['voucher_details'], true);

            if (!is_array($voucherDetails)) {
                return response()->json(['message' => 'Invalid voucher details format'], 422);
            }

            // 🔹 Debit = Credit check
            $totalDebit = 0;
            $totalCredit = 0;

            foreach ($voucherDetails as $row) {
                $totalDebit += (float) ($row['dr_amount'] ?? 0);
                $totalCredit += (float) ($row['cr_amount'] ?? 0);
            }

            if ($totalDebit != $totalCredit) {
                return response()->json(['message' => 'Debit and Credit must be equal'], 422);
            }

            // 🔹 Voucher Create
            $voucher = Voucher::create([
                'voucher_date'  => vue_to_server_date($data['voucher_date']),
                'voucher_type'  => $data['voucher_type'] ?? null,
                'narration'     => $data['narration'] ?? null,
                'total_debit'   => $totalDebit,
                'total_credit'  => $totalCredit,
                'status'        => $data['status'] ?? 'active',
            ]);

            // 🔹 Voucher Details Insert
            foreach ($voucherDetails as $row) {

                VoucherDetail::create([
                    'voucher_id'     => $voucher->id,
                    'account_id'     => $row['account_id'],
                    'dr_amount'      => !empty($row['dr_amount']) ? $row['dr_amount'] : 0,
                    'cr_amount'      => !empty($row['cr_amount']) ? $row['cr_amount'] : 0,
                    'reference_type' => $row['reference_type'] ?? null,
                    'reference_id'   => $row['reference_id'] ?? null,
                    'narration'      => $row['narration'] ?? null,
                ]);
            }

            DB::commit();

            return $this->responseReturn("create", $voucher);
        } catch (\Throwable $ex) {
            DB::rollBack();
            return response()->json([
                'exception' => $ex->getMessage()
            ], 422);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }

        $voucher = Voucher::with([
            'voucher_details.account', // account eager load
            'payment',
            'financial_year',
        ])->find($id);

        foreach ($voucher->voucher_details as $detail) {

            $accountType = $detail->account?->account_type;

            if ($accountType) {
                $accounts = Account::where('account_type', $accountType)
                    ->select('id', 'account_name as name')
                    ->get()
                    ->map(function ($acc) {
                        return [
                            'id'   => $acc->id,
                            'name' => $acc->name,
                        ];
                    })
                    ->values();
            } else {
                $accounts = collect();
            }

            // 🔥 Inject into voucher_details
            $detail->accounts = $accounts;
            $detail->account_type = $accountType; // চাইলে frontend convenience এর জন্য
        }

        return response()->json($voucher);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function edit(Voucher $voucher)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Voucher $voucher)
    {
        if (!$this->validateCheck($request, $voucher->id)) {
            return response()->json(['message' => 'Validation failed'], 422);
        }

        DB::beginTransaction();

        try {
            $data = $request->all();

            // 🔹 Voucher Details decode
            $voucherDetails = json_decode($data['voucher_details'], true);

            if (!is_array($voucherDetails)) {
                return response()->json(['message' => 'Invalid voucher details format'], 422);
            }

            // 🔹 Debit = Credit Check
            $totalDebit = 0;
            $totalCredit = 0;

            foreach ($voucherDetails as $row) {
                $totalDebit += (float) ($row['dr_amount'] ?? 0);
                $totalCredit += (float) ($row['cr_amount'] ?? 0);
            }

            if ($totalDebit != $totalCredit) {
                return response()->json(['message' => 'Debit and Credit must be equal'], 422);
            }

            // 🔹 Update Voucher Header
            $voucher->update([
                'voucher_date'  => vue_to_server_date($data['voucher_date']),
                'voucher_type'  => $data['voucher_type'] ?? $voucher->voucher_type,
                'narration'     => $data['narration'] ?? null,
                'total_debit'   => $totalDebit,
                'total_credit'  => $totalCredit,
                'status'        => $data['status'] ?? $voucher->status,
            ]);

            // 🔹 পুরোনো details ডিলিট করে নতুন করে insert
            VoucherDetail::where('voucher_id', $voucher->id)->delete();

            foreach ($voucherDetails as $row) {
                VoucherDetail::create([
                    'voucher_id'     => $voucher->id,
                    'account_id'     => $row['account_id'],
                    'dr_amount'      => !empty($row['dr_amount']) ? $row['dr_amount'] : 0,
                    'cr_amount'      => !empty($row['cr_amount']) ? $row['cr_amount'] : 0,
                    'reference_type' => $row['reference_type'] ?? null,
                    'reference_id'   => $row['reference_id'] ?? null,
                    'narration'      => $row['narration'] ?? null,
                ]);
            }

            DB::commit();

            return $this->responseReturn("update", $voucher->load('voucher_details'));
        } catch (\Throwable $ex) {
            DB::rollBack();
            return response()->json([
                'exception' => $ex->getMessage()
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function destroy(Voucher $voucher)
    {
        // delete
        $res = $voucher->delete();
        return $this->responseReturn("delete", $res);
    }

    public function getVoucherRef($reftype = null)
    {
        if (!$reftype) {
            return response()->json([]);
        }

        /**
         * Central mapping
         * key   = reftype
         * model = Model class
         * text  = যেই field name থাকুক
         */
        $map = [
            'Invoice' => [
                'model' => \App\Models\Invoice::class,
                'text'  => 'invoice_no',
            ],
            'Employee' => [
                'model' => \App\Models\Employee::class,
                'text'  => 'full_name',
            ],
            'Supplier' => [
                'model' => \App\Models\Supplier::class,
                'text'  => 'org_name',
            ],
            'Purchase' => [
                'model' => null,
                'text'  => 'Purchase',
            ],
        ];

        if (!array_key_exists($reftype, $map)) {
            return response()->json([]);
        }

        if ($reftype == 'Invoice') {
            return $this->getInvoiceData();
        } else {
            $config = $map[$reftype];
            $model  = $config['model'];
            $text   = $config['text'];

            $data = $model::where('status', 1)
                ->select('id', $text)
                ->orderBy($text)
                ->get()
                ->map(function ($row) use ($text) {
                    return [
                        'id'   => $row->id,
                        'name' => $row->{$text}, // 👈 magic line
                    ];
                });
        }


        return response()->json($data);
    }

    public function getInvoiceData()
    {
        $invoices = Invoice::with('client:id,name')
            ->where('status', 1)
            ->select('id', 'invoice_no', 'client_id')
            ->orderBy('id', 'desc')
            ->get()
            ->map(function ($invoice) {
                return [
                    'id'   => $invoice->id,
                    'name' => $invoice->invoice_no . ' - ' . optional($invoice->client)->name,
                ];
            });

        return response()->json($invoices);
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        return true;
        return $request->validate([
            //ex: 'name' => 'required|email|nullable|date|string|min:0|max:191',
        ], [
            //ex: 'name' => "This name is required" (custom message)
        ]);
    }
}
