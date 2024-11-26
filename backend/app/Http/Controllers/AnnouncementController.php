<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;
use Illuminate\Support\Facades\Auth;

class AnnouncementController extends Controller
{
    // List all announcements
    public function index()
    {
        $announcements = Announcement::with('user')->orderBy('created_at', 'desc')->get();
        return response()->json($announcements);
    }

    // Create a new announcement
    public function create(Request $request)
    {
        $request->validate([
            'title'   => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $announcement = Announcement::create([
            'user_id' => Auth::id(),
            'title'   => $request->title,
            'content' => $request->content,
        ]);

        return response()->json($announcement, 201);
    }

    // Update an existing announcement
    public function update(Request $request, $id)
    {
        $announcement = Announcement::findOrFail($id);

        // Check if the authenticated user is the creator
        if ($announcement->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'title'   => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
        ]);

        $announcement->update($request->only(['title', 'content']));

        return response()->json($announcement);
    }

    // Delete an announcement
    public function delete($id)
    {
        $announcement = Announcement::findOrFail($id);

        // Check if the authenticated user is the creator
        if ($announcement->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $announcement->delete();

        return response()->json(['message' => 'Announcement deleted']);
    }
}
