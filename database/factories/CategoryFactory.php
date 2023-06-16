<?php

namespace Database\Factories;

use Faker\Factory as faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = faker::create();
        $name = $faker->word();
        $parentType = DB::table('parent_types')->pluck('id');
        $parentTypeId = $faker->randomElement($parentType);
        return [
            'name' => $name,
            'slug' => Str::slug($name, '-'). '-' . rand(1000000, 9999999),
            'type_id' => $parentTypeId,
        ];
    }
}
