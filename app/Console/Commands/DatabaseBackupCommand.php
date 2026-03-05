<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DatabaseBackupCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:backup {--destroy : Destroy the previous backup}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create backup for database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $date = now()->format('d.M.Y.H.I.A');
        $dbName = env('DB_DATABASE');
        $serverAddress = gethostbyname(gethostname());

        $backupFileName = "backup_of_{$dbName}_on_{$date}_at_{$serverAddress}_host.sql";
        $backupPath = storage_path('backups/databases');

        if ($this->option('destroy')) {
            if (is_dir($backupPath) && count(glob($backupPath.'/*')) > 0) {
                $this->deleteBackups($backupPath);
                $this->info('Backups have been destroyed.');
            } else {
                $this->info("You don't have any backups to destroy.");
            }

            return;
        }

        if (! is_dir($backupPath)) {
            mkdir($backupPath, 0755, true);
        }

        $backupFullPath = $backupPath.'/'.$backupFileName;

        $command = sprintf(
            'mysqldump -u%s -p%s %s > %s',
            env('DB_USERNAME'),
            escapeshellarg(env('DB_PASSWORD')),
            $dbName,
            $backupFullPath
        );

        exec($command);

        $this->info("Database backed up to: $backupFullPath");
    }

    /**
     * Delete backup files
     *
     * @param [type] $directory
     * @return void
     */
    protected function deleteBackups($directory)
    {
        $files = glob($directory.'/*'); // Get all file names
        foreach ($files as $file) { // Iterate files
            if (is_file($file)) {
                unlink($file); // Delete the file
            }
        }
    }
}
