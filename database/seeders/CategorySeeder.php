<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'id' => 1,
                'module_name' => 'Events',
                'title' => 'Event',
                'sorting' => 0,
                'status' => 'active',
            ],
            [
                'id' => 2,
                'module_name' => 'News',
                'title' => 'News',
                'sorting' => 0,
                'status' => 'active',

            ],
            [
                'id' => 3,
                'module_name' => 'Notice',
                'title' => 'Notice',
                'sorting' => 0,
                'status' => 'active',
            ],
        ]);
    }
}
