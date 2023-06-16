<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParentType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function category()
    {
        return $this->hasMany(Category::class, 'type_id', 'id');
    }
}
