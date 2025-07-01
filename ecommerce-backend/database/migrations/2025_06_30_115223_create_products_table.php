<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
                    $table->id();
                    $table->string('name');
                    $table->string('category')->nullable(); // could be converted to foreign key later
                    $table->text('description')->nullable();
                    $table->text('short_description')->nullable();
                    $table->string('product_image')->nullable(); // main image
                    $table->decimal('price', 10, 2)->default(0);
                    $table->integer('qty')->default(0);
                    $table->string('stock_option')->default('in_stock'); // in_stock / out_of_stock
                    $table->string('reference')->nullable(); // SKU or internal code
                    $table->enum('status', ['enabled', 'disabled'])->default('enabled'); // 👈 product status
                    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
