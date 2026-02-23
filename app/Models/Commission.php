<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;
use App\Traits\VoucherTrait;

class Commission extends BaseModel
{
    use VoucherTrait, SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "Commission";

    protected static function booted()
    {
        static::updated(function ($commission) {
            // 👉 এখনো approve হয়নি → কোনো voucher না
            if (empty($commission->approved_by) || empty($commission->approved_date)) {
                return;
            }

            // 👉 Closed হলে voucher touch করবো না
            if ((int) $commission->is_closed === 1) {
                return;
            }

            // 👉 Approve হওয়ার মুহূর্তে voucher create হবে
            if (
                $commission->wasChanged('approved_by') ||
                $commission->wasChanged('approved_date')
            ) {

                $ref = $commission->employee_id ? 'Employee' : null;
                $ref_id = $commission->employee_id ?: null;

                $vdata = [
                    'module'    => 'Commission',
                    'date'      => vue_to_server_date($commission->approved_date),
                    'amount'    => $commission->amount,
                    'source_id' => $commission->id,
                    'ref_name'  => $ref,
                    'ref_id'    => $ref_id,
                ];

                $voucherId = app()->make(self::class)->createPayableVoucher($vdata);

                // voucher_id save করে রাখো
                $commission->saveQuietly();


                return;
            }

            // 👉 Approved হওয়ার পর amount change হলে voucher update হবে
            if ($commission->wasChanged('amount')) {

                // পুরনো voucher remove
                $source = [
                    'source'    => 'Commission',
                    'source_id' => $commission->id,
                ];
                $commission->removeVoucherBySourceInfo($source);

                // নতুন voucher create
                $ref = $commission->employee_id ? 'Employee' : null;
                $ref_id = $commission->employee_id ?: null;

                $vdata = [
                    'module'    => 'Commission',
                    'date'      => $commission->approved_date,
                    'amount'    => $commission->amount,
                    'source_id' => $commission->id,
                    'ref_name'  => $ref,
                    'ref_id'    => $ref_id,
                ];

                $voucherId = app()->make(self::class)->createPayableVoucher($vdata);

                $commission->voucher_id = $voucherId;
                $commission->saveQuietly();
            }
        });
    }

    public function getApprovedDateAttribute($value)
    {
        return $value ? date('d M, Y', strtotime($value)) : null;
    }
    // file image push

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id', 'id');
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

    public function package()
    {
        return $this->belongsTo(Package::class, 'package_id', 'id');
    }

    public function approved_admin()
    {
        return $this->belongsTo(Admin::class, 'approved_by', 'id');
    }


    public static function insertOrUpdateCommission(array $data)
    {
        // Check if a commission already exists for this client
        $commission = self::where('client_id', $data['client_id'])->first();

        if ($commission) {
            if ($commission->is_closed == 1) {
                return $commission;
            }
            // Update existing commission
            $commission->update([
                'employee_id'    => $data['employee_id'] ?? $commission->employee_id,
                'referance_name' => $data['referance_name'] ?? $commission->referance_name,
                'package_id'     => $data['package_id'] ?? $commission->package_id,
                'percentage'     => $data['percentage'] ?? $commission->percentage,
                'amount'         => $data['amount'] ?? $commission->amount,
                'is_closed'      => $data['is_closed'] ?? $commission->is_closed,
                'status'         => $data['status'] ?? $commission->status,
            ]);
        } else {
            // Insert new commission
            $commission = self::create([
                'employee_id'    => $data['employee_id'] ?? null,
                'client_id'      => $data['client_id'],
                'referance_name' => $data['referance_name'] ?? null,
                'package_id'     => $data['package_id'],
                'percentage'     => $data['percentage'] ?? null,
                'amount'         => $data['amount'] ?? 0,
                'is_closed'      => $data['is_closed'] ?? 0,
                'status'         => $data['status'] ?? 'active',

            ]);
        }

        return $commission;
    }

    // date format
}
