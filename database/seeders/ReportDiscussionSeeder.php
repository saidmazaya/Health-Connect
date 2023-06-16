<?php

namespace Database\Seeders;

use App\Models\ReportDiscussion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReportDiscussionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ReportDiscussion::factory()->count(20)->create();
    }
}
