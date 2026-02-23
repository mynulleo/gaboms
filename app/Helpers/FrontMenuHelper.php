<?php

namespace App\Helpers;

use Illuminate\Support\Str;
use App\Models\Website\FrontMenu;

class FrontMenuHelper
{
    private FrontMenu $frontMenu;
    private static $instance;

    private function __construct() {}

    /**
     * Self class instance by Singleton pattern
     * 
     * @return self
     */
    public static function create(FrontMenu $frontMenu): self
    {
        if (!static::$instance) {
            static::$instance = new self;
        }

        static::$instance->frontMenu = $frontMenu;

        return static::$instance;
    }

    /**
     * Generate URL
     * 
     * @return string
     */
    public function url(): string
    {
        $url = 'javascript:void(0)';
        if ($this->frontMenu->type == 'content' && $this->frontMenu->content) {
            $url = route('theme.content.show', $this->frontMenu->content?->slug);
        } elseif ($this->frontMenu->type == 'outside_website' && !isset($this->frontMenu->params)) {
            $url = $this->frontMenu->url;
        } elseif ($this->frontMenu->type == 'internal_link') {
            $url = route($this->frontMenu->url, $this->frontMenu->params ?? '');
        } else {
            $url = $this->frontMenu->url;
        }

        return $url;
    }

    /**
     * Exact URL match
     * 
     * @return bool
     */
    public function exactUrlMatch(): bool
    {
        return url()->current() == $this->url();
    }

    /**
     * List/Index route match
     * 
     * @return bool
     */
    public function listRouteMatch(): bool
    {
        $currentRouteName = request()->route()->getName();
        $indexRouteName = Str::beforeLast($currentRouteName, '.') . '.index';

        return $indexRouteName == $this->frontMenu->url;
    }

    /**
     * Parent route match
     * 
     * @return bool
     */
    public function parentRouteMatch(): bool
    {
        if ($this->frontMenu->allChildrenMenus->isNotEmpty()) {
            foreach ($this->frontMenu->allChildrenMenus as $childMenu) {
                if (static::create($childMenu)->isActive()) {
                    return true;
                }
            }
        }

        return false;
    }


    /**
     * Determine a url is active or not
     * 
     * @return bool
     */
    public function isActive(): bool
    {
        return $this->exactUrlMatch() || $this->listRouteMatch() || $this->parentRouteMatch();
    }
}
