<!DOCTYPE html>
<html lang="en">

<head data-baseurl="{{ URL::to('/') }}">
    <meta charset="UTF-8">

    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Favicon Icon -->
    <link rel='icon' type='image/png' sizes='32x32' href="{{ $siteSetting->favicon }}">

    <!-- Cache Invalidation -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base-url" content="{{ URL::to('/') }}" />

    <!-- Laravel Config -->
    <script>
        window.laravel = {
            csrfToken: "{{ csrf_token() }}",
            baseurl: "{{ url('/') }}",
            asset_url: "{{ str()->of(asset('/'))->trim('/') }}",
            storage_url: "{{ str()->of(Storage::url('/'))->trim('/') }}",
        }
    </script>

    <title>{{ config('app.name') }}</title>

    <!-- Css -->
    <link href="{{ without_cache('admin/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ without_cache('admin/css/magnific-popup.css') }}" rel="stylesheet">
    <link href="{{ without_cache('build/admin/css/style.css') }}" rel="stylesheet">
    <link href="{{ without_cache('admin/css/custom.css') }}" rel="stylesheet">

    <style>
        .ui-datepicker {
            z-index: 9 !important;
            margin-top: 5px;
        }
    </style>

</head>

<body>
    <!-- Vue Instance -->
    <div id="app">
        <app success-message="{{ session()->has('successMessage') ? session()->get('successMessage') : '' }}" />
    </div>

    <!-- Script -->
    <script src="{{ without_cache('admin/js/jquery-3.6.0.min.js') }}"></script>
    <script src="{{ without_cache('admin/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ without_cache('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ without_cache('admin/fontawesome/js/all.js') }}"></script>
    <script src="{{ without_cache('admin/js/script.js') }}"></script>
    <script src="{{ without_cache('admin/js/custom.js') }}"></script>
    <script src="{{ without_cache('build/js/app.js') }}" defer></script>
</body>

</html>
