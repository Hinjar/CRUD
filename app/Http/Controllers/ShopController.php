<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\categories;
use App\Models\products;

class ShopController extends Controller
{
    public function getAllCategories(){
        $category = categories::all();
        return response()->json($category, 200);
    }

    public function addCategory(Request $request){
        $categories = categories::insert([
        'name' => $request->name
        ]);
        return response()->json($categories, 200);
    }

    public function getAllProducts(){
        $products = products::all();
        return response()->json($products, 200);
    }

    public function addProduct(Request $request){
          $path = $request->file('photo')->store('product-images', 'public');

         $newProduct = products::insert([
            'name'=> $request->name,
            'description' => $request->description,
            'price'=> $request->price,
            'quantity'=> $request->quantity,
            'photo'=>$path,
            'category_id'=> $request->category_id
         ]);
         return response()->json($newProduct, 200);

    }

    public function getProductToId(int $id){
        $product = products::select('*')->where('product_id', $id)->first();
        return response()->json($product, 200);
    }

    public function getCategoryToId(int $id){
        $category = categories::select('*')->where('category_id', $id)->first();
        return response()->json($category, 200);
    }

    public function updateProductInfo(Request $request){
        $path = $request->photo;
        if($request->file('photo')){
        $path = $request->file('photo')->store('product-images', 'public');
        }
        $product = products::where('product_id', $request->product_id)->update([
                    'name'=> $request->name,
                    'description' => $request->description,
                    'price'=> $request->price,
                    'quantity'=> $request->quantity,
                    'photo'=>$path,
                    'category_id'=> $request->category_id
        ]);

        return response()->json( $product, 200);
    }

    public function updateCategoryInfo(Request $request){
        $product = categories::where('category_id', $request->category_id)->update([
                    'name' => $request->name,
        ]);

        return response()->json('Success', 200);
    }

    public function deleteCategory(int $id){
        categories::where('category_id', $id)->delete();
        $product = products::where('category_id', $id)->delete();

        return response()->json('$product', 204);
    }

    public function deleteProduct(int $id){
        $product = products::where('product_id', $id)->delete();

        $products = products::all();
        return response()->json($products, 200);
    }

    public function getProduct(int $id){
            $product = products::where('product_id', $id)->delete();

            return response()->json('null', 204);
    }

}
