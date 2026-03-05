<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Storage;
use Exception;
use App\Models\Item;
use App\Models\Voucher;
use App\Models\Purchase;
use App\Traits\VoucherTrait;
use Illuminate\Http\Request;
use App\Models\PaymentDetail;
use App\Models\VoucherDetail;
use App\Models\PurchaseDetail;
use App\Http\Resources\Resource;
use App\Models\StockTransaction;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Base\BaseController;

class PurchaseController extends BaseController
{
    use VoucherTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Purchase::with('supplier:id,org_name')->latest();
        if ($request->field_name && $request->value) {
            $query->whereLike($request->field_name, $request->value);
        }

        if ($request->supplier_id) {
            $query->where('supplier_id', $request->supplier_id);
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
        if ($this->validateCheck($request)) {
            try {
                $data = $request->all();
                $purchasedetails = $data['purchase_details'];
                $data['purchase_date'] = date('Y-m-d', strtotime($data['purchase_date']));
                unset($data['purchase_details']);
                // push the insert text
                $res = Purchase::create($data);

                if ($res && !empty($purchasedetails)) {
                    foreach ($purchasedetails as $detail) {
                        $detail['purchase_id'] = $res->id;
                        // remove item object from detail array
                        unset($detail['item']);
                        // insert purchase details
                        PurchaseDetail::create($detail);
                        $stock_transection =
                            [
                                'item_id' => $detail['item_id'],
                                'transaction_date' => date('Y-m-d', strtotime($data['purchase_date'])),
                                'transaction_type' => 'Purchase',
                                'reference_type' => 'Purchase',
                                'reference_id' => $res->id,
                                'qty_in' => $detail['qty'],
                                'qty_out' => 0,
                                'status' => 'active',
                            ];
                        // insert stock transection data    
                        StockTransaction::create($stock_transection);
                    }
                }

                // create payable voucher
                $vdata = [
                    'module'    => 'Purchase',
                    'date'      => $res->purchase_date,
                    'amount'    => $res->total_amount,
                    'source_id' => $res->id,
                    'ref_id'    => $res->supplier_id
                ];
                $this->createPayableVoucher($vdata);

                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        $purchase = Purchase::with(
            'supplier',
            'purchase_details.item',
            'purchase_details.category',
            'purchase_details.unit'
        )->find($id);

        // 🔥 each row তে category wise items attach
        $purchase->purchase_details->transform(function ($detail) {
            $detail->items = Item::where('category_id', $detail->category_id)
                ->select('id', 'title')
                ->get();

            return $detail;
        });

        return $purchase;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Purchase $purchase)
    {
        if ($this->validateCheck($request, $purchase->id)) {
            try {
                $data = $request->all();
                $data['purchase_date'] = date('Y-m-d', strtotime($data['purchase_date']));
                $purchasedetails = $data['purchase_details'];
                unset($data['purchase_details']);
                // push the update text
                $purchase->fill($data)->save();

                // delete existing purchase details
                PurchaseDetail::where('purchase_id', $purchase->id)->delete();
                // insert updated purchase details

                if ($purchase && !empty($purchasedetails)) {
                    foreach ($purchasedetails as $detail) {
                        $detail['purchase_id'] = $purchase->id;
                        // remove item object from detail array
                        unset($detail['item']);
                        // insert purchase details
                        PurchaseDetail::create($detail);

                        // delete existing stock transection
                        StockTransaction::where('reference_type', 'Purchase')
                            ->where('reference_id', $purchase->id)
                            ->where('item_id', $detail['item_id'])
                            ->delete();

                        // insert stock transection data
                        $stock_transection =
                            [
                                'item_id' => $detail['item_id'],
                                'transaction_date' => date('Y-m-d', strtotime($data['purchase_date'])),
                                'transaction_type' => 'Purchase',
                                'reference_type' => 'Purchase',
                                'qty_in' => $detail['qty'],
                                'qty_out' => 0,
                                'status' => 'active',
                            ];
                        StockTransaction::create($stock_transection);
                    }
                }

                // for update remove voucher and voucher details first 
                $source = [
                    'source' => 'Purchase',
                    'source_id' => $purchase->id
                ];
                $this->removeVoucherBySourceInfo($source);

                // create payable voucher
                $vdata = [
                    'module'    => 'Purchase',
                    'date'      => $purchase->purchase_date,
                    'amount'    => $purchase->total_amount,
                    'source_id' => $purchase->id,
                    'ref_id'    => $purchase->supplier_id
                ];
                $this->createPayableVoucher($vdata);



                return $this->responseReturn("update", $purchase);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        DB::beginTransaction();

        try {

            // =========================
            // 1️⃣ Eligibility check (payment/receive হয়েছে কিনা)
            // =========================
            $hasPayment = PaymentDetail::where('reference_type', 'Purchase')
                ->where('reference_id', $purchase->id)
                ->whereNull('deleted_at')   // soft delete aware
                ->exists();

            if ($hasPayment) {
                return response()->json([
                    'message' => 'This Purchase has payment/receive entries. Delete is not allowed.'
                ], 422);
            }

            // =========================
            // 2️⃣ Delete related vouchers
            // =========================
            $vouchers = Voucher::where('source', 'Purchase')
                ->where('source_id', $purchase->id)
                ->get();

            foreach ($vouchers as $voucher) {
                VoucherDetail::where('voucher_id', $voucher->id)->delete(); // soft delete
                $voucher->delete(); // soft delete
            }

            // =========================
            // 3️⃣ Delete purchase details (if exists)
            // =========================
            if (method_exists($purchase, 'purchase_details')) {
                $purchase->purchase_details()->delete(); // soft delete
            } else {
                // fallback if relation not defined
                PurchaseDetail::where('purchase_id', $purchase->id)->delete();
            }

            // =========================
            // 4️⃣ Delete purchase (soft)
            // =========================
            $purchase->delete(); // soft delete

            DB::commit();

            return $this->responseReturn("delete", true);
        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'exception' => $e->getMessage()
            ], 422);
        }
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
