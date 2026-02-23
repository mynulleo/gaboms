<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class IssueDetail extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "IssueDetail";

    // file image push
    public function issue()
    {
        return $this->belongsTo(Issue::class, 'issue_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }

    // date format
}
