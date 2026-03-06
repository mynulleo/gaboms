<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Workorder extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Workorder";

    // file image push

    public function workorder_details()
    {
        return $this->hasMany(WorkorderDetail::class, 'workorder_id', 'id')->oldest('id');
    }

    // date format
}
