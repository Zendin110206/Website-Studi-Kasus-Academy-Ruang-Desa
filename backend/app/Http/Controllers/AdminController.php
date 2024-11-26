<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    // List all users
    public function getUsers()
    {
        $users = User::all();
        return response()->json($users);
    }

    // Get a single user
    public function getUser($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    // Reset user's password
    public function resetPassword($id)
    {
        $user = User::findOrFail($id);
        $newPassword = 'defaultpassword'; // You can generate a random password here

        $user->password = Hash::make($newPassword);
        $user->save();

        return response()->json([
            'message' => 'Password has been reset.',
            'new_password' => $newPassword, // In practice, send this via email
        ]);
    }

    // Block user
    public function blockUser(Request $request, $id)
    {
        $request->validate([
            'days' => 'required|integer|min:1',
        ]);

        $user = User::findOrFail($id);
        $user->blocked_until = now()->addDays($request->days);
        $user->save();

        return response()->json(['message' => "User blocked for {$request->days} day(s)."]);
    }

    // Delete user
    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User has been deleted.']);
    }
}
