<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            SpecialistSeeder::class,
            UserSeeder::class,
            ParentTypeSeeder::class,
            CategorySeeder::class,
            DiscussionSeeder::class,
            ResponseSeeder::class,
            ArticleSeeder::class,
            ReportDiscussionSeeder::class,
            ReportResponseSeeder::class,
        ]);

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
