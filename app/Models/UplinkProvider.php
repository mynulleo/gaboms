<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class UplinkProvider extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "UplinkProvider";

    public function getPreviousPurchaseAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    // file image push
    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }
    // date format
}
