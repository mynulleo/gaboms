<?php

namespace App\Imports;

use App\Models\Area;
use App\Models\Client;
use App\Models\District;
use App\Models\Employee;
use App\Models\Package;
use App\Models\Service;
use App\Traits\ClientTrait;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use PhpOffice\PhpSpreadsheet\Shared\Date;

class ClientImport implements ToModel, WithHeadingRow, WithValidation
{
    use ClientTrait;
    public function model(array $row)
    {
        if (!empty($row['clientid'])) {
            if (Client::where('clientid', $row['clientid'])->exists()) {
                return null;
            }
        }

        $client =  new Client([
            'type'                  => $row['type'] ?? 'Existing',
            'clientid'              => $row['clientid'] ?? Client::generateClientID(),
            'reg_date'              => self::validDateFormat($row['reg_date']),
            'service_id'            => self::getServiceID($row['service']) ?? null,
            'name'                  => $row['name'],
            'org_name'              => $row['org_name'] ?? null,
            'mobile'                => $row['mobile'],
            'email'                 => $row['email'],
            'address'               => $row['address'],
            'district_id'           => self::getDistrictID($row['district']),
            'area_id'               => self::getAreaID($row['area']) ?? null,
            'package_id'            => Self::getPackageID($row['package']) ?? null,
            'ref_name'              => $row['ref_name'] ?? null,
            'nid'                   => $row['nid'] ?? null,
            'employee_id'           => Self::getEmployeeID($row['employee']) ?? null,
            'is_commission'         => $row['is_commission'] ?? 0,
            'commission_amount'     => $row['commission_amount'] ?? 0,
            'previous_due'          => $row['previous_due'],
            'status'                => $row['status'] ?? 'active',
        ]);


        $client->save(); // ✅ এখন ID তৈরি হবে

        if ($row['previous_due'] > 0) {
            $this->createPreviousDueInvoiceForNewClient($client->id, $row);
        }
        return $client;
    }

    public static function validDateFormat($date)
    {
        $validdate = null;

        if (!empty($date)) {

            if (is_numeric($date)) {
                // Excel numeric date
                $regDate = Date::excelToDateTimeObject($date)->format('Y-m-d');
            } else {
                // String date (e.g. 2024-02-01 or 01/02/2024)
                try {
                    $regDate = Carbon::parse($date)->format('Y-m-d');
                } catch (\Exception $e) {
                    $regDate = null; // invalid date হলে null
                }
            }
        }
        return $regDate;
    }

    public static function getEmployeeID($employee_name)
    {
        // Assuming you have an Employee model to fetch employee ID by name
        $employee = Employee::where('full_name', $employee_name)->first();
        return $employee ? $employee->id : null;
    }

    public static function getServiceID($service_name)
    {
        // Assuming you have a Service model to fetch service ID by name
        $service = Service::where('title', $service_name)->first();
        return $service ? $service->id : null;
    }

    public function getDistrictID($district_name)
    {
        // Assuming you have a District model to fetch district ID by name
        $district = District::where('district_name', $district_name)->first();
        return $district ? $district->id : null;
    }

    public function getAreaID($area_name)
    {
        // Assuming you have an Area model to fetch area ID by area name
        $area = Area::where('area_name', $area_name)->first();
        return $area ? $area->id : null;
    }

    public function getPackageID($package_name)
    {
        // Assuming you have a Package model to fetch package ID by name
        $package = Package::where('title', $package_name)->first();
        return $package ? $package->id : null;
    }



    public function rules(): array
    {
        return [
            'reg_date' => 'required',
            'mobile' => 'required|string|size:11',
            'email' => 'nullable|email',
            'is_commission' => 'nullable|in:0,1',
            'status' => 'nullable|in:active,deactive',
        ];
    }
}
