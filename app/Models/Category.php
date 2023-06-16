<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'type_id',
    ];

    public function parent()
    {
        return $this->belongsTo(ParentType::class, 'type_id', 'id');
    }

    public function discussion()
    {
        return $this->hasMany(Discussion::class, 'discussion_id', 'id');
    }

    public function articles()
    {
        return $this->hasMany(Article::class, 'category_id', 'id');
    }
}
