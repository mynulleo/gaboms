<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;

class SalarySheet extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $logName = "SalarySheet";

    public function getGeneratedDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function getApprovedDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function approved_admin()
    {
        return $this->belongsTo(Admin::class, 'approved_by', 'id');
    }

    public function salary_sheet_details()
    {
        return $this->hasMany(SalarySheetDetail::class, 'salary_sheet_id', 'id');
    }

    // file image push

    // date format
}
