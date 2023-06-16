<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'password',
        'email',
        'image',
        'bio',
        'about',
        'role_id',
        'specialist_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }

    public function specialist()
    {
        return $this->belongsTo(Role::class, 'specialist_id', 'id');
    }

    public function articles()
    {
        return $this->hasMany(Article::class, 'author_id');
    }

    public function discussion()
    {
        return $this->hasMany(Discussion::class, 'author_id');
    }

    public function response()
    {
        return $this->hasMany(Response::class, 'user_id', 'id');
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }

    public function voteResponse()
    {
        return $this->hasMany(VoteResponse::class);
    }
}
