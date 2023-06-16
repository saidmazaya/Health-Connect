<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Category;
use Faker\Factory as faker;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = faker::create();
        $users = User::all();
        $user = $users->random();
        $title = $faker->sentence();
        $category = Category::all();
        $category = $category->random();
        return [
            'title' => $title,
            'description' => $faker->paragraph(1),
            'content' => $faker->text(),
            'slug' => $user->username. '_' . Str::slug($title, '-'). '-' . rand(1000000, 9999999),
            'author_id' => $user->id,
            'category_id' => $category->id,
        ];
    }
}
