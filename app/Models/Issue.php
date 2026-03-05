<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Issue extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = "Issue";

    public static function generateIssueNo()
    {
        $issueno = 111;
        $issue = Issue::latest()->first(['id', 'issueno']);
        if ($issue) {
            $issueno = $issue->issueno + 1;
        }
        return $issueno;
    }


    public function getIssueDateAttribute($value)
    {
        $startDate = null;
        if ($value) {
            $startDate = date('d M, Y', strtotime($value));
        }

        return $startDate;
    }

    public function issue_details()
    {
        return $this->hasMany(IssueDetail::class, 'issue_id', 'id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id', 'id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id', 'id');
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

    // file image push

    // date format
}
