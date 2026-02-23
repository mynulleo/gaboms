<?php

namespace App\Http\Controllers\Admin\Support;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\Page;

class SupportController extends Controller
{
    public function countries()
    {
        return Country::get();
    }

    public function page()
    {
        $pages=Page::where('status','active')->select('id','title')->latest()->get();
        return $pages;
    }
}
