<?php

/**
 * @Quill Information Technology
 */

namespace App\Models\Website\Gallery;

use App\Models\Base\BaseModel;
use Illuminate\Support\Facades\Storage;

class Video extends BaseModel
{
    protected $guarded = ['id'];
    protected $logName = "Video";

    protected $appends = ['original_image', 'thumbnail_one', 'thumbnail_two', 'thumbnail_three'];

    public function album()
    {
        return $this->belongsTo(Album::class);
    }

    public function setThumbnailAttribute($value)
    {
        if (!is_string($value)) {
            $this->attributes['thumbnail'] = json_encode($value);
        } else {
            $this->attributes['thumbnail'] = $value;
        }
    }

    public function getOriginalImageAttribute()
    {
        $image = json_decode($this->thumbnail, true);

        if ($image) {

            $image = $image['original'] ?? null;

            return !empty($image) ? url('/') . '/public/storage/' . $image : null;
        }
    }

    /*  public function getThumbnailOneAttribute()
    {
        return getJsonMediaUrl($this->thumbnail, 0);
    } */
    /* public function getThumbnailTwoAttribute()
    {
        return getJsonMediaUrl($this->thumbnail, 1);
    } */
    /*  public function getThumbnailThreeAttribute()
    {
        return getJsonMediaUrl($this->thumbnail, 2);
    } */

    public function getThumbnailOneAttribute()
    {
        $imageOnePath = getJsonMediaUrl($this->thumbnail, 0);
        if (!empty($imageOnePath)) {
            $file = strstr($imageOnePath, 'upload/');
            if (Storage::disk('public')->exists($file)) {
                return $imageOnePath;
            }
            return null;
        }
    }
    public function getThumbnailTwoAttribute()
    {
        $imageTwoPath = getJsonMediaUrl($this->thumbnail, 1);
        if (!empty($imageTwoPath)) {
            $file = strstr($imageTwoPath, 'upload/');
            if (Storage::disk('public')->exists($file)) {
                return $imageTwoPath;
            }
            return null;
        }
    }
    public function getThumbnailThreeAttribute()
    {
        $imageThreePath = getJsonMediaUrl($this->thumbnail, 2);
        if (!empty($imageThreePath)) {
            $file = strstr($imageThreePath, 'upload/');
            if (Storage::disk('public')->exists($file)) {
                return $imageThreePath;
            }
            return null;
        }
    }
}
