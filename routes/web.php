<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Home');
});

Route::get('/resume', function () {
  return Inertia::render('Resume');
});
