<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportResponse extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'user_id',
        'response_id',
    ];

    public function response()
    {
        return $this->belongsTo(Response::class, 'response_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
