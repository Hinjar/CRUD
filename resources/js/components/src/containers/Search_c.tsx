import React, {useState} from "react";
import Search from "../components/search/Search";
import axios from "axios";
import ProductItem from "../components/product-item/ProductItem";
import CategoryItem from "../components/category-item/CategoryItem";
import {getCategory} from "../ts/utils/get-category";

const Search_c = () => {
    const [value, setValue]: any = useState(undefined)

    const [open, setOpen] = React.useState(false);

    const handleSubmit = (values: any): void => {
        axios.get(`http://127.0.0.1:8000/api/v1/${values.category}/${values.params}`).then((response) => {
            if('category_id' in response.data){
                setValue(response.data)
                return
            }
            setValue(undefined)
            setOpen(true)
        })
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    function deletingProduct(id: number) {
        axios.delete(`http://127.0.0.1:8000/api/v1/products/${id}`).then(() => {
            setValue(undefined)
        })
    }

    const deletingCategory = (id: number) => {
        axios.delete(`http://127.0.0.1:8000/api/v1/categories/${id}`).then(() => {
            setValue(undefined)
        })
    }

    function searchItem(){
        if(!Boolean(value)) return null

        if('product_id' in value){
            return productItem()
        }
        return categoryItem()
    }

    const productItem = () => (
         <ProductItem getCategory={getCategory} deletingProduct={deletingProduct} item={value}/>
    )

    const categoryItem = () => (
        <CategoryItem
            deletingCategory={deletingCategory}
            item={value}/>
    )

   return(<Search
       handleSubmit={handleSubmit}
       snackbar={{
           handleClose: handleClose,
           open: open,
           text: 'Элемент не найден',
           duration: 2500,
           severity:'error'
       }}>
       {searchItem()}
   </Search>)
}

export default Search_c
