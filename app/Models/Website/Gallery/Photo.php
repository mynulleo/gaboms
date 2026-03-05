<?php

/**
 * @Quill Information Technology
 */

namespace App\Models\Website\Gallery;

use App\Models\Base\BaseModel;
use Illuminate\Support\Facades\Storage;

class Photo extends BaseModel
{
    protected $guarded = ['id'];
    protected $logName = "Photo";

    protected $appends = ['thumb', 'thumb_one', 'thumb_two'];

    public function album()
    {
        return $this->belongsTo(Album::class);
    }

    public function getImagesAttribute($value)
    {
        return !empty($value) ? json_decode($value, true) : '';
    }
    public function getThumbAttribute()
    {
        return getJsonMediaUrl($this->images, 'resize0', true);
    }
    public function getThumbOneAttribute()
    {
        return getJsonMediaUrl($this->images, 'resize1', true);
    }
    public function getThumbTwoAttribute()
    {
        return getJsonMediaUrl($this->images, 'resize2', true);
    }
}
