<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(['message' => 'CORS Test Successful dari laravel']);
});

/////////// user controller
use App\Http\Controllers\Api\userController;
Route::get('/user', [userController::class, 'index']);
Route::post('/user', [userController::class, 'store']);

use App\Http\Controllers\Api\roleController;
Route::get('/role', [roleController::class, 'index']);
