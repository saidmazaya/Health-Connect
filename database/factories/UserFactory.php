<?php

namespace Database\Factories;

use Faker\Factory as faker;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = faker::create();
        $username = $faker->userName();
        $faker = faker::create();
        $specialist = DB::table('specialists')->pluck('id');
        $specialist_id = $faker->randomElement($specialist);
        return [
            'username' => '@' . $username,
            'name' => $faker->name(),
            'password' => bcrypt($faker->password()),
            'email' => $faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'role_id' =>  Arr::random([1,2,3]),
            'specialist_id' => $specialist_id,
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
