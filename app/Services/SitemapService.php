<?php

namespace App\Services;

use App\Models\Career;
use App\Models\Client;
use App\Models\Events;
use App\Models\Project;
use App\Models\Service;
use App\Models\Contacts;
use App\Models\System\Menu;
use App\Models\Website\News;
use App\Models\Website\Notice;
use App\Models\Website\Activities;
use App\Models\Website\Gallery\Album;
use App\Models\Website\Content\Content;
use App\Models\Website\FrontMenu;

class SitemapService
{
    /**
     * Generate Sitemap.xml file
     */
    public function generateSitemap(): string
    {
        $data = '<?xml version="1.0" encoding="UTF-8"?>';
        $data .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        // added static URLs to xml file
        $data .= $this->addStaticUrls();

        // added URLs from DB models
        $data .= $this->contentMenuUrlIteration();
        // $data .= $this->newsMenuUrlIteration();
        // $data .= $this->careerMenuUrlIteration();
        // $data .= $this->serviceMenuUrlIteration();
        // $data .= $this->clientMenuUrlIteration();
        // $data .= $this->projectMenuUrlIteration();


        $data .= '</urlset>';

        return $data;
    }


    /**
     * Added static URLs in xml file
     */
    private function addStaticUrls()
    {
        $staticPaths = [
            '/',
            'contact-us',
        ];

        $data = '';
        foreach ($staticPaths as $path) {
            $data .= $this->addUrl(url($path), now());
        }

        return $data;
    }

    /**
     * Added single URL in xml file
     */
    private function addUrl($url, $lastMode)
    {
        $data = '<url>';
        $data .= '<loc>' . $url . '</loc>';
        $data .= '<lastmod>' . gmdate(\DateTime::W3C, strtotime($lastMode ?? now())) . '</lastmod>';
        $data .= '<changefreq>yearly</changefreq>';
        $data .= '<priority>1.0</priority>';
        $data .= '</url>';

        return $data;
    }

    /**
     * All content menu URLs added in xml file
     */
    private function contentMenuUrlIteration()
    {
        $data = '';
        $menus = FrontMenu::whereIn('position', [
            'header',
            'footer_bottom'
        ])
            ->where('status', 'active')
            ->latest()
            ->get(['slug', 'type', 'position', 'url', 'updated_at']);

        foreach ($menus as $menu) {
            if ($menu->type == 'content' && $menu->slug) {
                $data .= $this->addUrl(url('pages/' . $menu->slug), $menu->updated_at);
            }
            if ($menu->type == 'internal_link') {
                $data .= $this->addUrl(url($menu->url), $menu->updated_at);
            }
        }

        return $data;
    }

    private function serviceMenuUrlIteration()
    {
        $data = '';
        $menus = Service::latest()->get(['slug', 'updated_at']);

        foreach ($menus as $menu) {
            if ($menu->slug) {
                $data .= $this->addUrl(url('services/' . $menu->slug), $menu->updated_at);
            }
        }

        return $data;
    }

    private function newsMenuUrlIteration()
    {
        $data = '';
        $menus = News::latest()->get(['slug', 'updated_at']);

        foreach ($menus as $menu) {
            if ($menu->slug) {
                $data .= $this->addUrl(url('news-events/' . $menu->slug), $menu->updated_at);
            }
        }

        return $data;
    }

    private function clientMenuUrlIteration()
    {
        $data = '';
        $menus = Client::latest()->get(['slug', 'updated_at']);

        foreach ($menus as $menu) {
            if ($menu->slug) {
                $data .= $this->addUrl(url('clients/' . $menu->slug), $menu->updated_at);
            }
        }

        return $data;
    }

    private function careerMenuUrlIteration()
    {
        $data = '';
        $menus = Career::latest()->get(['slug', 'updated_at']);

        foreach ($menus as $menu) {
            if ($menu->slug) {
                $data .= $this->addUrl(url('career/' . $menu->slug), $menu->updated_at);
            }
        }

        return $data;
    }

    private function projectMenuUrlIteration()
    {
        $data = '';
        $menus = Project::latest()->get(['slug', 'updated_at']);

        foreach ($menus as $menu) {
            if ($menu->slug) {
                $data .= $this->addUrl(url('projects/' . $menu->slug), $menu->updated_at);
            }
        }

        return $data;
    }
}
