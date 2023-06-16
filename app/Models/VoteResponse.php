<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoteResponse extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'user_id',
        'response_id',
    ];

    public function response()
    {
        return $this->belongsTo(Response::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
