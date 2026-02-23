<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;

class Expense extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "Expense";

    public static function generateExpenseID()
    {
        $number = 111;
        $last = Expense::latest()->first();
        if ($last) {
            $number = $last->expenseid + 1;
        }
        return $number;
    }

    public function getExpenseDateAttribute($value)
    {
        return $value ? date('d M, Y', strtotime($value)) : null;
    }

    public function getApprovedDateAttribute($value)
    {
        return $value ? date('d M, Y', strtotime($value)) : null;
    }

    public function expense_details()
    {
        return $this->hasMany(ExpenseDetail::class, 'expense_id', 'id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id', 'id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id', 'id');
    }

    public function approved_admin()
    {
        return $this->belongsTo(Admin::class, 'approved_by', 'id');
    }

    // file image push

    // date format
}
