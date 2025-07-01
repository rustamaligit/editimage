<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'category', 'description', 'short_description',
        'product_image', 'price', 'qty', 'stock_option',
        'reference', 'status',
    ];


    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
}
