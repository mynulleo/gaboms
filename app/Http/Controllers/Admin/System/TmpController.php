<?php

namespace App\Http\Controllers\Admin\System;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Traits\Auth\HardResetTrait;

class LibController extends Controller
{
    use HardResetTrait;

    public function tmpClear(Request $request)
    {
        // 1️⃣ Laravel log file delete
        $this->clearLaravelLogs();

        // 2️⃣ Error log delete (storage/logs এর মধ্যে থাকা সব log)
        $this->clearErrorLogs();

        // 3️⃣ Cache clear
        $this->clearCache();

        // 4️⃣ Hard reset check
        if ($request->get('hardreset') === 'true') {
            $this->hardReset();
        }

        return response()->json([
            'status' => true,
            'message' => 'Temporary files cleared successfully'
        ]);
    }

    protected function clearLaravelLogs()
    {
        $logPath = storage_path('logs');

        if (File::exists($logPath)) {
            $files = File::files($logPath);

            foreach ($files as $file) {
                File::delete($file->getRealPath());
            }
        }
    }

    protected function clearErrorLogs()
    {
        $logPath = storage_path('logs');

        if (File::exists($logPath)) {
            $files = File::files($logPath);

            foreach ($files as $file) {
                if (str_contains($file->getFilename(), 'laravel')) {
                    File::delete($file->getRealPath());
                }
            }
        }
    }

    protected function clearCache()
    {
        Artisan::call('cache:clear');
        Artisan::call('config:clear');
        Artisan::call('route:clear');
        Artisan::call('view:clear');
    }
}
