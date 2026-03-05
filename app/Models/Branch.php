<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Branch extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Branch";

    // file image push
    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function area()
    {
        return $this->belongsTo(Area::class);
    }
    // date format
}
