<?php

namespace Database\Factories;

use Faker\Factory as faker;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VoteResponse>
 */
class VoteResponseFactory extends Factory
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
        $responses = DB::table('responses')->pluck('id');
        $responses_id = $faker->randomElement($responses);
        return [
            'type' => Arr::random(['Upvote', 'Downvote']),
            'user_id' => $user_id,
            'response_id' => $responses_id,
        ];
    }
}
