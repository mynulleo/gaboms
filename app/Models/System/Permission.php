<?php

/**
 * @Quill Information Technology
 */

namespace App\Models\System;

use App\Models\Base\BaseModel;

class Permission extends BaseModel
{
    protected $connection = 'commondb';
    protected $table = 'permissions';
    protected $guarded = ['id'];

    public $timestamps = false;

    protected $logName = 'Permission';

    public function parent()
    {
        return $this->belongsTo(Permission::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Permission::class, 'parent_id');
    }
}
