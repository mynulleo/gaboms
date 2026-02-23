<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class HelpInfo extends BaseModel
{
    protected $guarded = ['id'];
    protected $connection = 'commondb';
    protected $table = 'help_infos';
    protected $logName = "HelpInfo";
    protected $appends = ['plain_description'];

    public function getPageTypeAttribute()
    {
        return ucfirst($this->attributes['page_type'] ?? '');
    }

    public function getPlainDescriptionAttribute()
    {
        return strip_tags($this->description ?? '');
    }
}
