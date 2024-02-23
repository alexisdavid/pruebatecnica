<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    // Relación uno a uno con User (si existe)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación uno a muchos con posts
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
