<?php

namespace App\Traits\Auth;

use Illuminate\Support\Facades\File;

trait HardResetTrait
{

    public function execute()
    {
        $this->resetTraitFiles();
        $this->resetPublicBuild();
        $this->resetAdminRoute();
    }
}
