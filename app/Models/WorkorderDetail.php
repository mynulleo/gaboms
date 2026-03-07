<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class WorkorderDetail extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "WorkorderDetail";

    // file image push
    public function workorder()
    {
        return $this->belongsTo(Workorder::class, 'workorder_id', 'id');
    }
    // date format
}
