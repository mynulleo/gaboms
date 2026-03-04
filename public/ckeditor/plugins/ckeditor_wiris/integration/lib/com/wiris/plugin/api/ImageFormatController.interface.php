<?php

interface com_wiris_plugin_api_ImageFormatController
{
    public function scalateMetrics($dpi, $metrics);

    public function getMetrics($bytes, &$output);

    public function getContentType();
}
