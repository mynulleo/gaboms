<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Global return the response
     *
     * @param [type] $type
     * @param [type] $res
     * @return json
     */
    public function responseReturn($type, $res = null, $slug = null, $extraUpdate = false, $msg = null)
    {
        if (!empty($slug)) {
            return response()->json([
                'slug'    => $slug,
                'type'    => ($res || $extraUpdate) ? 'success' : 'warning',
                'message' => ($res || $extraUpdate)
                    ? 'Update Successfully!'
                    : 'No data updated',
            ], 200);
        }

        if ($type === 'create') {
            return response()->json([
                'type'    => $res ? 'success' : 'error',
                'message' => $res ? 'Save Successfully!' : 'Save Unsuccessful!',
            ], $res ? 201 : 422);
        }

        if ($type === 'update') {
            if ($res && ($res->wasChanged() || $extraUpdate)) {
                return response()->json([
                    'type'    => 'success',
                    'message' => 'Update Successfully!',
                ], 201);
            }

            return response()->json([
                'type'    => 'warning',
                'message' => 'No data updated',
            ], 203);
        }

        if ($type === 'success') {
            return response()->json([
                'type'    => 'warning',
                'message' => $msg,
            ], 201);
        }

        if ($type === 'warning') {
            $wmsg = 'No data updated';
            if ($msg) {
                $wmsg = $msg;
            }
            return response()->json([
                'type'    => 'warning',
                'message' => $wmsg,
            ], 203);
        }

        if ($type === 'delete') {
            return response()->json([
                'type'    => $res ? 'success' : 'error',
                'message' => $res ? 'Delete Successfully!' : 'Delete Unsuccessful!',
            ], $res ? 201 : 422);
        }

        if ($type === 'error') {
            $emsg = $res ? 'Delete Successfully!' : 'Delete Unsuccessful!';
            if ($msg) {
                $emsg = $msg;
            }
            return response()->json([
                'type'    => 'error',
                'message' => $emsg
            ], $res ? 201 : 422);
        }

        // fallback
        return response()->json([
            'type'    => 'error',
            'message' => 'Something went wrong',
        ], 500);
    }
}
