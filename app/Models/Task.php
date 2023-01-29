<?php

namespace App\Models;

use App\Models\Deliverable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title', 'description' , 'deliverable_id'
    ];

    public function deliverable()
    {
        return $this->belongsTo(Deliverable::class);
    }
}
