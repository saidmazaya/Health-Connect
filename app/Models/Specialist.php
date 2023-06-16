<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'gelar',
    ];

    public function user()
    {
        return $this->hasMany(User::class, 'specialist_id', 'id');
    }
}
