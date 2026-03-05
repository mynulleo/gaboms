<?php

use App\Action\CloudFlare\CloudFlareStoreAction;
use App\Helpers\BreadcrumbHelper;
use App\Helpers\FrontMenuHelper;
use App\Http\Controllers\Base\BaseController;
use App\Models\Website\FrontMenu;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

if (!function_exists('boilerplate')) {
    function boilerplate()
    {
        // Code Here...
    }
}

if (!function_exists('model')) {
    function model($name)
    {
        $model = '\\App\\Models\\' . $name;

        if (!class_exists($model)) {
            throw new \Exception("Model class '$model' does not exist.");
        }

        return new $model();
    }
}

if (!function_exists('artisan')) {
    function artisan($command)
    {
        $exitCode = Artisan::call($command);

        if ($exitCode === 0) {
            echo "Command '$command' executed successfully." . PHP_EOL;
        } else {
            echo "Command '$command' failed with exit code $exitCode." . PHP_EOL;
        }

        return $exitCode;
    }
}

if (!function_exists('vue_to_server_date')) {
    function vue_to_server_date($value)
    {
        if (empty($value)) {
            return null;
        }

        $value = trim($value);

        // ✅ 1. If already valid Y-m-d format, return as is
        if (\DateTime::createFromFormat('Y-m-d', $value) !== false) {
            return $value;
        }

        // ✅ 2. Try to parse "DD Month YYYY" (e.g. 02 March 2026)
        $dateArray = explode(' ', $value);

        if (count($dateArray) < 3) {
            return null; // invalid format safety
        }

        $day  = (int) $dateArray[0];
        $year = (int) $dateArray[2];

        $parsed = date_parse($value);

        if (empty($parsed['month']) || empty($day) || empty($year)) {
            return null;
        }

        // ✅ 3. Final safety check for real date
        if (!checkdate($parsed['month'], $day, $year)) {
            return null;
        }

        return sprintf(
            '%04d-%02d-%02d',
            $year,
            $parsed['month'],
            $day
        );
    }
}

if (!function_exists('is_base64')) {
    function is_base64($string)
    {
        $string = preg_replace('/data:image\/[a-zA-Z0-9]+;base64,/', '', $string);
        $string = str_replace(' ', '+', $string);
        $decoded = base64_decode($string, true);

        return ($decoded !== false) && (base64_encode($decoded) === $string);
    }
}

if (!function_exists('base64_to_upload_instance')) {
    function base64_to_upload_instance($base64)
    {
        $baseController = new BaseController();
        $rawImage = $baseController->upload($base64, 'admin', null, $base64 = true);

        $remoteUrl = url('/') . '/public/storage/' . $rawImage;
        $fileContents = file_get_contents($remoteUrl);

        $tmpFile = tmpfile();
        fwrite(
            $tmpFile,
            $fileContents
        );

        $tmpFileInfo = stream_get_meta_data($tmpFile);

        $instance = new UploadedFile(
            $tmpFileInfo['uri'],
            basename($remoteUrl),
            mime_content_type($tmpFileInfo['uri']),
            filesize($tmpFileInfo['uri']),
            UPLOAD_ERR_OK,
            true
        );

        return $instance;
    }
}

if (!function_exists('cloudflare')) {
    function cloudflare($file, $folder, $resizeSize, $base64 = false)
    {
        if (empty($file) || $file == 'undefined' || $file == 'null') {
            return;
        }

        if ($base64) {
            $baseController = new BaseController();
            $rawImage = $baseController->upload($file, 'admin', null, $base64 = true);

            $remoteUrl = Storage::url($rawImage);
            $fileContents = file_get_contents($remoteUrl);

            $tmpFile = tmpfile();
            fwrite(
                $tmpFile,
                $fileContents
            );

            $tmpFileInfo = stream_get_meta_data($tmpFile);

            $instance = new UploadedFile(
                $tmpFileInfo['uri'],
                basename($remoteUrl),
                mime_content_type($tmpFileInfo['uri']),
                filesize($tmpFileInfo['uri']),
                UPLOAD_ERR_OK,
                true
            );

            $file = $instance;
        }

        $baseFolder = "upload/{$folder}";

        if (config('app.cloudflare_resize')) {
            $cloudFlareStoreAction = new CloudFlareStoreAction();
            $paths = $cloudFlareStoreAction->execute($file, true, $baseFolder, $resizeSize);

            return $paths;
        }

        return use_intervation($file, $baseFolder, $resizeSize);
    }
}

if (!function_exists('use_intervation')) {
    function use_intervation($file, $baseFolder, $resizeSizes)
    {
        $resultArray = [];
        $image = Image::make($file);
        $resizeArray = explode(',', $resizeSizes);

        // Make sure you have the original image...
        $originalFilename = Str::uuid() . '.webp';
        $subFolder = "{$baseFolder}/original";
        $path = "{$subFolder}/{$originalFilename}";
        Storage::put($path, $image->encode('webp', 90)->encoded);
        $resultArray['original'] = $path;

        // Now resize the image as per instruction...
        foreach ($resizeArray as $size) {
            [$width, $height] = explode('x', $size);

            if (!is_numeric($width) || !is_numeric($height)) {
                continue;
            }

            $resizedImage = $image->resize($width, $height);
            $filename = Str::uuid() . '.webp';
            $subFolder = "{$baseFolder}/{$size}";

            if (!Storage::exists($subFolder)) {
                Storage::makeDirectory($subFolder);
            }

            Storage::put("{$subFolder}/{$filename}", $resizedImage->encode('webp', 90)->encoded);
            $resultArray["$width" . 'x' . "$height"] = "{$subFolder}/{$filename}";
        }

        return $resultArray;
    }
}

if (!function_exists('backend_password_reset_url')) {
    function backend_password_reset_url($email)
    {
        $token = Str::uuid();
        $expiredAt = time() + (60 * 60 * 2);

        $token = Str::uuid();
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'expired_at' => $expiredAt,
        ]);

        $query = http_build_query([
            'token' => $token,
        ]);

        $data = DB::table('password_resets')->where('email', $email)->first();

        return url("/backend/password-reset?token={$data->token}");
    }
}

if (!function_exists('uuid')) {
    function uuid()
    {
        return Str::uuid();
    }
}

if (!function_exists('without_cache')) {
    function without_cache($path)
    {
        return asset($path) . cache_busting($path);
    }
}

if (!function_exists('cache_busting')) {
    function cache_busting($path)
    {
        if (file_exists(public_path($path))) {
            $timestamp = filemtime(public_path($path));
            $version = '?id=' . md5($timestamp);

            return $version;
        }

        $alternative = '?id=' . md5(time());

        return $alternative;
    }
}

if (!function_exists('getJsonMediaUrl')) {
    function getJsonMediaUrl($json, $index, $exactIndex = false)
    {
        try {
            // convert from json to array
            if (is_string($json)) {
                $mediaArray = json_decode($json, true);
            } else {
                $mediaArray = $json;
            }

            if ($index == 'original') {
                $path = $mediaArray['original'];
            } else if ($exactIndex === true) {
                $path = $mediaArray[$index];
            } else {
                $mediaPaths = array_values($mediaArray);
                $path = $mediaPaths[$index];
            }

            if (Storage::exists($path)) {
                return Storage::url($path);
            } else {
                return "no_server_image";
            }
        } catch (\Throwable $th) {
            return null;
        }
    }
}
if (!function_exists('emptyImage')) {
    function emptyImage()
    {
        return url('/public/images/noimage.png');
    }
}

if (!function_exists('convertToDatabaseDate')) {
    function convertToDatabaseDate($value)
    {
        if (is_null($value)) {
            return null;
        }
        $date = DateTime::createFromFormat('Y-m-d', $value)
            ?: DateTime::createFromFormat('d/m/Y', $value)
            ?: DateTime::createFromFormat('m/d/Y', $value)
            ?: DateTime::createFromFormat('d-m-Y', $value)
            ?: DateTime::createFromFormat('m-d-Y', $value)
            ?: DateTime::createFromFormat('Y/m/d', $value)
            ?: DateTime::createFromFormat('M j, Y', $value)
            ?: DateTime::createFromFormat('d M, Y', $value);
        if ($date) {
            return $date->format('Y-m-d');
        } else {
            throw new \Exception("Invalid date format: " . $value);
        }
    }
}

if (!function_exists('themeBlade')) {
    function themeBlade(string $path)
    {
        $prefix = 'themes.' . Session::get('theme', 'default');

        return $prefix . '/' . $path;
    }
}

if (!function_exists('themeMenu')) {
    function themeMenu(FrontMenu $frontMenu)
    {
        return FrontMenuHelper::create($frontMenu);
    }
}

if (!function_exists('breadcrumbs')) {
    function breadcrumbs()
    {
        $breadcrumb = new BreadcrumbHelper;
        return $breadcrumb->getAllBreadcrumb();
    }
}

if (!function_exists('getRoute')) {
    function getRoute($item)
    {
        if ($item['type'] == 'internal_link') {
            return route($item['url'], $item['params']);
        }
        if ($item['type'] == 'content') {
            return route('web.content.show', $item['slug']);
        }
        if ($item['type'] == 'outside_website') {
            return $item['url'];
        }
        return '#';
    }
}
