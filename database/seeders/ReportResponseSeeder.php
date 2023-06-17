<?php

namespace Database\Seeders;

use App\Models\ReportResponse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReportResponseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ReportResponse::factory()->count(20)->create();
    }
}
