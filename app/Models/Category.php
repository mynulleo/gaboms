<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use App\Models\Base\BaseModel;

class Category extends BaseModel
{
    protected $guarded = ['id'];

    protected $logName = 'Category';

    function projects()
    {
        return $this->hasMany(Project::class);
    }
}
