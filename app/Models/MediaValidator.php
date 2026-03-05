<?php

/**
 * Md. Abdul Majid
 * 
 * @abdulmajidcse
 */

namespace App\Models;

use Illuminate\Support\Str;
use App\Models\Base\BaseModel;

class MediaValidator extends BaseModel
{
    protected $guarded = ['id'];
    protected $connection = 'commondb';
    protected $table = 'help_infos';
    protected $logName = "MediaValidator";

    protected $appends = ['field_type_html', 'resize_value_html'];

    public function getResizeValueAttribute($value)
    {
        $value = json_decode($value);
        if (is_string($value)) {
            $value = json_decode($value);
        }

        return $value ?? [];
    }

    public function getFieldTypeHtmlAttribute()
    {
        return Str::title($this->field_type);
    }

    public function getResizeValueHtmlAttribute()
    {
        $html = '';
        foreach ($this->resize_value as $value) {
            $html .= "<span class='status approved me-1'>$value</span>";
        }
        return $html;
    }
}
