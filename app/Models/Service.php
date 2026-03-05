<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Support\Str;
use App\Models\Base\BaseModel;
use Illuminate\Support\Facades\Storage;


class Service extends BaseModel
{
	protected $guarded = ['id'];
	protected $logName = "Service";

	protected static function boot()
	{
		parent::boot();
		static::creating(function ($url) {
			$url->slug = Service::createSlug($url->title);
		});
	}
	public static function createSlug($name)
	{
		$slug = Str::slug($name);
		$count = Service::where(['slug' => $slug])->count();
		if ($count > 0) {
			$slug = $slug . $count;
		}

		return $slug;
	}
	public function getRouteKeyName()
	{
		return 'slug';
	}





	// date format
}
