<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Item extends BaseModel
{
	protected $guarded = ['id'];

	protected $logName = "Item";

	// file image push
	public function getImageAttribute($value)
	{
		if (!empty($value)) {
			return url("") . "/public/storage/" . $value;
		}
		return null;
	}

	public static function generateBarcode()
	{
		$barcode = 111;
		$item = Item::latest()->first(['id', 'barcode']);
		if ($item) {
			$barcode = $item->barcode + 1;
		}
		return $barcode;
	}
	// date format

	public function category()
	{
		return $this->belongsTo(Category::class, 'category_id', 'id');
	}

	public function unit()
	{
		return $this->belongsTo(Unit::class, 'unit_id', 'id');
	}
}
