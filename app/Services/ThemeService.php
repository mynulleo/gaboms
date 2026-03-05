<?php

namespace App\Services;

use Exception;
use ZipArchive;
use App\Models\Theme;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class ThemeService
{
    public function extractTheme($themeZip, $slug)
    {
        $theme = Storage::disk('local')->putFile('', $themeZip);
        $zipPath = Storage::disk('local')->path($theme);
        $extractPath = resource_path('views/themes/' . $slug);

        // Create directory if not exists
        if (!File::exists($extractPath)) {
            File::makeDirectory($extractPath, 0777, true);
        }

        // Open and extract the ZIP file
        $zip = new ZipArchive;
        if ($zip->open($zipPath) !== TRUE) {
            throw new Exception('Failed to update theme. Please, enable ZIP archive.');
        }

        $zip->extractTo($extractPath);
        $zip->close();

        Storage::disk('local')->delete($theme);
    }

    public function activeTheme($slug = 'default', $id = null)
    {
        if ($id) {
            Theme::whereNot('id', $id)
                ->where('status', 'active')
                ->update(['status' => 'deactive']);
        }

        $assetPath = resource_path('views/themes/' . $slug . '/assets');
        $assetCopyPath = resource_path('build/theme');
        $assetpublicPath = public_path('build/theme');
        // copy assets files
        if (File::exists($assetPath)) {
            if (!File::exists($assetCopyPath)) {
                File::makeDirectory($assetCopyPath, 0777, true);
            }
            File::copyDirectory($assetPath, $assetCopyPath);
            File::link($assetCopyPath, $assetpublicPath);
            // dd($assetPath);
        }

        Session::put('theme', $slug);
    }

    public function syncTheme()
    {
        $theme = Theme::where('status', 'active')->latest()->first();
        Session::put('theme', $theme?->slug ?? 'default');

        $this->activeTheme(Session::get('theme'));
    }

    public function deleteTheme(Theme $theme)
    {
        $themePath = resource_path('views/themes/' . $theme->slug);

        // Create directory if not exists
        if (File::exists($themePath)) {
            File::deleteDirectory($themePath);
        }

        if ($theme->status == 'active') {
            $this->activeTheme();
        }
    }
}
