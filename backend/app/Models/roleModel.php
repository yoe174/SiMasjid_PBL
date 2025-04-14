<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class roleModel extends Model
{
    use HasFactory;
    protected $table = "role";
    protected $primaryKey = "role_id";

    protected $fillable =
    [
        'role_id',
        'role_name'
    ];

    public function users()
    {
        return $this->hasMany(userModel::class, 'role_id', 'role_id');
    }
}
