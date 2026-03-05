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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('role_id')->index();
            $table->string('name', 60);
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->string('mobile', 50)->nullable();
            $table->string('email', 100)->nullable();
            $table->date('birth_date')->nullable();
            $table->text('description')->nullable();
            $table->text('address')->nullable();
            $table->string('city',50)->nullable();
            $table->string('state',50)->nullable();
            $table->string('zip_code',50)->nullable();
            $table->string('road_number',50)->nullable();            
            $table->string('username', 30)->nullable();            
            $table->string('password');            
            $table->string('profile')->nullable();            
            $table->boolean('block')->default(0)->comment('0=Active, 1=Deactive');
            $table->enum('status', ['active', 'deactive', 'trash'])->default('active');
            $table->rememberToken();
            $table->userlog();
            $table->softDeletes();
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
        Schema::dropIfExists('profiles');
    }
};
