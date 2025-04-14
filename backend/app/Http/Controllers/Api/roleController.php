<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\roleModel;
use Illuminate\Http\Request;

class roleController extends Controller
{
    public function index()
    {
        $roles = roleModel::all();
        return response()->json($roles);
    }
}
