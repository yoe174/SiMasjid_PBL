<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\informasiModel;
use Illuminate\Http\Request;

class informasiController extends Controller
{
    public function index()
    {
        $informasi = informasiModel::all();
        return response()->json($informasi);
    }
}
