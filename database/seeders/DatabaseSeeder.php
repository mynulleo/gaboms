<?php

namespace Database\Seeders;

use App\Models\Events;
use App\Models\Website\News;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $arr = [
            MenuSeeder::class,
            AdminSeeder::class,
            RoleSeeder::class,
            SiteSettingsSeeder::class,
            SliderDetailsSeeder::class,
            CountrySeeder::class,
            CategorySeeder::class,


            News::class,
        ];

        $this->call($arr);
    }
}
