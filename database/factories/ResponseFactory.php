<?php

namespace Database\Factories;

use Faker\Factory as faker;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Response>
 */
class ResponseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = faker::create();
        $user = DB::table('users')->pluck('id');
        $user_id = $faker->randomElement($user);
        $discussion = DB::table('discussions')->pluck('id');
        $discussion_id = $faker->randomElement($discussion);
        $parent = DB::table('responses')->pluck('id');
        $parent_id = $faker->randomElement($parent);
        return [
            'content' => $faker->text(),
            'status' => 'Published',
            'parent_id' => Arr::random([null, $parent_id]),
            'user_id' => $user_id,
            'discussion_id' => $discussion_id,
        ];
    }
}
