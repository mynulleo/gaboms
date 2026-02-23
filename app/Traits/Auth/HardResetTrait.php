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


    protected function resetPublicBuild()
    {
        $path = public_path('build');

        if (File::exists($path)) {
            File::deleteDirectory($path);
            File::makeDirectory($path, 0755, true);
        }
    }

    protected function resetTraitFiles()
    {
        $sourcePath = public_path('dev/reset/trait');   // backup source
        $targetPath = app_path('Traits');            // destination

        if (!File::exists($sourcePath)) {
            return false;
        }

        // আগের trait folder clear করো
        if (File::exists($targetPath)) {
            $df = File::deleteDirectory($targetPath);
        }

        // নতুন করে folder তৈরি করো
        File::makeDirectory($targetPath, 0755, true);

        // Source থেকে সব ফাইল ও folder কপি করো
        File::copyDirectory($sourcePath, $targetPath);

        return true;
    }


    protected function resetAdminRoute()
    {
        $sourceFile = public_path('dev/reset/routes/admin.php'); // backup route file
        $targetFile = base_path('routes/admin.php');         // main route file

        if (!File::exists($sourceFile)) {
            return false;
        }

        // যদি routes folder না থাকে, তৈরি করে নাও
        if (!File::exists(dirname($targetFile))) {
            File::makeDirectory(dirname($targetFile), 0755, true);
        }

        // source এর content নিয়ে target এ overwrite করো
        File::put($targetFile, File::get($sourceFile));

        return true;
    }
}
