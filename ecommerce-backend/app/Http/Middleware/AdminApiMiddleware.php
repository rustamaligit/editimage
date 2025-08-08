<?php
// app/Http/Middleware/AdminApiMiddleware.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminApiMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user(); // requires auth:sanctum run before this
        if (! $user || ! $user->is_admin) {
            return response()->json(['message' => 'Forbidden (admin only)'], 403);
        }

        return $next($request);
    }
}
}
