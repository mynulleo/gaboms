<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;

class ExpenseDetail extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "ExpenseDetail";

    public function expense()
    {
        return $this->belongsTo(Expense::class, 'expense_id', 'id');
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }

    // file image push

    // date format
}
