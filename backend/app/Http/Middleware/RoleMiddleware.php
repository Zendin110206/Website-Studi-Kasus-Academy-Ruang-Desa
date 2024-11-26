<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * Memeriksa apakah pengguna yang terautentikasi memiliki peran yang diperlukan.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role  Peran yang diizinkan
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Memeriksa apakah pengguna sudah terautentikasi
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = Auth::user();

        // Memeriksa apakah pengguna memiliki peran yang sesuai
        if ($user->role !== $role) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        // Melanjutkan ke permintaan berikutnya jika semua cek lulus
        return $next($request);
    }
}
