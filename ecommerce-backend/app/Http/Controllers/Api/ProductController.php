<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'short_description' => 'nullable|string',
            'price' => 'required|numeric',
            'qty' => 'required|integer|min:0',
            'stock_option' => 'required|in:in_stock,out_of_stock',
            'reference' => 'nullable|string|max:255',
            'status' => 'required|in:enabled,disabled',
            'product_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'product_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048'
        ]);

        // Handle main image upload
        if ($request->hasFile('product_image')) {
            $validated['product_image'] = $request->file('product_image')->store('products/main', 'public');
        }

        // Create the product
        $product = Product::create($validated);

        // Handle multiple gallery images
        if ($request->hasFile('product_images')) {
            foreach ($request->file('product_images') as $image) {
                $path = $image->store('products/gallery', 'public');
                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $path,
                ]);
            }
        }

        return response()->json([
            'message' => 'Product created successfully.',
            'product' => $product->load('images')
        ]);
    }
}
