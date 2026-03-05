<?php

namespace App\Traits;

use Exception;

use App\Models\FinancialYear;


trait UplinkProviderTrait
{


    private function getFinancialYearId()
    {
        $fyearid = null;
        $fyear = FinancialYear::where('is_current', 1)->first();
        if ($fyear) {
            $fyearid = $fyear->id;
        }
        return $fyearid;
    }
}
