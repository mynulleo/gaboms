<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Base\BaseController;
use App\Imports\ClientImport;
use App\Imports\EmployeesImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Validators\ValidationException;

class BulkDataImportController extends BaseController
{

    public function employee()
    {
        return view('layouts.backend_app');
    }


    public function client()
    {
        return view('layouts.backend_app');
    }

    public function empimport(Request $request)
    {
        $request->validate([
            'empexcel' => 'required|file|mimes:xls,xlsx,csv',
        ]);

        $file = $request->file('empexcel');

        try {
            Excel::import(new EmployeesImport, $file);

            return response()->json([
                'success' => true,
                'message' => 'Employees imported successfully!'
            ]);
        } catch (ValidationException $e) {

            $errors = [];

            foreach ($e->failures() as $failure) {
                $row = $failure->row(); // row number
                foreach ($failure->errors() as $error) {
                    $errors[] = "Row {$row}: {$error}";
                }
            }

            return response()->json([
                'success' => false,
                'exception_errors' => $errors
            ], 422);
        }
    }

    public function clientimport(Request $request)
    {
        $request->validate([
            'clientexcel' => 'required|file|mimes:xls,xlsx,csv',
        ]);

        try {
            Excel::import(new ClientImport, $request->file('clientexcel'));

            return response()->json([
                'success' => true,
                'message' => 'Clients imported successfully!'
            ]);
        } catch (ValidationException $e) {

            $errors = [];

            foreach ($e->failures() as $failure) {
                $row = $failure->row(); // row number
                foreach ($failure->errors() as $error) {
                    $errors[] = "Row {$row}: {$error}";
                }
            }

            return response()->json([
                'success' => false,
                'exception_errors' => $errors
            ], 422);
        }
    }
}
