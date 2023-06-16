<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'status',
        'parent_id',
        'user_id',
        'discussion_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function discussion()
    {
        return $this->belongsTo(Discussion::class, 'discussion_id', 'id');
    }

    public function replies()
    {
        return $this->hasMany(Response::class, 'parent_id', 'id');
    }

    public function report()
    {
        return $this->hasMany(Response::class, 'response_id', 'id');
    }

    public function votes()
    {
        return $this->hasMany(VoteResponse::class);
    }
}
