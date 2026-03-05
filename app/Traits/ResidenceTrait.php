<?php

namespace App\Traits;

use App\Models\Residence;
use Illuminate\Http\Request;
use App\Models\ResidenceUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

trait ResidenceTrait
{
    use SMSTrait;

    public function approval(Request $request)
    {
        $plainPassword = '';
        $data = $request->all();
        if ($data) {
            $residenceid = $data['residence_id'];
            $db_host = $data['db_host'];
            $db_name = $data['db_name'];
            $db_user = $data['db_user'];
            $db_password = $data['db_password'];

            $residence = Residence::with(['package:id,free_month', 'residence_users'])->where('id', $residenceid)->first();

            if ($residence) {
                $residence->db_host = $db_host;
                $residence->db_name = $db_name;
                $residence->db_user = $db_user;
                $residence->db_password = $db_password;
                $residence->expired_date = $this->getExpiredDate($residence->package, $residence->payment_period);
                $residence->status = 'active';
                $residence->update();

                // Database create & import database
                $db = $this->createResidenceDatabase($residence);

                $residenceuserscount = $residence->residence_users->count();

                if ($residenceuserscount == 0) {
                    // Generate strong random password
                    $plainPassword = $this->generateStrongPassword(6);

                    $residenceuser = ResidenceUser::create([
                        'residence_id' => $residenceid,
                        'role_id'      => 1,  // সব user এর role 1 হবে
                        'full_name'    => $residence->owner_name ?? 'Admin User',
                        'email'        => $residence->email ?? 'admin' . $residence->id . '@example.com',
                        'password'     => Hash::make($plainPassword),
                        'status'       => 'active'
                    ]);

                    if ($residenceuser) {
                        $mobileno = $residence->mobile;
                        $message = 'Dear ' . $residence->owner_name . ',  We are pleased to inform you that your Rent Management Software at BD Residence is now ready. Login credentials have been sent to your email';

                        $this->mailToUser($residence, $plainPassword);
                        $this->sendSms($mobileno, $message);
                    }
                }
            }
        }

        // return with generated password
        return response()->json([
            'message'    => 'Residence approved successfully and user created.',
            'email' => $residence->email,
            'password'   => $plainPassword, // generated password (send via email ideally)
        ]);
    }

    public function mailToUser($residence, $plainpassword)
    {
        $url = 'https://aptms.bdresidence.com';
        Mail::send(
            themeBlade('mail.registration-approval'),
            [
                'residence' => $residence->residence_name,
                'name'      => $residence->owner_name,
                'email'     => $residence->email,
                'password'  => $plainpassword,
                'url'       => $url,
                'expired_date'  => $residence->expired_date
            ],
            function ($message) use ($residence) {
                $message->to($residence->email)
                    ->subject('BD Residence এ আপনার রেজিস্ট্রেশন সফল হয়েছে!');
            }
        );
    }

    private function generateStrongPassword($length = 12)
    {
        $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
        return substr(str_shuffle(str_repeat($chars, $length)), 0, $length);
    }

    public function getExpiredDate($package, $period)
    {
        $free_month = 0;
        if ($package) {
            $free_month = (int) $package->free_month;
        }

        $today = now(); // today’s date

        if ($period === 'monthly') {
            // 1 month + free_month
            $expiry = $today->copy()->addMonths(1 + $free_month);
        } elseif ($period === 'yearly') {
            // 1 year + free_month
            $expiry = $today->copy()->addYears(1)->addMonths($free_month);
        } else {
            // fallback: today
            $expiry = $today;
        }

        return $expiry->format('Y-m-d');
    }

    public function createResidenceDatabase($residence)
    {
        if (!$residence) {
            return false;
        }

        $db_host     = $residence->db_host;
        $db_name     = $residence->db_name;
        $db_user     = $residence->db_user;
        $db_password = $residence->db_password;

        if (empty($db_name) || empty($db_user)) {
            return false;
        }

        try {
            // 1. প্রথমে ডাটাবেস তৈরি
            $pdo = new \PDO("mysql:host={$db_host}", $db_user, $db_password);
            $pdo->exec("CREATE DATABASE IF NOT EXISTS `{$db_name}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;");

            // 2. নতুন ডাটাবেসে কানেকশন তৈরি
            $newDb = new \PDO("mysql:host={$db_host};dbname={$db_name}", $db_user, $db_password);

            // 3. Category Residence (1) hoy
            if ($residence->category_id == 1) {
                $sqlFile = base_path('database/aptms_final_db.sql'); // আপনার ফাইলের path
            }

            // 3. Category Business  (2) hoy
            if ($residence->category_id == 2) {
                $sqlFile = base_path('database/mobis_final_db.sql'); // আপনার ফাইলের path
            }

            $sql     = file_get_contents($sqlFile);


            // 4. একসাথে সব query রান করানো
            $newDb->exec($sql);

            return true;
        } catch (\Exception $e) {
            Log::error("Database creation/import failed: " . $e->getMessage());
            return false;
        }
    }

    public function block(Request $request)
    {
        $data = $request->all();
        if ($data) {
            $residence_id = $data['residence_id'];
            $residence = Residence::where('id', $residence_id)->first();
            if ($residence) {
                $residence->block = 1;
                $residence->update();
            }
        }
        return true;
    }

    public function unblock(Request $request)
    {
        $data = $request->all();
        if ($data) {
            $residence_id = $data['residence_id'];
            $residence = Residence::where('id', $residence_id)->first();
            if ($residence) {
                $residence->block = 0;
                $residence->update();
            }
        }
        return true;
    }

    public function updatedb(Request $request)
    {
        $data = $request->all();
        if ($data) {
            $residence_id = $data['residence_id'];
            $residence = Residence::where('id', $residence_id)->first();
            if ($residence) {
                $residence->db_host = $data['db_host'];
                $residence->db_name = $data['db_name'];
                $residence->db_user = $data['db_user'];
                $residence->db_password = $data['db_password'];
                $residence->update();
            }
        }
        return true;
    }

    public function newuser(Request $request)
    {
        // ✅ Validation
        $validated = $request->validate([
            'residence_id' => 'required|exists:residences,id',
            'role_id'      => 'required', // 1=Owner, 2=Accounts
            'name'         => 'required|string|max:255',
            'email'        => 'required|email|unique:residence_users,email',
            'password'     => 'required|string|min:6',
        ]);

        // ✅ User create
        $user = new ResidenceUser();
        $user->residence_id = $validated['residence_id'];
        $user->role_id      = $validated['role_id'];
        $user->full_name    = $validated['name'];
        $user->email        = $validated['email'];   // username = email
        $user->password     = Hash::make($validated['password']); // password hash
        $user->status       = 'active'; // password hash
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'New user created successfully',
            'data'    => $user
        ]);
    }

    public function changepass(Request $request)
    {
        // ✅ Validation
        $validated = $request->validate([
            'id'             => 'required',
            'residence_id'   => 'required|exists:residences,id',
            'password'       => 'required|string|min:6'
        ]);

        // ✅ User খোঁজা
        $user = ResidenceUser::where('id', $validated['id'])
            ->where('residence_id', $validated['residence_id'])
            ->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found for this residence',
            ], 404);
        }

        // ✅ Password update
        $user->password = Hash::make($validated['password']);
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Password updated successfully',
        ]);
    }
}
