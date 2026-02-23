<?php

/**
 * @Quill Information Technology
 */

namespace App\Models\Website;

use App\Models\Base\ParentModel;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Notice extends ParentModel
{
    protected $guarded = ['id'];

    protected $logName = 'Notice';

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($url) {
            $url->slug = Notice::createSlug($url->title);
        });
    }

    private static function createSlug($name)
    {
        $slug = Str::slug($name);
        $count = Notice::where(['slug' => $slug])->count();
        if ($count > 0) {
            $slug = $slug . $count;
        }

        return $slug;
    }

    public function getFileAttribute($value)
    {
        if (! empty($value)) {
            return Storage::url($value);
        }

        return null;
    }

    public function setNoticeDateAttribute($value)
    {
        $dateArray = explode(' ', $value);
        $day = $dateArray[0];
        $month = date_parse($value);
        $year = $dateArray[2];
        $date = $year . '-' . $month['month'] . '-' . $day;
        $this->attributes['notice_date'] = $date;
    }

    public function getNoticeDateAttribute($value)
    {
        return date('d M, Y', strtotime($value));
    }

    public function setNoticeEndAttribute($value)
    {
        if (! empty($value)) {
            $dateArray = explode(' ', $value);
            $day = $dateArray[0];
            $month = date_parse($value);
            $year = $dateArray[2];
            $date = $year . '-' . $month['month'] . '-' . $day;
            $this->attributes['notice_end'] = $date;
        }
    }

    public function getNoticeEndAttribute($value)
    {
        if (@! empty($value)) {
            return date('d M, Y', strtotime($value));
        }
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
