<?php

namespace Database\Seeders;

use App\Models\VoteResponse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VoteResponseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        VoteResponse::factory()->count(20)->create();
    }
}
