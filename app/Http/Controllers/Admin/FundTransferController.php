<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Base\BaseController;
use App\Http\Resources\Resource;
use App\Models\FundTransfer;
use App\Traits\VoucherTrait;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FundTransferController extends BaseController
{
    use VoucherTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = FundTransfer::with([
            'from_account:id,account_name',
            'to_account:id,account_name'
        ])->latest();

        // 📅 Filter: From Transfer Date
        if (!empty($request->from_transfer_date)) {
            $query->whereDate(
                'transfer_date',
                '>=',
                Carbon::parse($request->from_transfer_date)->format('Y-m-d')
            );
        }

        // 📅 Filter: Between two dates (optional optimized version)
        if (!empty($request->from_transfer_date) && !empty($request->to_transfer_date)) {
            $query->whereBetween('transfer_date', [
                Carbon::parse($request->from_transfer_date)->format('Y-m-d'),
                Carbon::parse($request->to_transfer_date)->format('Y-m-d')
            ]);
        }

        // 📦 Return all or paginated
        if ($request->allData) {
            return $query->get();
        } else {
            $datas = $query->paginate($request->pagination ?? 10);
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

            DB::beginTransaction();

            try {
                $data = $request->all();
                // Create Fund Transfer
                $fundTransfer = FundTransfer::create($data);

                // Create Voucher
                if ($fundTransfer) {
                    $data['id'] = $fundTransfer->id;
                    $this->voucherForFundTransfer($data);
                }

                DB::commit();

                return $this->responseReturn("create", $fundTransfer);
            } catch (Exception $ex) {
                DB::rollBack();
                return response()->json([
                    'status' => false,
                    'exception' => $ex->errorInfo ?? $ex->getMessage()
                ], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FundTransfer  $fundTransfer
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, FundTransfer $fundTransfer)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $fundTransfer;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FundTransfer  $fundTransfer
     * @return \Illuminate\Http\Response
     */
    public function edit(FundTransfer $fundTransfer)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FundTransfer  $fundTransfer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FundTransfer $fundTransfer)
    {
        if ($this->validateCheck($request, $fundTransfer->id)) {

            DB::beginTransaction();

            try {

                $data = $request->all();

                // Update Fund Transfer
                $fundTransfer->fill($data)->save();

                // Remove old voucher
                $source = [
                    'source' => 'FundTransfer',
                    'source_id' => $fundTransfer->id
                ];

                $this->removeVoucherBySourceInfo($source);

                // Create new voucher
                $data['id'] = $fundTransfer->id;
                $this->voucherForFundTransfer($data);

                DB::commit();

                return $this->responseReturn("update", $fundTransfer);
            } catch (Exception $ex) {

                DB::rollBack();

                return response()->json([
                    'status' => false,
                    'exception' => $ex->errorInfo ?? $ex->getMessage()
                ], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FundTransfer  $fundTransfer
     * @return \Illuminate\Http\Response
     */
    public function destroy(FundTransfer $fundTransfer)
    {
        DB::beginTransaction();

        try {

            // ✅ Prepare source info
            $source = [
                'source' => 'FundTransfer',
                'source_id' => $fundTransfer->id
            ];

            // ✅ Remove related voucher প্রথমে delete হবে
            $this->removeVoucherBySourceInfo($source);

            // ✅ তারপর FundTransfer delete হবে
            $res = $fundTransfer->delete();

            DB::commit();

            return $this->responseReturn("delete", $res);
        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                'status' => false,
                'message' => 'Delete failed',
                'error' => $e->getMessage()
            ], 500);
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