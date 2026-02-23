<?php

namespace App\Action\Util;

use Illuminate\Support\Facades\Storage;

class DeleteAction
{
    public function execute($type, $image)
    {

    }

    /**
     * Delete images specified in the $image array.
     *
     * @param  mixed  $image The image or array of images to delete.
     * @return bool
     */
    public function arrayImages($image)
    {

        if (empty($image)) {
            return;
        }

        $images = is_array($image) ? $image : (is_string($image) ? json_decode($image, true) : []);

        if (is_array($images)) {
            foreach ($images as $item) {
                if (Storage::exists($item)) {
                    Storage::delete($item);
                }
            }
        }

        return true;
    }
}
