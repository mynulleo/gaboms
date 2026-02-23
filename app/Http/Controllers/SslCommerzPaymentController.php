<?php

namespace App\Http\Controllers;

use URL;
use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Library\SslCommerz\SslCommerzNotification;
use App\Traits\PaymentTrait;

class SslCommerzPaymentController extends Controller
{
    use PaymentTrait;

    public function success(Request $request)
    {
        $tran_id = $request->input('tran_id');
        $amount = $request->input('amount');
        $currency = $request->input('currency');
        $bank_trn_id = $request->input('bank_tran_id');
        $card_type = $request->input('card_type');

        $sslc = new SslCommerzNotification();

        #Check order status in order tabel against the transaction id or order id.
        $invArr = Invoice::where('invoice_no', $tran_id)->first();
        if (!empty($invArr)) {
            if ($request->status == 'VALID') {
                $validation = $sslc->orderValidate($tran_id, $amount, $currency, $request->all());

                if ($validation == TRUE) {
                    /*
                    That means IPN did not work or IPN URL was not set in your merchant panel. Here you need to update order status
                    in order table as Processing or Complete.
                    Here you can also sent sms or email for successfull transaction to customer
                     */
                    Invoice::paymentSuccess($request);
                } else {
                    /*
                    That means IPN did not work or IPN URL was not set in your merchant panel and Transation validation failed.
                    Here you need to update order status as Failed in order table.
                     */
                    $invArr->update(['status' => 'failed']);
                }
            }
        }
        return view(
            themeBlade('pages.ssl.success'),
            [
                'invoice_no' => $tran_id,
                'amount' => $amount,
                'trnxid' => $bank_trn_id,
                'card_type' => $card_type
            ]
        );
    }

    public function fail(Request $request)
    {
        $invArr = Invoice::where('invoice_no', $request->tran_id)->first();

        if (!empty($invArr)) {
            if ($invArr->payment_status == 'Pending') {
                $invArr->update(['payment_status' => 'Failed']);
            }
        }
        $payment = $this->payment($request->tran_id);

        return view(
            themeBlade('pages.ssl.fail', ['payment', $payment])
        );
    }

    public function cancel(Request $request)
    {
        $invArr = Invoice::where('invoice_no', $request->input('tran_id'))->first();
        if (!empty($invArr)) {
            if ($invArr->payment_status == 'Pending') {
                $invArr->update(['payment_status' => 'Canceled']);
                return $this->redirectUrl('cancel');
            } else if ($invArr->payment_status == 'Processing' || $invArr->payment_status == 'success') {
                return $this->redirectUrl('success');
            } else {
                return response()->json("Transaction is Invalid");
                return $this->redirectUrl('fail');
            }
        } else {
            return $this->redirectUrl('fail');
        }
    }

    public function ipn(Request $request)
    {
        #Received all the payement information from the gateway
        if ($request->input('tran_id')) #Check transation id is posted or not.
        {

            $tran_id = $request->input('tran_id');

            #Check order status in order tabel against the transaction id or order id.
            $invArr = Invoice::where('invoice_no', $tran_id)->first();
            if (!empty($invArr)) {
                if ($invArr->payment_status != 'success') {
                    $sslc = new SslCommerzNotification();
                    $validation = $sslc->orderValidate($tran_id, $invArr->amount, "BDT", $request->all());
                    if ($validation == TRUE) {
                        /*
                        That means IPN worked. Here you need to update order status
                        in order table as Processing or Complete.
                        Here you can also sent sms or email for successful transaction to customer
                         */
                        Invoice::paymentSuccess($request);

                        return response()->json("Transaction is successfully Completed");
                    } else {
                        /*
                        That means IPN worked, but Transation validation failed.
                        Here you need to update order status as Failed in order table.
                         */
                        $invArr->update(['status' => 'failed']);
                        return response()->json("validation Fail");
                    }
                } else if ($invArr->payment_status == 'Processing' || $invArr->payment_status == 'success') {

                    #That means Order status already updated. No need to udate database.
                    return response()->json("Transaction is already successfully Completed");
                } else {
                    #That means something wrong happened. You can redirect customer to your product page.
                    return response()->json("Invalid Transaction");
                }
            } else {
                echo "Invalid Invoice";
            }
        } else {
            return response()->json("Invalid Data");
        }
    }

    // redirect url
    public function redirectUrl($type)
    {
        $permanent = "";
        if ($type == 'success') {
            $url = URL::to("/") . '/admin/dashboard';
        } else if ($type == 'fail') {
            $url = URL::to("/") . '/admin/invoice/payment';
        } else if ($type == 'cancel') {
            $url = URL::to("/") . '//admin/invoice/payment';
        }
        header('Location: ' . $url, true, $permanent ? 301 : 302);

        exit();
    }
}
