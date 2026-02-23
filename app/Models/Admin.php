<?php

namespace App\Models;

use App\Helpers\GlobalHelper;
use App\Models\System\Role;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Admin extends Authenticatable
{
    use Notifiable, SoftDeletes, LogsActivity;

    protected $guarded = ['id'];

    protected $logName = "Admin";

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = ['is_delete', 'original_profile', 'profile_one', 'profile_two', 'profile_three'];

    public function getDescriptionForEvent(string $eventName): string
    {
        $guard = GlobalHelper::get_guard();
        $name = Auth::guard($guard)->user()->name ?? '';

        return "{$name} - {$eventName} this";
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty(true)
            ->logUnguarded(true)
            ->logOnly(['*'])
            ->useLogName($this->logName);
    }

    public function role()
    {
        return $this->hasOne(Role::class, 'id', 'role_id')->select('id', 'name');
    }

    public function getProfileAttribute($value)
    {
        if (!is_string($value)) {
            return json_encode($value, true);
        }

        return $value;
    }

    public function getOriginalProfileAttribute()
    {
        return getJsonMediaUrl($this->profile, 'original');
    }

    public function getProfileOneAttribute()
    {
        return getJsonMediaUrl($this->profile, 0);
    }
    public function getProfileTwoAttribute()
    {
        return getJsonMediaUrl($this->profile, 1);
    }
    public function getProfileThreeAttribute()
    {
        return getJsonMediaUrl($this->profile, 2);
    }

    public function getIsDeleteAttribute()
    {
        if ($this->deleted_at != null) {
            return true;
        }
        return false;
    }

    public function getBirthDateAttribute($value)
    {
        return $value ? date('d M, Y', strtotime($value)) : null;
    }
}
