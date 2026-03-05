<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Base\BaseController;
use App\Http\Resources\Resource;
use App\Models\Account;
use App\Models\FundAccountBalance;
use App\Traits\VoucherTrait;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Storage;

class AccountController extends BaseController
{
    use VoucherTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Account::with('parent:id,account_code,account_name')->latest();

        if (!empty($request->field_name) && !empty($request->value)) {
            $query->whereLike($request->field_name, $request->value);
        }

        if (!empty($request->parent_id)) {
            $query->where('parent_id', $request->parent_id);
        }

        if (!empty($request->account_type)) {
            $query->where('account_type', $request->account_type);
        }

        if (!empty($request->reference_type)) {
            $query->where('reference_type', $request->reference_type);
        }

        if (!empty($request->opening_balance_type)) {
            $query->where('opening_balance_type', $request->opening_balance_type);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->validateCheck($request)) {
            try {
                $data = $request->all();
                $data['account_code'] = Account::generateAccountCode();
                $data['reference_type'] = 'System';
                // push the insert text
                $res = Account::create($data);
                if ($res) {
                    $this->syncOpeningBalanceVoucherForAccount($res);
                }
                return $this->responseReturn("create", $res);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Account $account)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        return $account;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Account $account)
    {
        if ($this->validateCheck($request, $account->id)) {
            try {
                $data = $request->all();
                // push the update text
                $account->fill($data)->save();

                $this->syncOpeningBalanceVoucherForAccount($account);

                return $this->responseReturn("update", $account);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account)
    {
        // delete


        $res = $account->delete();
        return $this->responseReturn("delete", $res);
    }

    public function getFundAccounts()
    {
        return Account::where('is_fund_account', 1)
            ->where('status', 'active')
            ->select(
                'id',
                DB::raw("CONCAT(account_code, ' - ', account_name) as name")
            )
            ->get();
    }

    public function getFundBalance($account_id)
    {
        return FundAccountBalance::where('account_id', $account_id)->first();
    }

    /**
     * Validate form field.
     *
     * @return \Illuminate\Http\Response
     */
    public function validateCheck($request, $id = null)
    {
        return true;
        return $request->validate([
            //ex: 'name' => 'required|email|nullable|date|string|min:0|max:191',
        ], [
            //ex: 'name' => "This name is required" (custom message)
        ]);
    }
}
