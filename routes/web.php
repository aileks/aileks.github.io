<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('About');
});

Route::get('/resume', function () {
    return Inertia::render('Resume');
});

Route::get('/skills', function () {
    return Inertia::render('Skills');
});
