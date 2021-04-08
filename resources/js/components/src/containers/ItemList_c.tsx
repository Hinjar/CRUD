import React, {useEffect, useState} from "react";
import ItemList from "../components/item-list/ItemList";
import axios from "axios";
import store from "../redux/store/store";
import {setCategories} from "../redux/actions/category/set-category";
import {ItemRowDto} from "../ts/types/item-list.type";
import ProductItem from "../components/product-item/ProductItem";
import {getCategory} from "../ts/utils/get-category";
import CategoryItem from "../components/category-item/CategoryItem";
import {ProductItemDto} from "../ts/types/product.type";
import {CategoryDto} from "../ts/types/category.type";
import {setProducts} from "../redux/actions/product/set-product";

const ItemList_c = () => {
    useEffect(() => {
        axios.get(`api/v1/products/list`).then((e) => {
            store.dispatch(setProducts(e.data))
            setAllProducts(e.data)
        })
        axios.get(`api/v1/categories/list`).then((e) => {
            store.dispatch(setCategories(e.data))
            setAllCategories(e.data)
        })
    }, [])

    const [products, setAllProducts] = useState([])

    const [categories, setAllCategories] = useState([])

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabValueChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };

    const RowProduct = ({index, style}: ItemRowDto) => (
        <ProductItem getCategory={getCategory} deletingProduct={deletingProduct} item={products[index]} style={style}/>
    )

    const RowCategory = ({index, style}: ItemRowDto) => (
        <CategoryItem
            style={style}
            deletingCategory={deletingCategory}
            item={categories[index]}
        />
    )

    function deletingProduct(id: number){
        axios.delete(`http://127.0.0.1:8000/api/v1/products/${id}`).then((response) => {
            console.log(response)
            setAllProducts(products.filter((e: ProductItemDto) => e.product_id != id))
            store.dispatch(setProducts(response.data))
        })
    }

    function deletingCategory(id: number){
        axios.delete(`http://127.0.0.1:8000/api/v1/categories/${id}`).then(() => {
            setAllCategories(categories.filter((e: CategoryDto) => e.category_id != id))
            setAllProducts(products.filter((e: ProductItemDto) => e.category_id != id))
        })
    }

    return (
        <ItemList
            tabValue={tabValue}
            handleTabValueChange={handleTabValueChange}
            RowProduct={RowProduct}
            RowCategory={RowCategory}
            categories={categories}
            products={products}
        />
    )
}

export default ItemList_c
