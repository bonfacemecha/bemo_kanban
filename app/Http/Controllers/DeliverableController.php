<?php

namespace App\Http\Controllers;

use App\Models\Deliverable;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DeliverableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'message' => 'Record added!',
            'deliverables' => Deliverable::with('tasks')->get(),
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
        // dd($request->all());
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        $deliverable = Deliverable::create($input);

        if ($deliverable) {
            return response()->json([
                'message' => 'Record added!',
                'title' => $request->title,
                'status' => 'true'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Deliverable  $deliverable
     * @return \Illuminate\Http\Response
     */
    public function show(Deliverable $deliverable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Deliverable  $deliverable
     * @return \Illuminate\Http\Response
     */
    public function edit(Deliverable $deliverable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Deliverable  $deliverable
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Deliverable $deliverable)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Deliverable  $deliverable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Deliverable $deliverable)
    {

        $records = Task::where('deliverable_id', $deliverable->id)->update([
            'status' => '0',
        ]);

        foreach (Deliverable::find($deliverable->id)->tasks as $record) {
            $record->delete();
        };

        //delete parent
        $deliverable->delete();

        if ($deliverable) {
            return response()->json([
                'message' => 'Record deleted',
                'status' => 'true'
            ]);
        }
    }
}
