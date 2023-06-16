<?php

namespace Database\Seeders;

use App\Models\ParentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ParentType::factory()->count(20)->create();
    }
}
