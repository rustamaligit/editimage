<?php
// app/Http/Controllers/Api/AdminProductController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImage;

class AdminProductController extends Controller
{
    public function index()
    {
        return response()->json(['products' => Product::with('images')->paginate(20)]);
    }

    public function store(Request $request)
    {
        // validate and create (same as your store method)
    }

    public function show($id)
    {
        $product = Product::with('images')->findOrFail($id);
        return response()->json(['product' => $product]);
    }

    public function update(Request $request, $id)
    {
        // validate and update product
    }

    public function destroy($id)
    {
        Product::findOrFail($id)->delete();
        return response()->json(['message' => 'Product deleted']);
    }
}
