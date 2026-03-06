<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Currency extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Currency";

    protected $appends = ['is_default_text'];

    public function getIsDefaultTextAttribute()
    {
        return $this->is_default == 1 ? 'Yes' : 'No';
    }

    // file image push

    // date format
}
