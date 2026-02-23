<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Storage;
use Exception;
use App\Models\Voucher;
use App\Traits\VoucherTrait;
use Illuminate\Http\Request;
use App\Models\PaymentDetail;
use App\Models\VoucherDetail;
use App\Http\Resources\Resource;
use App\Models\BandwidthHistory;
use Illuminate\Support\Facades\DB;
use App\Traits\InvoiceTrait;
use App\Http\Controllers\Base\BaseController;

class BandwidthHistoryController extends BaseController
{
    use VoucherTrait, InvoiceTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = BandwidthHistory::with(['bandwidth_details.category', 'client', 'uplink_provider'])->latest();

        if ($request->has('field_name') && $request->has('value')) {
            $query->whereLike($request->field_name, $request->value);
        }

        $searchData = $request->all();

        if (!empty($searchData['type'])) {
            $query->where('type', $searchData['type']);
        }
        if (!empty($searchData['service_id'])) {
            $query->whereHas('client', function ($q) use ($searchData) {
                $q->where('service_id', $searchData['service_id']);
            });
        }
        if (!empty($searchData['client_id'])) {
            $query->where('client_id', $searchData['client_id']);
        }
        if (!empty($searchData['uplink_provider_id'])) {
            $query->where('uplink_provider_id', $searchData['uplink_provider_id']);
        }
        if (!empty($searchData['from_transaction_date'])) {
            $query->whereDate('transaction_date', '>=', vue_to_server_date($searchData['from_transaction_date']));
        }
        if (!empty($searchData['to_transaction_date'])) {
            $query->whereDate('transaction_date', '<=', vue_to_server_date($searchData['to_transaction_date']));
        }


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
        $this->validateCheck($request); // validation first

        DB::beginTransaction();

        try {
            $data = $request->all();

            $bandwidth_details = $data['bandwidth_details'] ?? [];
            $data['bhno'] = BandwidthHistory::generateBHNumber();
            $data['transaction_date'] = vue_to_server_date($data['transaction_date']);
            unset($data['bandwidth_details']);

            // Insert main
            $res = BandwidthHistory::create($data);

            // Insert details
            if (!empty($bandwidth_details)) {
                foreach ($bandwidth_details as $detail) {
                    $res->bandwidth_details()->create([
                        'is_vat'            => !empty($detail['is_vat']) ? 1 : 0,
                        'type'              => $detail['type'] ?? null,
                        'category_id'       => $detail['category_id'],
                        'linkid'            => $detail['linkid'] ?? null,
                        'bandwidth'         => $detail['bandwidth'],
                        'unit_id'           => $detail['unit_id'] ?? null,
                        'start_date'        => vue_to_server_date($detail['start_date'] ?? null),
                        'end_date'          => vue_to_server_date($detail['end_date'] ?? null),
                        'days'              => $detail['days'] ?? 0,
                        'price'             => $detail['price'],
                        'exclude_amount'    => $detail['exclude_amount'] ?? 0,
                        'include_amount'    => $detail['include_amount'],
                    ]);
                }
            }

            if ($res->type == 'Purchase') {
                $this->createPayableVoucher([
                    'module'    => 'BandwidthHistory',
                    'date'      => $res->transaction_date,
                    'amount'    => $res->total_include_amount,
                    'source_id' => $res->id,
                    'ref_id'    => $res->uplink_provider_id
                ]);
            } elseif ($res->type == 'Sale') {
                $this->createReceivableVoucher([
                    'module'    => 'BandwidthHistory',
                    'date'      => $res->transaction_date,
                    'amount'    => $res->total_include_amount,
                    'source_id' => $res->id,
                    'ref_id'    => $res->client_id
                ]);
            }

            DB::commit();

            return $this->responseReturn("create", $res);
        } catch (\Throwable $ex) {
            DB::rollBack();

            return response()->json([
                'message' => 'Bandwidth history create failed',
                'error'   => $ex->getMessage()
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BandwidthHistory  $bandwidthHistory
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }

        $bandwidthHistory = BandwidthHistory::with(['unit', 'client', 'uplink_provider', 'bandwidth_details', 'bandwidth_details.category'])->find($id);
        if ($bandwidthHistory) {
            $client_id = $bandwidthHistory->client_id;
            $previous_due = $this->previousBandwidthDue($client_id, $bandwidthHistory->id);

            // previous_due add to object
            $bandwidthHistory->previous_due = $previous_due;
        }

        return $bandwidthHistory;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BandwidthHistory  $bandwidthHistory
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BandwidthHistory  $bandwidthHistory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bandwidthHistory = BandwidthHistory::find($id);
        if ($this->validateCheck($request, $bandwidthHistory->id) && $this->checkUpdateAvailability($bandwidthHistory)) {

            DB::beginTransaction();

            try {
                // ---------------------------
                // Parent Data
                // ---------------------------
                $data = $request->all();

                $data['transaction_date'] = vue_to_server_date($data['transaction_date']);

                $bandwidth_details = $data['bandwidth_details'] ?? [];
                unset($data['bandwidth_details']);

                // Update parent
                $bandwidthHistory->fill($data)->save();

                // ---------------------------
                // Bandwidth Details Update
                // ---------------------------
                $existingIds = $bandwidthHistory->bandwidth_details()
                    ->pluck('id')
                    ->toArray();

                $requestIds = [];

                foreach ($bandwidth_details as $detail) {

                    $detailData = [
                        'is_vat'          => $detail['is_vat'] ? 1 : 0,
                        'type'            => $detail['type'] ?? null,
                        'category_id'     => $detail['category_id'] ?? null,
                        'linkid'          => $detail['linkid'] ?? null,
                        'bandwidth'       => $detail['bandwidth'] ?? null,
                        'unit_id'         => $detail['unit_id'] ?? null,
                        'start_date'      => vue_to_server_date($detail['start_date']),
                        'end_date'        => vue_to_server_date($detail['end_date']),
                        'days'            => $detail['days'] ?? 0,
                        'price'           => $detail['price'] ?? 0,
                        'exclude_amount'  => $detail['exclude_amount'] ?? 0,
                        'include_amount'  => $detail['include_amount'] ?? 0,
                    ];

                    if (!empty($detail['id'])) {
                        // Update existing
                        $bandwidthHistory->bandwidth_details()
                            ->where('id', $detail['id'])
                            ->update($detailData);

                        $requestIds[] = $detail['id'];
                    } else {
                        // Create new
                        $newDetail = $bandwidthHistory->bandwidth_details()
                            ->create($detailData);

                        $requestIds[] = $newDetail->id;
                    }
                }

                // Delete removed rows
                $deleteIds = array_diff($existingIds, $requestIds);
                if (!empty($deleteIds)) {
                    $bandwidthHistory->bandwidth_details()
                        ->whereIn('id', $deleteIds)
                        ->delete();
                }

                // ---------------------------
                // Voucher Re-create
                // ---------------------------
                $source = [
                    'source'    => 'BandwidthHistory',
                    'source_id' => $bandwidthHistory->id
                ];

                $vdi = $this->removeVoucherBySourceInfo($source);
                $vdi = true;
                if ($vdi) {
                    $vdata = [
                        'module'    => 'BandwidthHistory',
                        'date'      => $bandwidthHistory->transaction_date,
                        'amount'    => $bandwidthHistory->total_include_amount,
                        'source_id' => $bandwidthHistory->id,
                    ];

                    if ($bandwidthHistory->type == 'Purchase') {
                        $vdata['ref_id'] = $bandwidthHistory->uplink_provider_id;
                        $this->createPayableVoucher($vdata);
                    } elseif ($bandwidthHistory->type == 'Sale') {
                        $vdata['ref_id'] = $bandwidthHistory->client_id;
                        $this->createReceivableVoucher($vdata);
                    }
                }

                DB::commit();

                return $this->responseReturn("update", $bandwidthHistory);
            } catch (\Exception $ex) {
                DB::rollBack();
                return response()->json([
                    'exception' => $ex->errorInfo ?? $ex->getMessage()
                ], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BandwidthHistory  $bandwidthHistory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bandwidthHistory = BandwidthHistory::find($id);
        DB::beginTransaction();

        try {

            // =========================
            // 1️⃣ Check Eligibility (any payment exists?)
            // =========================
            $hasPayment = PaymentDetail::where('reference_type', 'BandwidthHistory')
                ->where('reference_id', $bandwidthHistory->id)
                ->exists();

            if ($hasPayment) {
                return response()->json([
                    'message' => 'This bandwidth invoice has payments. Delete is not allowed.'
                ], 422);
            }

            // =========================
            // 2️⃣ Delete related vouchers
            // =========================
            $vouchers = Voucher::where('source', 'BandwidthHistory')
                ->where('source_id', $bandwidthHistory->id)
                ->get();

            foreach ($vouchers as $voucher) {
                VoucherDetail::where('voucher_id', $voucher->id)->delete(); // soft delete
                $voucher->delete(); // soft delete
            }

            // =========================
            // 3️⃣ Delete BandwidthHistory details (invoice_details equivalent)
            // =========================
            $bandwidthHistory->bandwidth_details()->delete(); // soft delete

            // =========================
            // 4️⃣ Delete BandwidthHistory (soft)
            // =========================
            $bandwidthHistory->delete();

            DB::commit();

            return $this->responseReturn("delete", true);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'exception' => $e->getMessage()
            ], 422);
        }
    }

    public function checkUpdateAvailability(BandwidthHistory $bandwidthHistory)
    {
        // check whether payment exists against this bandwidth history
        $payment_exists = DB::table('payment_details')
            ->where('reference_type', 'BandwidthHistory')
            ->where('reference_id', $bandwidthHistory->id)
            ->exists();

        if ($payment_exists) {
            return response()->json([
                'message' => 'Update not possible. Payment exists against this Bandwidth History.'
            ], 422);
        }

        return true;
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        return $request->validate([
            'total_bandwidth'       => 'required',
            'total_amount'          => 'required',
            'total_include_amount'  => 'required',
            'bandwidth_details'     => 'required|array|min:1',

            'bandwidth_details.*.category_id'       => 'required|integer',
            'bandwidth_details.*.bandwidth'         => 'required|numeric|min:0.01',
            'bandwidth_details.*.price'             => 'required|numeric|min:0',
            'bandwidth_details.*.include_amount'    => 'required|numeric|min:0',
        ], [
            'bandwidth_details.required' => 'Bandwidth details required',
            'bandwidth_details.*.category_id.required' => 'Category is required',
            'bandwidth_details.*.bandwidth.required'   => 'Bandwidth is required',
            'bandwidth_details.*.price.required'       => 'Price is required',
            'bandwidth_details.*.include_amount.required' => 'Amount is required',
        ]);
    }
}
