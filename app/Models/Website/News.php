<?php

/**
 * @Quill Information Technology
 */

namespace App\Models\Website;

use App\Models\Base\BaseModel;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class News extends BaseModel
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $logName = "News";

    protected $appends = ['original_image', 'image_one', 'image_two', 'image_three'];

    protected $casts = [
        'created_at' => 'datetime:d M Y H:i A',
        'updated_at' => 'datetime:d M Y  H:i A',
    ];

    public function setDateAttribute($value)
    {
        $this->attributes['date'] = convertToDatabaseDate($value);
    }

    public function getDateAttribute($value)
    {
        if (@!empty($value)) {
            return date('d M, Y', strtotime($value));
        }
    }

    public function setTagAttribute($value)
    {
        $this->attributes['tag'] = json_encode($value);
    }

    public function getTagAttribute($value)
    {
        $tag = json_decode($value);

        return explode(',', $tag);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($url) {
            $url->slug = News::createSlug($url->title);
        });
    }

    private static function createSlug($name)
    {
        $slug = Str::slug($name);
        $count = News::where(['slug' => $slug])->count();
        if ($count > 0) {
            $slug = $slug . $count;
        }

        return $slug;
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
        $image = json_decode($this->image, true);

        if ($image) {

            $image = $image['original'] ?? null;

            return !empty($image) ? url('/') . '/public/storage/' . $image : null;
        }
    }

    /* public function getThumbOneAttribute()
    {
    $image = json_decode($this->image, true);
    if ($image) {
    $image = $image['200x200'] ?? null;

    return !empty($image) ? url('/') . '/public/storage/' . $image : null;
    }
    } */
    public function getImageOneAttribute()
    {
        // return getJsonMediaUrl($this->image, 0);
        $imageOnePath = getJsonMediaUrl($this->image, 0);
        if (!empty($imageOnePath)) {
            $file = strstr($imageOnePath, 'upload/');
            if (Storage::disk('public')->exists($file)) {
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
            if (Storage::disk('public')->exists($file)) {
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
            if (Storage::disk('public')->exists($file)) {
                return $imageThreePath;
            }
            return null;
        }
    }

    public function getPdfFileAttribute($value)
    {
        if (!empty($value)) {
            return url('/') . '/public/storage/' . $value;
        }

        return null;
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /* public function setMetaTagAttribute($value)
    {
    $this->attributes['meta_tag'] = json_encode($value);
    } */

    /* public function getMetaTagAttribute($value)
    {
    $tag = json_decode($value);

    return explode(',', $tag);
    } */

    public function getMetaTagAttribute($value)
    {
        $value = json_decode($value);
        if (is_string($value)) {
            $value = json_decode($value);
        }

        return $value;
    }
}
