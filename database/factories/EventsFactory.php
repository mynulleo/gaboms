<?php

namespace Database\Factories;

use App\Models\Events;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Events>
 */
class EventsFactory extends Factory
{
    protected $model = Events::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => 1,
            'title' => $this->faker->sentence,
            'slug' => Str::slug($this->faker->unique()->sentence),
            'image' => $this->faker->imageUrl(),
            'venue' => $this->faker->address,
            'description' => $this->faker->paragraph,
            'created_by'=>"Nogor Solutions",
            'created_ip'=>"::1",
            'sorting' => $this->faker->numberBetween(0, 100),
            'status' => $this->faker->randomElement(['active', 'deactive']),
            'created_at' => now(),
            'updated_at' => now(),

        ];

    }
}
