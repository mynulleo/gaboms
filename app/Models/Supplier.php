<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Supplier extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Supplier";

    public static function generateSupID()
    {
        $supid = 111;
        $lastsupplier = Supplier::latest()->first(['id', 'supid']);
        if ($lastsupplier) {
            $supid = $lastsupplier->supid + 1;
        }
        return $supid;
    }

    // file image push
    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }
    // date format
}
