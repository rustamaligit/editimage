<?php
// app/Http/Controllers/Api/AdminAuthController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        if (! $user->is_admin) {
            return response()->json(['message' => 'Unauthorized (not admin)'], 403);
        }

        // create token (optionally give abilities)
        $token = $user->createToken('admin-token', ['admin'])->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'is_admin' => true,
            ]
        ]);
    }

    public function logout(Request $request)
    {
        // delete current access token
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out']);
    }

    // Optional: endpoint to return current admin user
    public function me(Request $request)
    {
        return response()->json(['user' => $request->user()]);
    }
}
