<?php

namespace Database\Factories;

use Faker\Factory as faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ReportResponse>
 */
class ReportResponseFactory extends Factory
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
            'content' => $faker->text(),
            'user_id' => $user_id,
            'responses_id' => $responses_id,
        ];
    }
}
