<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->truncate();
        $count = DB::table('menus')->count();
        if ($count == 0) {
            $menus = [
                [
                    'menu_name' => 'Dashboard',
                    'icon' => "<i class='fas fa-cog spin'></i>",
                    'route_name' => 'dashboard.index',
                    'params' => null,
                    'show_dasboard' => 0,
                ],
                [
                    'menu_name' => 'Admin',
                    'icon' => "<i class='fa fa-user'></i>",
                    'route_name' => 'admin.index',
                    'params' => null,
                    'show_dasboard' => 0,
                ],
                [
                    'menu_name' => 'Master Setup',
                    'icon' => "<i class='fab fa-mastodon'></i>",
                    'route_name' => null,
                    'params' => null,
                    'show_dasboard' => 0,
                    'children' => [
                        [
                            'menu_name' => 'Category',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'category.index',
                            'show_dasboard' => 0,
                        ],

                        [
                            'menu_name' => 'Media Validator',
                            'icon' => "<i class='fas fa-image' aria-hidden='true'></i>",
                            'route_name' => 'mediaValidator.index',
                            'show_dasboard' => 0,
                        ],
                    ],
                ],
                [
                    'menu_name' => 'Contents',
                    'icon' => "<i class='fa fa-windows'></i>",
                    'route_name' => null,
                    'params' => null,
                    'show_dasboard' => 0,
                    'children' => [
                        [
                            'menu_name' => 'Content List',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'content.index',
                            'show_dasboard' => 0,
                        ],
                        // [
                        //     'menu_name' => 'About Us',
                        //     'icon' => "<i class='fa fa-list text-aqua'></i>",
                        //     'route_name' => 'content.edit',
                        //     'params' => 'about-us',
                        //     'show_dasboard' => 0,
                        // ],
                    ],
                ],
                [
                    'menu_name' => 'Website',
                    'icon' => "<i class='fas fa-globe'></i>",
                    'route_name' => null,
                    'params' => null,
                    'show_dasboard' => 0,
                    'children' => [
                        [
                            'menu_name' => 'Contact Us',
                            'icon' => "<i class='fas fa-address-book'></i>",
                            'route_name' => 'contacts.index',
                            'show_dasboard' => 1,
                        ],
                        [
                            'menu_name' => 'Event',
                            'icon' => "<i class='fas fa-snowflake'></i>",
                            'route_name' => 'events.index',
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Faq',
                            'icon' => "<i class='fas fa-book-open'></i>",
                            'route_name' => 'faq.index',
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Notice',
                            'icon' => "<i class='fab fa-leanpub'></i>",
                            'route_name' => 'notice.index',
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'News',
                            'icon' => "<i class='fa fa-newspaper-o'></i>",
                            'route_name' => 'news.index',
                            'params' => null,
                            'show_dasboard' => 1,
                        ],

                        [
                            'menu_name' => 'Page',
                            'icon' => "<i class='fas fa-address-book'></i>",
                            'route_name' => 'page.index',
                            'show_dasboard' => 1,
                        ],
                        [
                            'menu_name' => 'Page Seo',
                            'icon' => "<i class='fas fa-address-book'></i>",
                            'route_name' => 'pageSeo.index',
                            'show_dasboard' => 1,
                        ],
                        [
                            'menu_name' => 'Page Section',
                            'icon' => "<i class='fas fa-address-book'></i>",
                            'route_name' => 'pageSection.index',
                            'show_dasboard' => 1,
                        ],
                    ],
                ],
                [
                    'menu_name' => 'Profile',
                    'icon' => "<i class='fa fa-user-o'></i>",
                    'route_name' => 'profile.index',
                    'params' => null,
                    'show_dasboard' => 0,
                ],
                [
                    'menu_name' => 'Gallery / Images',
                    'icon' => "<i class='fa fa-windows'></i>",
                    'route_name' => null,
                    'params' => null,
                    'show_dasboard' => 0,
                    'children' => [
                        [
                            'menu_name' => 'Albums',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'album.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Photos',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'photo.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Videos',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'video.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Sliders',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'slider.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                    ],
                ],
                [
                    'menu_name' => 'System Settings',
                    'icon' => "<i class='fa fa-windows'></i>",
                    'route_name' => null,
                    'params' => null,
                    'show_dasboard' => 0,
                    'children' => [
                        [
                            'menu_name' => 'User Role',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'role.index',
                            'params' => null,
                            'show_dasboard' => 1,
                        ],
                        [
                            'menu_name' => 'Backend Menu List',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'menu.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Frontend Menu List',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'frontMenu.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Site Settings',
                            'icon' => "<i class='fa fa-cog text-aqua'></i>",
                            'route_name' => 'siteSetting.show',
                            'params' => null,
                            'show_dasboard' => 1,
                        ],
                        [
                            'menu_name' => 'Activity Log',
                            'icon' => "<i class='fa fa-history'></i>",
                            'route_name' => 'activityLog.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'XML Data',
                            'icon' => "<i class='fa fa-list text-aqua'></i>",
                            'route_name' => 'searchData.index',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                        [
                            'menu_name' => 'Module Create',
                            'icon' => "<i class='fa fa-folder text-aqua'></i>",
                            'route_name' => 'module.create',
                            'params' => null,
                            'show_dasboard' => 0,
                        ],
                    ],
                ],
            ];

            $this->insertMenuItems($menus, null);
            // $this->seedWebsiteMenus();
        }
    }

    /**
     * Insert seed data into backend menu.
     *
     * @param [type] $menuItems
     * @param [type] $parentId
     * @return void
     */
    private function insertMenuItems($menuItems, $parentId)
    {
        if (is_array($menuItems) && count($menuItems) > 0) {
            foreach ($menuItems as $key => $item) {
                $children = $item['children'] ?? [];
                unset($item['children']);

                $item['sorting'] = $key;
                $item['parent_id'] = $parentId;
                $id = DB::table('menus')->insertGetId($item);

                if (is_array($children) && count($children) > 0) {
                    $this->insertMenuItems($children, $id);
                }
            }
        }
    }

    /**
     * Insert front seed menu.
     *
     * @return void
     */
    private function seedWebsiteMenus()
    {
        DB::table('front_menus')->insert([
            [
                'id' => 1,
                'parent_id' => null,
                'content_id' => null,
                'menu_look_type' => 'normal',
                'type' => 'content',
                'url' => '#',
                'position' => 'header',
                'title' => 'About us',
                'slug' => 'about-us',
                'params' => null,
                'status' => 'active',
                'sorting' => 1,
                'created_at' => '2023-09-06 23:06:22',
                'updated_at' => '2023-09-06 23:06:22',
            ],
            [
                'id' => 2,
                'parent_id' => null,
                'content_id' => null,
                'menu_look_type' => 'normal',
                'type' => 'internal_link',
                'url' => 'dev.albums.index',
                'position' => 'header',
                'title' => 'Albums',
                'slug' => 'albums',
                'params' => null,
                'status' => 'active',
                'sorting' => 5,
                'created_at' => '2023-09-07 00:14:27',
                'updated_at' => '2023-09-07 00:14:27',
            ],
            [
                'id' => 3,
                'parent_id' => null,
                'content_id' => null,
                'menu_look_type' => 'normal',
                'type' => 'internal_link',
                'url' => 'dev.news.index',
                'position' => 'header',
                'title' => 'News',
                'slug' => 'news',
                'params' => null,
                'status' => 'active',
                'sorting' => 6,
                'created_at' => '2023-09-07 00:14:52',
                'updated_at' => '2023-09-07 00:14:52',
            ],
            [
                'id' => 4,
                'parent_id' => null,
                'content_id' => null,
                'menu_look_type' => 'normal',
                'type' => 'internal_link',
                'url' => 'dev.event.index',
                'position' => 'header',
                'title' => 'Events',
                'slug' => 'events',
                'params' => null,
                'status' => 'active',
                'sorting' => 7,
                'created_at' => '2023-09-07 00:15:17',
                'updated_at' => '2023-09-07 00:15:17',
            ],
            [
                'id' => 5,
                'parent_id' => null,
                'content_id' => null,
                'menu_look_type' => 'normal',
                'type' => 'internal_link',
                'url' => 'dev.notice.index',
                'position' => 'header',
                'title' => 'Notice',
                'slug' => 'notice',
                'params' => null,
                'status' => 'active',
                'sorting' => 8,
                'created_at' => '2023-09-07 00:15:51',
                'updated_at' => '2023-09-07 00:15:51',
            ],
            [
                'id' => 6,
                'parent_id' => null,
                'content_id' => null,
                'menu_look_type' => 'normal',
                'type' => 'content',
                'url' => '#',
                'position' => 'footer_bottom',
                'title' => 'About us',
                'slug' => 'about-us',
                'params' => null,
                'status' => 'active',
                'sorting' => 1,
                'created_at' => '2023-09-06 23:06:22',
                'updated_at' => '2023-09-06 23:06:22',
            ],

            [
                'id' => 7,
                'parent_id' => null,
                'content_id' => null,
                'menu_look_type' => 'normal',
                'type' => 'outside_website',
                'url' => url('/qpanel'),
                'position' => 'header',
                'title' => 'NSL Admin',
                'slug' => '',
                'params' => null,
                'status' => 'active',
                'sorting' => 99,
                'created_at' => '2023-09-06 23:06:22',
                'updated_at' => '2023-09-06 23:06:22',
            ],
        ]);
    }
}
