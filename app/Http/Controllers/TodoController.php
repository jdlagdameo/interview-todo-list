<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use App\Http\Requests\Todo\StoreTodoRequest;
use App\Http\Requests\Todo\UpdateTodoRequest;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::query()->get();

        return inertia('Todos/Index', [
            'todos' => $todos,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoRequest $request)
    {
        // BRIEF: Validate the request and save a new TODO, then redirect back to the index
        $todos = Todo::create($request->all());
        return to_route('todos.index');

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        // BRIEF: Validate the request and update the TODO's "completed" status, then redirect back to the index
        $completed = !$request->completed;
        $todo->update(compact("completed"));
        return to_route('todos.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        // BRIEF: Delete the TODO, then redirect back to the index
        $todo->delete();
        return to_route('todos.index');
        
    }
}
