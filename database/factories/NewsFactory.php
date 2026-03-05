<?php

namespace Database\Factories;

use App\Models\Website\News;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Website\News>
 */
class NewsFactory extends Factory
{
    protected $model = News::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => 2,
            // 'date' => $this->faker->optional()->date(),
            'title' => $this->faker->optional()->sentence(),
            'slug' => $this->faker->optional()->slug(),
            'description' => $this->faker->optional()->paragraphs(3, true),
            'image' => $this->faker->optional()->imageUrl(),
            'sorting' => $this->faker->numberBetween(0, 100),
            'status' => $this->faker->randomElement(['active', 'deactive']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
