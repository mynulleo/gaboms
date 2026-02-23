<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Storage;
use Exception;
use App\Models\Voucher;
use App\Models\SalarySheet;
use App\Traits\VoucherTrait;
use App\Traits\SalarySheetTrait;
use Illuminate\Http\Request;
use App\Models\PaymentDetail;
use App\Models\VoucherDetail;
use App\Http\Resources\Resource;
use App\Models\SalarySheetDetail;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Base\BaseController;

class SalarySheetController extends BaseController
{
    use VoucherTrait, SalarySheetTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = SalarySheet::with('approved_admin:id,name')->latest();

        if (!empty($request->value)) {
            $query->where('title', $request->value);
        }

        if (!empty($request->month)) {
            $query->where('month', $request->month);
        }

        if (!empty($request->year)) {
            $query->where('year', $request->year);
        }

        if (
            isset($request->from_gen_date, $request->to_gen_date) &&
            !empty($request->from_gen_date) &&
            !empty($request->to_gen_date)
        ) {
            $query->whereDate('generated_date', '>=', vue_to_server_date($request->from_gen_date));
            $query->whereDate(
                'generated_date',
                '<=',
                vue_to_server_date($request->to_gen_date)
            );
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
        $this->validateCheck($request);

        DB::beginTransaction();

        try {
            $data = $request->all();

            $data['generated_date'] = vue_to_server_date($data['generated_date']);
            $salarysheet_details = $data['salary_sheet_details'] ?? [];
            unset($data['salary_sheet_details']);

            // create master
            $res = SalarySheet::create($data);

            // create details
            foreach ($salarysheet_details as $row) {
                SalarySheetDetail::create([
                    'salary_sheet_id'       => $res->id,
                    'employee_id'           => $row['employee_id'],
                    'salary'                => $row['salary'],
                    'commission'            => $row['commission'] ?? 0,
                    'bonus'                 => $row['bonus'] ?? 0,
                    'deduct'                => $row['deduct'] ?? 0,
                    'installment'           => $row['installment'] ?? 0,
                    'installment_history'   => $row['installment_history'] ?? null,
                    'total'                 => $row['total'],
                    'status'                => 'active',
                ]);

                // create payable voucher
                // $this->createPayableVoucher([
                //     'module'    => 'SalarySheetDetail',
                //     'date'      => $data['generated_date'],
                //     'amount'    => $row['total'],
                //     'source_id' => $res->id, // master id better
                //     'ref_id'    => $row['employee_id'],
                // ]);
            }

            DB::commit();

            return $this->responseReturn("create", $res);
        } catch (\Throwable $ex) {
            DB::rollBack();

            return response()->json([
                'message' => 'Salary sheet create failed',
                'error'   => $ex->getMessage()
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SalarySheet  $salarySheet
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() === 'html') {
            return view('layouts.backend_app');
        }

        $salarySheet = SalarySheet::with([
            'approved_admin:id,name',
            'salary_sheet_details.employee:id,full_name,designation_id,empid',
            'salary_sheet_details.employee.designation:id,title,total_salary'
        ])->find($id);

        if (!$salarySheet) {
            return response()->json([
                'message' => 'Salary sheet not found'
            ], 404);
        }

        // RELATION overwrite
        $salarySheet->setRelation(
            'salary_sheet_details',
            $salarySheet->salary_sheet_details->map(function ($row) {
                return [
                    'id'            => $row->id,
                    'employee_id'   => $row->employee_id,
                    'employee_name' => '(' . ($row->employee->empid ?? '') . ') ' . ($row->employee->full_name ?? ''),
                    'designation'   => $row->employee->designation->title ?? '',
                    'salary'        => $row->salary,
                    'commission'    => $row->commission,
                    'bonus'         => $row->bonus,
                    'deduct'        => $row->deduct,
                    'installment'   => $row->installment,
                    'installment_history'   => $row->installment_history,
                    'total'         => $row->total,
                    'is_paid'       => $row->is_paid,
                    'status'        => $row->status,
                ];
            })
        );

        return response()->json($salarySheet);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SalarySheet  $salarySheet
     * @return \Illuminate\Http\Response
     */
    public function edit(SalarySheet $salarySheet)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SalarySheet  $salarySheet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SalarySheet $salarySheet)
    {
        if (!is_null($salarySheet->approved_by)) {
            return $this->responseReturn(
                'warning',
                null,
                null,
                null,
                'This salary sheet is already approved. You cannot update it.'
            );
        }

        $this->validateCheck($request, $salarySheet->id);

        DB::beginTransaction();

        try {
            $data = $request->all();
            $data['generated_date'] = vue_to_server_date($data['generated_date']);

            $details = $data['salary_sheet_details'] ?? [];
            unset($data['salary_sheet_details']);

            // 🔹 update master
            $salarySheet->update($data);

            // 🔹 existing IDs from request
            $requestIds = collect($details)
                ->pluck('id')
                ->filter()
                ->toArray();

            // 🔥 delete removed rows
            SalarySheetDetail::where('salary_sheet_id', $salarySheet->id)
                ->when(!empty($requestIds), fn($q) => $q->whereNotIn('id', $requestIds))
                ->delete();

            foreach ($details as $row) {

                $detail = SalarySheetDetail::updateOrCreate(
                    [
                        'id' => $row['id'] ?? null,
                        'salary_sheet_id' => $salarySheet->id,
                    ],
                    [
                        'employee_id' => $row['employee_id'],
                        'salary'      => $row['salary'],
                        'commission'  => $row['commission'] ?? 0,
                        'bonus'       => $row['bonus'] ?? 0,
                        'deduct'      => $row['deduct'] ?? 0,
                        'installment' => $row['installment'] ?? 0,
                        'installment_history'   => $row['installment_history'] ?? null,
                        'total'       => $row['total'],
                        'status'      => 'active',
                    ]
                );

                // 🔥 Remove previous voucher by REAL detail id
                $this->removeVoucherBySourceInfo([
                    'source'    => 'SalarySheetDetail',
                    'source_id' => $detail->id
                ]);
            }

            DB::commit();

            return $this->responseReturn('update', $salarySheet);
        } catch (\Throwable $ex) {
            DB::rollBack();

            return response()->json([
                'message' => 'Salary sheet update failed',
                'error'   => $ex->getMessage()
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SalarySheet  $salarySheet
     * @return \Illuminate\Http\Response
     */
    public function destroy(SalarySheet $salarySheet)
    {
        DB::beginTransaction();

        try {

            // =========================
            // Eligibility check (payment/receive হয়েছে কিনা)
            // =========================
            $hasPayment = PaymentDetail::where('reference_type', 'SalarySheet')
                ->where('reference_id', $salarySheet->id)
                ->whereNull('deleted_at')   // soft delete aware
                ->exists();

            if ($hasPayment) {
                return response()->json([
                    'message' => 'This Salary Sheet has payment/receive entries. Delete is not allowed.'
                ], 422);
            }

            // =========================
            // Delete related vouchers
            // =========================
            $vouchers = Voucher::where('source', 'SalarySheet')
                ->where('source_id', $salarySheet->id)
                ->get();

            foreach ($vouchers as $voucher) {
                VoucherDetail::where('voucher_id', $voucher->id)->delete(); // soft delete
                $voucher->delete(); // soft delete
            }

            // =========================
            // Delete salary sheet details
            // =========================
            SalarySheetDetail::where('salary_sheet_id', $salarySheet->id)->delete(); // soft delete

            // =========================
            // Delete salary sheet (soft)
            // =========================
            $salarySheet->delete(); // soft delete

            DB::commit();

            return $this->responseReturn("delete", true);
        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'exception' => $e->getMessage()
            ], 422);
        }
    }
}
