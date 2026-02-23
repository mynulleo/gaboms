<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class RobotController extends Controller
{
    public function index()
    {

        $items = [
            ['id' => 1, 'name' => 'John Doe', 'email' => 'john.doe@example.com'],
            ['id' => 2, 'name' => 'Jane Smith', 'email' => 'jane.smith@example.com'],
            ['id' => 3, 'name' => 'Alice Johnson', 'email' => 'alice.johnson@example.com'],
        ];
        return response()->json($items);
    }

    public function getfilecontent()
    {
        $filePath = public_path('robots.txt');
        if (!File::exists($filePath)) {
            File::put($filePath, "User-agent: *\nDisallow:");
        }
        $content = File::get($filePath);
        return $content;
    }
    // Method to save the content to robots.txt
    public function savefilecontent(Request $request)
    {
        $request->validate([
            'content' => 'required|string',
        ]);
        $filePath = public_path('robots.txt');
        File::put($filePath, $request->content);
        return response()->json(['success' => 'File saved successfully']);
    }
}
