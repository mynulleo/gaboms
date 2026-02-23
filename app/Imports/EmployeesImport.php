<?php

namespace App\Imports;

use App\Models\Branch;
use App\Models\Employee;
use App\Models\Designation;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\ToModel;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class EmployeesImport implements ToModel, WithHeadingRow, WithValidation
{

    public function model(array $row)
    {

        $employee =  new Employee([
            'empid' => Employee::generateEmpID(),
            'full_name' => $row['full_name'],
            'joining_date' => isset($row['joining_date']) ? Date::excelToDateTimeObject($row['joining_date'])->format('Y-m-d') : null,
            'designation_id' => $this->getDesignationID($row['designation']),
            'salary' => $row['salary'] ?? 0,
            'email' => $row['email'],
            'mobile' => $row['mobile'],
            'dob' => isset($row['dob']) ? Date::excelToDateTimeObject($row['dob'])->format('Y-m-d') : null,
            'nid' => $row['nid'],
            'address' => $row['address'],
            'father_name' => $row['father_name'] ?? null,
            'father_occupation' => $row['father_occupation'] ?? null,
            'father_nid' => $row['father_nid'] ?? null,
            'father_mobile' => $row['father_mobile'] ?? null,
            'mother_name' => $row['mother_name'] ?? null,
            'mother_occupation' => $row['mother_occupation'] ?? null,
            'mother_nid' => $row['mother_nid'] ?? null,
            'mother_mobile' => $row['mother_mobile'] ?? null,
            'spouse_name' => $row['spouse_name'] ?? null,
            'spouse_mobile' => $row['spouse_mobile'] ?? null,
            'branch_id' => $this->getBranchID($row['branch']),
            'status' => $row['status'] ?? 'active',
        ]);
        return $employee;
    }

    public function getDesignationID($designation_name)
    {
        $designation = Designation::where('title', $designation_name)->first();
        return $designation ? $designation->id : null;
    }

    public function getBranchID($branch_name)
    {
        // Assuming you have a Branch model to fetch branch ID by name
        $branch = Branch::where('branch_name', $branch_name)->first();
        return $branch ? $branch->id : null;
    }

    public function rules(): array
    {
        return [
            'full_name' => 'required',
            'joining_date' => 'required',
            'email' => 'nullable||email',
            'mobile' => 'required|string|size:11',
        ];
    }
}
