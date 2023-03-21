<?php

use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TodoController::class, 'index'])->name('todos.index');

// BRIEF: Write your routes here
Route::post('/todos',[TodoController::class, 'store'])->name('todos.store');
Route::put('/todos/{todo}',[TodoController::class, 'update'])->name('todos.update');
Route::delete('/todos/{todo}',[TodoController::class, 'destroy'])->name('todos.destroy');