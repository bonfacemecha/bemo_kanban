<?php

namespace App\Models;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Deliverable extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'title', 
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
