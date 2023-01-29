<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

      //  dd($request->all());

       $access_token = Config::get('services.access_token');
       
        
        $valid =  $access_token === $request->access_token;
        if (!$valid) {
            // return;
            return response()->json(['error' => 'Invalid access token'], 401);
        }
        
        // Initialize the query
        $cards = Task::query();

        
        // Apply the creation date filter
        if ($request->has('date')) {
            $cards->whereDate('created_at', '=', $request->date);
        }
        
        // Apply the status filter
        if ($request->has('status')) {
            $cards->where('status', '=', $request->status);
        }
        
        // Execute the query and return the results as JSON

        return response()->json([
            'message' => 'Cards found',
            'cards' => $cards->get(),
            'status' => 'true'
        ]);

       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $input = $request->all();
         $validator = Validator::make($input, [
             'title' => 'required',
             'deliverable_id' => 'required',
             'description' => 'required'
         ]);
         if($validator->fails()){
             return $this->sendError($validator->errors());       
         }
         $deliverable = Task::create($input);
 
        if ($deliverable) {
         return response()->json([
             'message' => 'Record added!',
             'status' => 'true'
         ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        //
    }
}
