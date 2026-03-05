<?php

namespace App\Traits;

use App\Models\Residence;
use Illuminate\Http\Request;
use App\Models\ResidenceUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

trait ResidenceTrait
{
    use SMSTrait;
}
