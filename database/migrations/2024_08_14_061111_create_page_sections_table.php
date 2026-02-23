<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('page_id')->nullable();
            $table->string('slug')->nullable()->unique();
            $table->string('type')->nullable();
            // $table->string('icon')->nullable();
            $table->text('image')->nullable();
            $table->string('description')->nullable();
            $table->string('url')->nullable();
            $table->string('video_url')->nullable();
            $table->integer('sorting')->default(0);
            $table->enum('status', ['active', 'deactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('page_sections');
    }
};
