<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Area extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Area";

    // file image push
    public function district()
    {
        return $this->belongsTo(District::class);
    }
    // date format
}
