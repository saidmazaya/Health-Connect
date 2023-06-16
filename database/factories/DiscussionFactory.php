<?php

namespace Database\Factories;

use Faker\Factory as faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Discussion>
 */
class DiscussionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = faker::create();
        $author = DB::table('users')->pluck('id');
        $author_id = $faker->randomElement($author);
        $category = DB::table('categories')->pluck('id');
        $category_id = $faker->randomElement($category);
        $title = $faker->sentence(); 
        return [
            'title' => $title,
            'content' => $faker->text(),
            'slug' => Str::slug($title, '-'),
            'status' => 'Published',
            'author_id' => $author_id,
            'category_id' => $category_id,
        ];
    }
}
