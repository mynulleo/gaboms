<?php

namespace App\Helpers;

use App\Models\Website\FrontMenu;
use Illuminate\Database\Eloquent\Collection;

class BreadcrumbHelper
{
    private $frontMenus;
    private array $breadcrumbs = [];

    public function __construct()
    {
        // Init frontend menus
        $this->frontMenus = FrontMenu::getAllMenu();
    }

    /**
     * Get all breadcrumb
     * 
     * @param Illuminate\Database\Eloquent\Collection | null $frontMenus
     * 
     * @return array
     */
    public function getAllBreadcrumb(?Collection $frontMenus = null): array
    {
        // All frontend menu
        $menus = $frontMenus ?? $this->frontMenus;

        foreach ($menus as $menu) {
            if (themeMenu($menu)->isActive()) {
                // Add breadcrumb
                $this->breadcrumbs[] = [
                    'title' => $menu->title,
                    'url' => themeMenu($menu)->url(),
                ];

                if ($menu->allChildrenMenus->isNotEmpty()) {
                    // Recursive child menu breadcrumb
                    $this->getAllBreadcrumb($menu->allChildrenMenus);
                }

                // Last breadcrumb
                if (themeMenu($menu)->exactUrlMatch()) {
                    // All breadcrumb
                    return $this->breadcrumbs;
                }
            }
        }

        // All breadcrumb
        return $this->breadcrumbs;
    }
}
