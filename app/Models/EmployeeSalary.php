<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class EmployeeSalary extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "EmployeeSalary";

    // file image push

    // date format
    public function salary_parameter()
    {
        return $this->belongsTo(SalaryParameter::class, 'salary_parameter_id', 'id');
    }
}
