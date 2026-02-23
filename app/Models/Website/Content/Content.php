<?php

/**
 * @Quill Information Technology
 */

namespace App\Models\Website\Content;

use App\Models\Base\BaseModel;
use Illuminate\Support\Facades\Storage;

class Content extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = 'Content';

    protected $appends = ['original_image', 'image_one', 'image_two', 'image_three'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function contentFiles()
    {
        return $this->hasMany(ContentFile::class)->oldest('sorting');
    }

    public function setImageAttribute($value)
    {
        if (!is_string($value)) {
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
        // return getJsonMediaUrl($this->image, 0);
        $imageOnePath = getJsonMediaUrl($this->image, 0);
        if (!empty($imageOnePath)) {
            $file = strstr($imageOnePath, 'upload/');
            if (Storage::exists($file)) {
                return $imageOnePath;
            }
            // return emptyImage();
            return null;
        }
    }
    public function getImageTwoAttribute()
    {
        // return getJsonMediaUrl($this->image, 1);
        $imageTwoPath = getJsonMediaUrl($this->image, 1);
        if (!empty($imageTwoPath)) {
            $file = strstr($imageTwoPath, 'upload/');
            if (Storage::exists($file)) {
                return $imageTwoPath;
            }
            return null;
        }
    }
    public function getImageThreeAttribute()
    {
        // return getJsonMediaUrl($this->image, 2);
        $imageThreePath = getJsonMediaUrl($this->image, 2);
        if (!empty($imageThreePath)) {
            $file = strstr($imageThreePath, 'upload/');
            if (Storage::exists($file)) {
                return $imageThreePath;
            }
            return null;
        }
    }

    public function setIsMetaAttribute($value)
    {
        $this->attributes['is_meta'] = $value == true ? 1 : 0;
    }

    public function getIsMetaAttribute($value)
    {
        return $value == 1 ? true : false;
    }

    public function getMetaTagAttribute($value)
    {
        return $value ? json_decode($value) : [];
    }

    public function files()
    {
        return $this->hasMany(ContentFile::class, 'content_id', 'id');
    }
}
