<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class ItemStockSummary extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "ItemStockSummary";

    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }

    // file image push

    // date format
}
