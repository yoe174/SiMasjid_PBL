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

////////// Role Controller
use App\Http\Controllers\Api\roleController;

Route::get('/role', [roleController::class, 'index']);
Route::post('/role', [roleController::class, 'store']);
Route::get('/role/{id}', [roleController::class, 'show']);
Route::put('/role/{id}', [roleController::class, 'update']);

