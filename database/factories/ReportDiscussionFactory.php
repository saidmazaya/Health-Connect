<?php

namespace Database\Factories;

use Faker\Factory as faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ReportDiscussion>
 */
class ReportDiscussionFactory extends Factory
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
        return [
            'content' => $faker->text(),
            'user_id' => $user_id,
            'discussion_id' => $discussion_id,
        ];
    }
}
