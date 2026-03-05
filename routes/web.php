<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AdminLoginController;

// Home Route...
Route::get('/', [AdminLoginController::class, 'login'])->name('qpanel');

// Admin Route...
Route::group(['prefix' => '', 'as' => 'admin.'], function () {
    Route::get('/qpanel', [AdminLoginController::class, 'login'])->name('qpanel');
    Route::post('/qlogin', [AdminLoginController::class, 'login']);
    Route::get('/login-check', [AdminLoginController::class, 'loginCheck'])->name('loginCheck');
});


// CKEditor files management only for authenticated user
Route::view('ckfinder/ckfinder', 'ckfinder.ckfinder')->name('ckfinder.ckfinder')->middleware('auth:admin');
