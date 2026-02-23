<?php

namespace App\Models;

use App\Models\Base\BaseModel;

class LoanInstallment extends BaseModel
{

    protected $guarded = ['id'];
    protected $logName = "LoanInstallment";


    public function loaninfo()
    {
        return $this->belongsTo(LoanInfo::class, 'loan_info_id', 'id');
    }
}
