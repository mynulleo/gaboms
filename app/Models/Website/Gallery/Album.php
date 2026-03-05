<?php

/**
 * @Quill Information Technology
 */

namespace App\Models\Website\Gallery;

use Illuminate\Support\Str;
use App\Models\Base\BaseModel;
use Illuminate\Support\Facades\Storage;

class Album extends BaseModel
{
    protected $guarded = ['id'];
    protected $logName = "Album";

    protected $appends = ['original_image', 'image_one', 'image_two'];

    const PHOTOS = 'Photos';

    const VIDEOS = 'Videos';

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime:d M Y H:i A',
        'updated_at' => 'datetime:d M Y  H:i A',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($url) {
            $url->slug = Album::createSlug($url->name);
        });
    }

    public static function createSlug($name)
    {
        $slug = Str::slug($name);
        $count = Album::where(['slug' => $slug])->count();
        if ($count > 0) {
            $slug = $slug . $count;
        }

        return $slug;
    }

    public function setImageAttribute($value)
    {
        if (! is_string($value)) {
            $this->attributes['image'] = json_encode($value);
        } else {
            $this->attributes['image'] = $value;
        }
    }

    public function getOriginalImageAttribute()
    {
        return getJsonMediaUrl($this->image, 'original');
    }

    public function getImageOneAttribute()
    {
        return getJsonMediaUrl($this->image, 0);
        /* $imageOnePath = getJsonMediaUrl($this->image, 0);
        if (!empty($imageOnePath)) {
            $file = strstr($imageOnePath, 'upload/');
            if (Storage::disk('public')->exists($file)) {
                return $imageOnePath;
            }
            // return emptyImage();
            return null;
        } */
    }
    public function getImageTwoAttribute()
    {
        return getJsonMediaUrl($this->image, 1);
        /*  $imageTwoPath = getJsonMediaUrl($this->image, 1);
        if (!empty($imageTwoPath)) {
            $file = strstr($imageTwoPath, 'upload/');
            if (Storage::disk('public')->exists($file)) {
                return $imageTwoPath;
            }
            return null;
        } */
    }

    public function photos()
    {
        return $this->hasMany(Photo::class, 'album_id', 'id');
    }

    public function videos()
    {
        return $this->hasMany(Video::class, 'album_id', 'id');
    }
}
