<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         return [
                'name' => $this->faker->words(3, true),
                'category' => $this->faker->randomElement(['T-Shirt', 'Mug', 'Phone Case', 'Sticker']),
                'description' => $this->faker->paragraph(),
                'short_description' => $this->faker->sentence(),
                'product_image' => 'https://via.placeholder.com/400x400.png?text=Product', // 👈 hosted image
                'price' => $this->faker->randomFloat(2, 10, 999),
                'qty' => $this->faker->numberBetween(0, 100),
                'stock_option' => $this->faker->randomElement(['in_stock', 'out_of_stock']),
                'reference' => strtoupper(Str::random(8)),
                'status' => $this->faker->randomElement(['enabled', 'disabled']),
            ];
    }
}
