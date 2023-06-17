<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discussion extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'slug',
        'status',
        'author_id',
        'category_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function comments()
    {
        return $this->hasMany(Response::class, 'discussion_id', 'id')->whereNull('parent_id');
    }

    public function report()
    {
        return $this->hasMany(ReportDiscussion::class, 'discussion_id', 'id');
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }
}
