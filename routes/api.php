<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('v1/categories/list', 'App\Http\Controllers\ShopController@getAllCategories');

Route::get('v1/products/list', 'App\Http\Controllers\ShopController@getAllProducts');

Route::get('v1/products/{id}','App\Http\Controllers\ShopController@getProductToId');

Route::get('v1/category/{id}','App\Http\Controllers\ShopController@getCategoryToId');

Route::post('v1/products/new','App\Http\Controllers\ShopController@addProduct');

Route::post('v1/categories/new','App\Http\Controllers\ShopController@addCategory');

Route::put('v1/products/update','App\Http\Controllers\ShopController@updateProductInfo');

Route::put('v1/categories/update','App\Http\Controllers\ShopController@updateCategoryInfo');

Route::delete('v1/products/{id}', 'App\Http\Controllers\ShopController@deleteProduct');

Route::delete('v1/categories/{id}', 'App\Http\Controllers\ShopController@deleteCategory');
