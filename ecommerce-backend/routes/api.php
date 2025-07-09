<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Controllers\Api\ProductController;


Route::middleware(['auth:sanctum', 'api-auth'])->group(function () {

    // ✅ Authenticated user info
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // ✅ Product creation (protected)
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products', [ProductController::class, 'index']);
});

// ✅ Login route (public)
Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    return response()->json([
        'token' => $user->createToken('api-token')->plainTextToken
    ]);
});


Route::get('/ping', function () {
    return 'pong';
});

Route::get('/feature-products', [ProductController::class, 'index']);
