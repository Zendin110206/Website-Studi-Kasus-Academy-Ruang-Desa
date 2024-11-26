<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    // Admin routes
    // Example: User management, report handling
    Route::get('/admin/users', [AdminController::class, 'getUsers']);
    Route::get('/admin/users/{id}', [AdminController::class, 'getUser']);
    Route::post('/admin/users/{id}/reset-password', [AdminController::class, 'resetPassword']);
    Route::post('/admin/users/{id}/block', [AdminController::class, 'blockUser']);
    Route::delete('/admin/users/{id}', [AdminController::class, 'deleteUser']);
});

Route::middleware(['auth:sanctum', 'role:pemerintah'])->group(function () {
    // Pemerintah routes
    // Example: Announcements, program management
});

Route::middleware(['auth:sanctum', 'role:warga'])->group(function () {
    // Warga routes
    // Example: Accessing forums, viewing announcements
});


// Public routes for authenticated users
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/announcements', [AnnouncementController::class, 'index']);
});

// Routes for pemerintah role
Route::middleware(['auth:sanctum', 'role:pemerintah'])->group(function () {
    Route::post('/announcements', [AnnouncementController::class, 'create']);
    Route::put('/announcements/{id}', [AnnouncementController::class, 'update']);
    Route::delete('/announcements/{id}', [AnnouncementController::class, 'delete']);
});

