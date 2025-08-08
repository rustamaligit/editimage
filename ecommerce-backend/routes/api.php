<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Controllers\Api\ProductController;

// ==============================
// Authenticated API Routes
// ==============================
Route::middleware(['auth:sanctum', 'api-auth'])->group(function () {

    // ✅ Authenticated user info
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // ✅ Product routes (protected)
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products', [ProductController::class, 'index']);
});

// ==============================
// Public Routes
// ==============================
Route::post('/login', function (Request $request) {
    $request->validate([
        'email'    => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    return response()->json([
        'token' => $user->createToken('api-token')->plainTextToken,
        'user'  => [
            'name'     => $user->name,
            'email'    => $user->email,
            'is_admin' => $user->is_admin ?? false,
        ],
    ]);
});

// ✅ Public product listing (no login required)
Route::get('/feature-products', [ProductController::class, 'index']);

// ==============================
// Admin-Only Routes
// ==============================
Route::middleware(['auth:sanctum', 'admin'])
    ->prefix('admin')
    ->group(function () {
        Route::get('/ping', function () {
            return 'pong';
        });

        // Example: Admin-only product list
        Route::get('/products', [ProductController::class, 'index']);
    });

Route::middleware(['auth:sanctum', 'admin'])->get('/admin/me', function (Request $request) {
    return $request->user();
});
