<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Models\EmployeeSalary;
use App\Models\SalaryParameter;
use App\Http\Resources\Resource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Base\BaseController;

class EmployeeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Employee::with(['designation:id,title', 'offic_branch:id,branch_name'])->latest();

        if (!empty($request->designation_id)) {
            $query->where('designation_id', $request->designation_id);
        }

        if (!empty($request->branch_id)) {
            $query->where('branch_id', $request->branch_id);
        }

        if (!empty($request->field_name) && !empty($request->value)) {
            $query->whereLike($request->field_name, $request->value);
        }

        if (!empty($request->from_joining_date) && empty($request->to_joining_date)) {
            $fromdate = vue_to_server_date($request->from_joining_date);
            $query->whereDate('joining_date', $fromdate);
        }

        if (!empty($request->from_joining_date) && !empty($request->to_joining_date)) {

            $fromdate = vue_to_server_date($request->from_joining_date);
            $todate = vue_to_server_date($request->to_joining_date);
            $query->whereBetween('joining_date', [$fromdate, $todate]);
        }


        if ($request->allData) {
            return $query->get();
        } else {
            $datas = $query->paginate($request->pagination);
            return new Resource($datas);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('layouts.backend_app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->validateCheck($request)) {
            DB::beginTransaction();

            try {
                $data = $request->all();

                // Image upload
                if (!empty($request->file("image"))) {
                    $data["image"] = $this->upload($request->image, "employee");
                }

                $data['empid'] = Employee::generateEmpID();
                $data['joining_date'] = vue_to_server_date($data['joining_date']);
                $data['dob'] = vue_to_server_date($data['dob']);
                $data['bank_id'] = $data['bank_id'] ?? '';

                // 🔹 Create Employee
                $res = Employee::create($data);

                /* =========================
                🔹 Employee Salary Insert
                ==========================*/
                if ($res && $request->has('employee_salaries')) {
                    $employee_salaries = json_decode($request->employee_salaries, true);
                    foreach ($employee_salaries as $salary) {

                        EmployeeSalary::create([
                            'employee_id'          => $res->id,
                            'salary_parameter_id' => $salary['salary_parameter_id'],
                            'amount'               => $salary['amount'] ?? 0,
                        ]);
                    }
                }

                DB::commit();

                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                DB::rollBack();
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }

        // Load relations
        $employee = Employee::with([
            'designation:id,title',
            'offic_branch:id,branch_name',
            'bank:id,bank_name',
            'employee_salaries:id,employee_id,salary_parameter_id,amount',
            'employee_salaries.salary_parameter:id,title,is_basic,percentage_of_basic'
        ])->find($id);
        // যদি employee_salaries এ ডাটা থাকে
        if ($employee->employee_salaries()->exists()) {

            $employee_salaries = $employee->employee_salaries->map(function ($item) {
                return [
                    'title'                 => $item->salary_parameter->title ?? '',
                    'salary_parameter_id'   => $item->salary_parameter_id,
                    'is_basic'              => $item->salary_parameter->is_basic,
                    'percentage_of_basic'   => $item->salary_parameter->percentage_of_basic,
                    'amount'                => $item->amount,
                ];
            });
        }
        // যদি employee_salaries এ কোনো ডাটা না থাকে
        else {

            $parameters = SalaryParameter::select('id', 'title', 'is_basic', 'percentage_of_basic')->get();

            $employee_salaries = $parameters->map(function ($param) {
                return [
                    'title'                 => $param->title,
                    'salary_parameter_id'   => $param->id,
                    'is_basic'              => $param->is_basic,
                    'percentage_of_basic'   => $param->percentage_of_basic,
                    'amount'                => 0,
                ];
            });
        }

        // আগের employee object এর সাথে নতুন formatted employee_salaries বসানো
        $data = $employee->toArray();
        $data['employee_salaries'] = $employee_salaries;
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        if ($this->validateCheck($request, $employee->id)) {
            DB::beginTransaction();

            try {
                $data = $request->all();
                // dd($data);
                $oldempname = $employee->full_name;

                // Image upload part
                if (!empty($request->file("image"))) {
                    $oldFile = $this->oldFile($employee->image);
                    Storage::delete($oldFile);
                    $data["image"] = $this->upload($request->image, "employee");
                }

                $data['joining_date'] = vue_to_server_date($data['joining_date']);
                $data['dob'] = vue_to_server_date($data['dob']);
                $data['bank_id'] = $data['bank_id'] === "null" || $data['bank_id'] === "" ? null : $data['bank_id'];
                $data['salary'] = $data['salary'];

                // Update employee main info
                $employee->fill($data)->save();

                /* =========================
                🔹 Employee Salary Part
                ==========================*/

                if ($request->has('employee_salaries')) {

                    // আগের সব salary delete করে নতুন করে insert (simple & safe)
                    EmployeeSalary::where('employee_id', $employee->id)->delete();
                    $empsalaries = json_decode($request->employee_salaries, true);
                    foreach ($empsalaries as $salary) {

                        // amount 0 হলেও রাখতে চাইলে রাখবেন
                        EmployeeSalary::create([
                            'employee_id'          => $employee->id,
                            'salary_parameter_id' => $salary['salary_parameter_id'],
                            'amount'               => $salary['amount'] ?? 0,
                        ]);
                    }
                }

                DB::commit();

                return $this->responseReturn("update", $employee);
            } catch (Exception $ex) {
                DB::rollBack();
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        // delete
        app("deleteAction")->arrayImages($employee->image);
        $old = $this->oldFile($employee->image);
        if (Storage::disk("public")->exists($old)) {
            Storage::delete($old);
        }


        $res = $employee->delete();
        return $this->responseReturn("delete", $res);
    }

    //API Functions
    public function getEmployees()
    {
        return Employee::where('status', 'active')->whereNull('resign_date')->get(['id', 'full_name']);
    }

    public function getEmployeeInfo($employeeid)
    {
        $employee = null;
        if ($employeeid) {
            $employee = Employee::with(
                [
                    'designation:id,title,total_salary',
                ]
            )->where('id', $employeeid)->first();
        }

        return $employee->toArray();
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        return true;
        return $request->validate([
            //ex: 'name' => 'required|email|nullable|date|string|min:0|max:191',
        ], [
            //ex: 'name' => "This name is required" (custom message)
        ]);
    }
}
