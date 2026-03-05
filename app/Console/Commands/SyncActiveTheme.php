<?php

namespace App\Console\Commands;

use App\Services\ThemeService;
use Illuminate\Console\Command;

class SyncActiveTheme extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync-active-theme';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync active theme';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $themeService = new ThemeService;
        $themeService->syncTheme();

        $this->info("Successfully sync active theme.\nPlease, build your assets.\nThank you!");
    }
}
