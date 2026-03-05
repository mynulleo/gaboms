<?php

namespace App\Http\Controllers\Admin;

use App\Models\Faq;
use App\Models\Page;
use App\Models\Events;
use App\Models\PageSeo;
use App\Models\Contacts;
use App\Models\Website\News;
use App\Helpers\GlobalHelper;
use App\Models\Website\Notice;
use Illuminate\Support\Carbon;
use Spatie\ArrayToXml\ArrayToXml;
use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Career;
use App\Models\Project;
use App\Models\Service;
use App\Models\Website\Gallery\Album;
use App\Models\Website\Content\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class XMLController extends Controller
{
    public function index()
    {
        $items = [
            ['id' => 1, 'name' => 'John Doe', 'email' => 'john.doe@example.com'],
            ['id' => 2, 'name' => 'Jane Smith', 'email' => 'jane.smith@example.com'],
            ['id' => 3, 'name' => 'Alice Johnson', 'email' => 'alice.johnson@example.com'],
        ];

        // dd($items);
        return response()->json($items);
    }

    public function generateXmlFile()
    {
        try {
            function isUrlBroken($url)
            {
                $ch = curl_init($url);
                curl_setopt($ch, CURLOPT_NOBODY, true);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_TIMEOUT, 5);
                curl_exec($ch);
                $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                curl_close($ch);
                return $httpCode >= 400;
            }
            // Handle static pages without slugs
            $data = [
                'home' => [
                    'page' => 'Home',
                    'url' => url('/'),
                    'admin_url' => '',
                    'meta_tag_indicator' => GlobalHelper::get_page_seo('Home')->meta_tag_indicator ?? '',
                    'broken_url' => isUrlBroken(url('/')),
                    'modified' => GlobalHelper::get_page_seo('Home')->updated_at ?? '',
                ],
                'news' => [
                    'page' => 'News',
                    'url' => url('/news-events'),
                    'page_type' => 'module',
                    'admin_url' => url('admin/news'),
                    'meta_tag_indicator' => GlobalHelper::get_page_seo('News')->meta_tag_indicator ?? '',
                    'broken_url' => isUrlBroken(url('/news-events')),
                    'modified' => GlobalHelper::get_page_seo('News')->updated_at ?? '',
                ],
                'services' => [
                    'page' => 'Services',
                    'url' => url('/services'),
                    'page_type' => 'module',
                    'admin_url' => url('admin/service'),
                    'meta_tag_indicator' => GlobalHelper::get_page_seo('Services')->meta_tag_indicator ?? '',
                    'broken_url' => isUrlBroken(url('/services')),
                    'modified' => GlobalHelper::get_page_seo('Services')->updated_at ?? '',
                ],
                'clients' => [
                    'page' => 'Clients',
                    'url' => url('/clients'),
                    'page_type' => 'module',
                    'admin_url' => url('admin/client'),
                    'meta_tag_indicator' => GlobalHelper::get_page_seo('Client')->meta_tag_indicator ?? '',
                    'broken_url' => isUrlBroken(url('/clients')),
                    'modified' => GlobalHelper::get_page_seo('Client')->updated_at ?? '',
                ],
                'career' => [
                    'page' => 'Career',
                    'url' => url('/career'),
                    'page_type' => 'module',
                    'admin_url' => url('admin/career'),
                    'meta_tag_indicator' => GlobalHelper::get_page_seo('Career')->meta_tag_indicator ?? '',
                    'broken_url' => isUrlBroken(url('/career')),
                    'modified' => GlobalHelper::get_page_seo('Career')->updated_at ?? '',
                ],
                'contact' => [
                    'page' => 'Contact',
                    'url' => url('/contact-us'),
                    'page_type' => 'module',
                    'admin_url' => url('admin/contacts'),
                    'meta_tag_indicator' => GlobalHelper::get_page_seo('Contact')->meta_tag_indicator ?? '',
                    'broken_url' => isUrlBroken(url('/contact-us')),
                    'modified' => GlobalHelper::get_page_seo('Contact')->updated_at ?? '',
                ],

            ];


            $contents = Content::where('status', 'active')->get();
            foreach ($contents as $key => $content) {
                if ($content->slug) {
                    $data['contents_' . $key] = [
                        'page' => $content->title,
                        'url' => url('pages/' . $content->slug),
                        'page_type' => 'content',
                        'admin_url' => url('admin/content/' . $content->slug . '/edit'),
                        'meta_tag_indicator' => $content->meta_tag_indicator,
                        'broken_url' => isUrlBroken(url('pages/' . $content->slug)),
                        'modified' => $content->updated_at,
                    ];
                }
            }

            $newss = News::where('status', 'active')->get();
            foreach ($newss as $key => $news) {
                if ($news->slug) {
                    $data['news_' . $key] = [
                        'page' => $news->title,
                        'url' => url('news-events/' . $news->slug),
                        'page_type' => 'module',
                        'admin_url' => url('admin/news/' . $news->id . '/edit'),
                        'meta_tag_indicator' => $news->meta_tag_indicator,
                        'broken_url' => isUrlBroken(url('news-events/' . $news->slug)), // boolean value
                        'modified' => $news->updated_at,
                    ];
                }
            }


            $services = Service::where('status', 'active')->get();
            foreach ($services as $key => $service) {
                if ($service->slug) {
                    $data['service_' . $key] = [
                        'page' => $service->title,
                        'url' => url('services/' . $service->slug),
                        'page_type' => 'module',
                        'admin_url' => url('admin/service/' . $service->id . '/edit'),
                        'meta_tag_indicator' => $service->meta_tag_indicator,
                        'broken_url' => isUrlBroken(url('services/' . $service->slug)), // boolean value
                        'modified' => $service->updated_at,
                    ];
                }
            }

            $clients = Client::where('status', 'active')->get();
            foreach ($clients as $key => $client) {
                if ($client->slug) {
                    $data['client_' . $key] = [
                        'page' => $client->name,
                        'url' => url('clients/' . $client->slug),
                        'page_type' => 'module',
                        'admin_url' => url('admin/client/' . $client->id . '/edit'),
                        'meta_tag_indicator' => $client->meta_tag_indicator,
                        'broken_url' => isUrlBroken(url('clients/' . $client->slug)), // boolean value
                        'modified' => $client->updated_at,
                    ];
                }
            }

            $careers = Career::where('status', 'active')->get();
            foreach ($careers as $key => $career) {
                if ($career->slug) {
                    $data['career_' . $key] = [
                        'page' => $career->title,
                        'url' => url('career/' . $career->slug),
                        'page_type' => 'module',
                        'admin_url' => url('admin/career/' . $career->id . '/edit'),
                        'meta_tag_indicator' => $career->meta_tag_indicator,
                        'broken_url' => isUrlBroken(url('career/' . $career->slug)), // boolean value
                        'modified' => $career->updated_at,
                    ];
                }
            }

            $projects = Project::where('status', 'active')->get();
            foreach ($projects as $key => $project) {
                if ($project->slug) {
                    $data['project_' . $key] = [
                        'page' => $project->title,
                        'url' => url('project/' . $project->slug),
                        'page_type' => 'module',
                        'admin_url' => url('admin/project/' . $project->id . '/edit'),
                        'meta_tag_indicator' => $project->meta_tag_indicator,
                        'broken_url' => isUrlBroken(url('project/' . $project->slug)), // boolean value
                        'modified' => $project->updated_at,
                    ];
                }
            }
            // Convert the array to XML
            $xml = ArrayToXml::convert($data, 'root');

            // Define the file path and name
            $filePath = 'xml-files/data.xml';

            // Save the XML to storage
            Storage::disk('local')->put($filePath, $xml);

            // Return a success message
            return response()->json(['message' => 'XML file created successfully.']);
        } catch (\Exception $e) {
            // Handle error and return a failure response
            return response()->json(['message' => 'An error occurred while creating the XML file.', 'error' => $e->getMessage()], 500);
        }
    }

    public function getXmlFile(Request $request)
    {
        $xmlFilename = 'xml-files/data.xml';
        try {
            $lastModified = Carbon::createFromTimestamp(Storage::disk('local')->lastModified($xmlFilename));

            if ($request->query('force_update') == 1 || now()->diff($lastModified)->days > 7) {
                // update xml file when 7 day increate or want to force update to create last xml file
                $this->generateXmlFile();
            }
        } catch (\Throwable $th) {
            // update xml file because file not exist
            $this->generateXmlFile();
        }

        return response(Storage::disk('local')->get($xmlFilename), 200)->header('Content-Type', 'application/xml');
    }
}
