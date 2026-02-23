<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Employee extends BaseModel
{
	protected $guarded = ['id'];

	protected $logName = "Employee";

	public static function generateEmpID()
	{
		$empid = 111;
		$emp = Employee::latest()->first(['id', 'empid']);
		if ($emp) {
			$empid = $emp->empid + 1;
		}
		return $empid;
	}

	public function getJoiningDateAttribute($value)
	{
		$startDate = null;
		if ($value) {
			$startDate = date('d M, Y', strtotime($value));
		}

		return $startDate;
	}

	public function getDobAttribute($value)
	{
		$startDate = null;
		if ($value) {
			$startDate = date('d M, Y', strtotime($value));
		}

		return $startDate;
	}

	// file image push
	public function getImageAttribute($value)
	{
		if (!empty($value)) {
			return url("") . "/public/storage/" . $value;
		}
		return null;
	}
	// date format

	public function designation()
	{
		return $this->belongsTo(Designation::class);
	}

	public function offic_branch()
	{
		return $this->belongsTo(Branch::class);
	}

	public function bank()
	{
		return $this->belongsTo(Bank::class);
	}

	public function employee_salaries()
	{
		return $this->hasMany(EmployeeSalary::class, 'employee_id', 'id');
	}
}
