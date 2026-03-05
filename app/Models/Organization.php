<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\LogOptions;

class Organization extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;
    protected $connection = 'accessdb'; // 👈 এখানে আলাদা ডাটাবেজ কানেকশন
    protected $table = 'organizations';       // 👈 যদি টেবিলের নাম আলাদা হয়, সেটাও দিতে হবে

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty(true)
            ->logUnguarded(true)
            ->logOnly(['*'])
            ->useLogName($this->logName);
    }

    // file image push
    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public static function updateOrganizationExpireDate($organization_id, $month_duration)
    {
        // Organization খুঁজে বের করা
        $organization = self::find($organization_id);

        if ($organization) {
            // যদি expired_date null হয়, তাহলে আজকের তারিখ ধরা হবে
            $currentExpireDate = $organization->expired_date
                ? new \DateTime($organization->expired_date)
                : new \DateTime();

            // মাস যোগ করা
            $currentExpireDate->modify("+{$month_duration} months");

            // আপডেট করা
            $organization->expired_date = $currentExpireDate->format('Y-m-d');
            $organization->save();

            return true;
        }

        return false; // Organization না পাওয়া গেলে
    }
}
