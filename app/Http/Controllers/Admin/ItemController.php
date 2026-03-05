<?php

/**
 * @Quill Information Technology
 */

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Item;
use Illuminate\Http\Request;
use App\Http\Resources\Resource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Base\BaseController;
use App\Models\ItemStockSummary;
use App\Models\StockTransaction;

class ItemController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query  = Item::with('category:id,title', 'unit:id,title')->latest();

        if ($request->field_name && $request->value) {
            $query->whereLike($request->field_name, $request->value);
        }

        if (!empty($request->category_id)) {
            $query->where('category_id', $request->category_id);
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
                $data['barcode'] = Item::generateBarcode();
                // push the insert text
                if (!empty($request->file("image"))) {
                    $data["image"] = $this->upload($request->image, "item");
                }
                $res = Item::create($data);
                if ($res->opening_qty > 0) {
                    $stockitemdata = [
                        'item_id' => $res->id,
                        'transaction_date' => date('Y-m-d'),
                        'transaction_type' => 'Opening',
                        'qty_in' => $res->opening_qty,
                        'qty_out' => 0,
                        'status' => 'Active',
                    ];
                    // create stock transaction for opening stock
                    StockTransaction::create($stockitemdata);
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
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Item $item)
    {
        if ($request->format() == 'html') {
            return view('layouts.backend_app');
        }
        $item->load('category:id,title', 'unit:id,title');
        return $item;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        return view('layouts.backend_app');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        if ($this->validateCheck($request, $item->id)) {
            try {
                $data = $request->all();
                // push the update text
                if (!empty($request->file("image"))) {
                    $oldFile = $this->oldFile($item->image);
                    Storage::delete($oldFile);
                    $data["image"] = $this->upload($request->image, "item");
                }
                $item->fill($data)->save();

                return $this->responseReturn("update", $item);
            } catch (Exception $ex) {
                return response()->json(['exception' => $ex->errorInfo ?? $ex->getMessage()], 422);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        // delete
        app("deleteAction")->arrayImages($item->image);
        $old = $this->oldFile($item->image);
        if (Storage::disk("public")->exists($old)) {
            Storage::delete($old);
        }


        $res = $item->delete();
        return $this->responseReturn("delete", $res);
    }

    public function getItemStock($item_id)
    {
        $stock = 0;
        $res = ItemStockSummary::select(['current_stock'])->where('item_id', $item_id)->first();
        if ($res) {
            $stock = $res->current_stock;
        }
        return $stock;
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
