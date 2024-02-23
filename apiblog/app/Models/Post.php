<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_category',
        'id_author',
        'title',
        'released_date',
        'cover_pick',
        'content',
        'score',
    ];

    // Relación muchos a uno con Category
    public function category()
    {
        return $this->belongsTo(Category::class, 'id_category');
    }

    // Relación muchos a uno con Author
    public function author()
    {
        return $this->belongsTo(Author::class, 'id_author');
    }
}
