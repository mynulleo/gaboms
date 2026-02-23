<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class StockTransaction extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "StockTransaction";

    public function getTransactionDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    // file image push
    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }

    // --------------------------------------
    // $data = [
    //     'item_id' => $res->id,
    //     'transaction_date' => date('Y-m-d'),
    //     'transaction_type' => 'Opening',
    //     'qty_in' => $res->opening_qty,
    //     'qty_out' => 0,
    //     'status' => 'Active',
    // ];

    public static function createOpeningStockTransaction($data)
    {
        return self::create($data);
    }

    // date format
}
