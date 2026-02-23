<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;
use Illuminate\Support\Facades\DB;

class Account extends BaseModel
{
    protected $table = 'accounts';
    protected $guarded = ['id'];
    protected $logName = "Account";

    public function parent()
    {
        return $this->belongsTo(Account::class, 'parent_id');
    }

    public static function generateAccountCode()
    {
        $account_code = 111;
        $last_account = Account::latest()->first(['id', 'account_code']);
        if ($last_account) {
            $account_code = $last_account->account_code + 1;
        }
        return $account_code;
    }

    /*
        $data = [
            'name'           => 'Rahim',
            'clientid'       => 111,
            'reference_type' => 'client|employee|uplink_provider',
            'reference_id'   => 15,
            'account_type'   => 'asset|liability',
            'parent_id'      => 3
        ];
    */
    public static function createPersonAccount(array $data)
    {

        return DB::transaction(function () use ($data) {

            $accountCode = self::generateAccountCode();

            return self::create([
                'account_code'          => $accountCode,
                'account_name'          => ucfirst($data['entityid']) . ' - ' . $data['name'],
                'account_type'          => $data['account_type'],
                'parent_id'             => $data['parent_id'],
                'reference_type'        => $data['reference_type'],
                'reference_id'          => $data['reference_id'],
                'opening_balance'       => 0,
                'opening_balance_type'  => 'Debit',
                'status'                => 1,
            ]);
        });
    }

    public static function updatePersonAccount(string $refType, int $refId, int $accid, string $accountName): bool
    {
        $account = Account::where('reference_type', $refType)
            ->where('reference_id', $refId)
            ->lockForUpdate()
            ->first();

        if (! $account) {
            return false; // or throw exception
        }

        // if (! in_array($account->type, ['asset', 'liability'])) {
        //     throw new LogicException('Invalid account type for person');
        // }

        $accountName = ucfirst($accid) . ' - ' . $accountName;

        return $account->update([
            'account_name' => $accountName
        ]);
    }
}
