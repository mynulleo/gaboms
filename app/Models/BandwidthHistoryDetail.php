<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;

class BandwidthHistoryDetail extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "BandwidthHistoryDetail";

    public function getIsVatAttribute($value)
    {
        return $value == 1 ? true : false;
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id', 'id');
    }

    public function getStartDateAttribute($value)
    {
        return $value ? date('d M, Y', strtotime($value)) : null;
    }

    public function getEndDateAttribute($value)
    {
        return $value ? date('d M, Y', strtotime($value)) : null;
    }

    // file image push

    // date format
}
