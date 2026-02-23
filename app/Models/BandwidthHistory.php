<?php

/**
 * @Quill Information Technology
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Base\BaseModel;

class BandwidthHistory extends BaseModel
{
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $logName = "BandwidthHistory";

    public static function generateBHNumber()
    {
        $number = 111;
        $last = BandwidthHistory::latest()->first();
        if ($last) {
            $number = $last->bhno + 1;
        }
        return $number;
    }

    public function getTransactionDateAttribute($value)
    {
        return $value ? date('d M, Y', strtotime($value)) : null;
    }

    public function bandwidth_details()
    {
        return $this->hasMany(BandwidthHistoryDetail::class, 'bandwidth_history_id', 'id');
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id', 'id');
    }

    public function uplink_provider()
    {
        return $this->belongsTo(UplinkProvider::class, 'uplink_provider_id', 'id');
    }
}
