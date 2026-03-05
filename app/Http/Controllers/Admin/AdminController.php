<?php

namespace App\Http\Controllers\Admin;

use App\Action\Util\DeleteAction;
use App\Http\Controllers\Base\BaseController;
use App\Http\Resources\Resource;
use App\Models\Admin;
use App\Rules\Base64Image;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class AdminController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Admin::with('role:id,name')
            ->where('id', '!=', 2)
            ->select('id', 'profile', 'name', 'email', 'mobile', 'role_id', 'status', 'created_at')
            ->latest();

        $query->whereLike($request->field_name, $request->value);
        if ($request->status) {
            $query->where('status', $request->status);
        }
        if (!empty($request->role_id)) {
            $query->where('role_id', $request->role_id);
        }
        if ($request->allData) {
            return $query->get();
        } else {
            $datas = $query->paginate($request->pagination);
            return new Resource($datas);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('layouts.backend_app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->validateCheck($request)) {
            try {
                $data = $request->all();
                $profile = $request->profile_base64;
                if (!empty($profile)) {
                    $resizeValue = $data['profile_resize_value'] ?? '600x600,300x300,50x50';
                    // $data['profile'] = cloudflare(file: $profile, folder: 'profile', resizeSize: $resizeValue, base64: true);
                    $profilePaths = cloudflare(file: $profile, folder: 'profile', resizeSize: $resizeValue, base64: true);

                    $data['profile'] = json_encode($profilePaths);
                }
                // dd($data);
                $data['password'] = Hash::make($request->password);
                unset($data['block']);
                $res = Admin::create($data);
                return $this->responseReturn('create', $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Admin $admin)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        if (Auth::guard('admin')->user()->role_id == 1) {
            return Admin::with('role')->find($admin->id);
        }

        return Admin::with('role')->find(Auth::guard('admin')->user()->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $admin)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, Admin $admin)

    public function update(Request $request, DeleteAction $deleteAction, Admin $admin)
    {
        if ($this->validateCheck($request, $admin)) {
            try {
                $data = $request->all();

                $profile = $request->profile_base64;
                if (!empty($profile) && is_base64($profile)) {
                    $resizeValue = $data['profile_resize_value'] ?? '600x600,300x300,50x50';
                    $data['profile'] = cloudflare(file: $profile, folder: 'profile', resizeSize: $resizeValue, base64: true);
                    $deleteAction->arrayImages($admin->profile);
                } else if (!$request->filled('profile_base64')) {
                    $data['profile'] = null;
                } else {
                    $data['profile'] = $admin->profile && $admin->profile != 'null' ? $admin->profile : null;
                }

                $data = [
                    'name' => $request->name,
                    'role_id' => $request->role_id ?? $admin->role_id,
                    'mobile' => $request->mobile,
                    'address' => $request->address,
                    'gender' => $request->gender,
                    'description' => $request->description,
                    'birth_date' => $request->birth_date,
                    'city' => $request->city,
                    'state' => $request->state,
                    'zip_code' => $request->zip_code,
                    'road_number' => $request->road_number,
                    'profile' => $data['profile'],
                    'status' => empty($data['status']) ? 'active' : $data['status'],
                ];

                if ($request->block) {
                    if ($request->block == true) {
                        $data['block'] = 1;
                    }
                    if ($request->block == 'false') {
                        $data['block'] = 0;
                    }
                } else {
                    unset($data['block']);
                }

                if ($request->password) {
                    $data['password'] = Hash::make($request->password);
                }

                $admin->update($data);

                return $this->responseReturn('update', $admin);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $authenticatedId = auth('admin')->user()->id ?? '';

        $admin = Admin::withTrashed()->find($id);
        if ($admin->deleted_at != null) {
            Admin::withTrashed()->where('id', $id)->update(['deleted_at' => null]);
            return $this->responseReturn('delete', false);
        }

        $res = Admin::query()
            ->where('id', '=', $id)
            ->where('id', '!=', $authenticatedId)
            ->delete();

        return $this->responseReturn('delete', false);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function checkOldPassword(Request $request)
    {
        if (empty($request->for_delete)) {
            if (Auth::guard('admin')->user()->role_id == 1 && Auth::guard('admin')->user()->id != $request->id) {
                return response()->json(true);
            }
        }
        if (Auth::guard('admin')->validate(['password' => $request->old_password, 'id' => $request->id])) {
            return response()->json(true);
        } else {
            return response()->json(false);
        }
    }

    /**
     * Password change
     *
     * @return json
     */
    public function passwordChange(Request $request)
    {
        $request->validate([
            'new_password' => 'required|min:6|required_with:confirm_password|same:confirm_password',
            'confirm_password' => 'required|min:6',
            'old_password' => [
                'required',
                function ($attribute, $value, $fail) {
                    if (!Hash::check($value, Auth::user()->password)) {
                        $fail('Old Password didn\'t match');
                    }
                },
            ],
        ]);

        $admin = auth('admin')->user();

        $admin->update([
            'password' => bcrypt($request->new_password),
        ]);

        return response()->json(['message' => 'Password change successfully!!'], 200);
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $model = null)
    {
        return $request->validate([
            'name' => ['required', 'min:3', 'max:60'],
            'email' => ['nullable', Rule::requiredIf(!$model), 'min:3', 'max:100', Rule::unique(Admin::class, 'email')->ignore($model?->id, 'id')],
            'password' => ['nullable', Rule::requiredIf(!$model), Password::min(6), 'max:30'],
            'role_id' => ['nullable', Rule::requiredIf(!$request->is_profile_route), 'numeric', 'min:1'],
            'mobile' => ['nullable', 'numeric', 'digits:11'],
            'status' => ['nullable', Rule::requiredIf(!$request->is_profile_route), 'string', Rule::in(['active', 'deactive'])],
            'profile_resize_value' => ['nullable', 'string'],
            'profile_base64' => ['nullable', 'string', new Base64Image()],

        ], [], [
            'profile_base64' => 'profile',
        ]);
    }

    // user profile page
    public function profileDetails()
    {
        // silent is golden
    }

    // update user profile information
    public function updateProfile(Request $request, DeleteAction $deleteAction)
    {
        $admin = auth('admin')->user();

        if ($this->validateCheck($request, $admin)) {
            try {
                $profile = $request->profile_base64;
                if (!empty($profile) && is_base64($profile)) {
                    $resizeValue = $data['profile_resize_value'] ?? '600x600,300x300,50x50';
                    $profileImage = cloudflare(file: $profile, folder: 'profile', resizeSize: $resizeValue, base64: true);
                    $deleteAction->arrayImages($admin->profile);
                } else {
                    $profileImage = $admin->profile && $admin->profile != 'null' ? $admin->profile : null;
                }

                $data = [
                    'name' => $request->name,
                    'gender' => $request->gender,
                    'mobile' => $request->mobile,
                    'birth_date' => $request->birth_date ? vue_to_server_date($request->birth_date) : null,
                    'description' => $request->description,
                    'address' => $request->address,
                    'city' => $request->city,
                    'state' => $request->state,
                    'zip_code' => $request->zip_code,
                    'profile' => $profileImage,
                ];

                $admin->update($data);

                return $this->responseReturn('update', $admin);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }
}
