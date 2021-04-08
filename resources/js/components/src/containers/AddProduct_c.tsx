import React, {useEffect, useState} from "react";
import {
    convertDataToProductForm,
    convertDataToSelect,
    convertProductDataToSubmit
} from "../ts/utils/convert-form-data";
import {ProductFormDto} from "../ts/types/product.type";
import {noItems} from "../ts/consts/select-items.const";
import {productFormInitialValues} from "../ts/consts/add-product-form.const";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddProduct from "../components/add-product/AddProduct";

export const AddProduct_c = () => {
    let {id}: {
        id: string | undefined
    } = useParams()
    id = id?.replace(/\D/g, '')

    const [open, setOpen] = useState(false);

    const [formValue, setFormValue] = useState<undefined | ProductFormDto>()

    const [selectItems, setSelectItems] = useState(noItems)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/v1/categories/list`).then((response) => {
            setSelectItems(convertDataToSelect(response.data))
        })

        if(!id) {
            setFormValue(productFormInitialValues)
            return
        }

        axios.get(`http://127.0.0.1:8000/api/v1/products/${id}`).then((response) => {
            setFormValue(convertDataToProductForm(response.data))
        })

    },[])

    const handleSubmit = (values: ProductFormDto): void => {
        axios.post(`http://127.0.0.1:8000/api/v1/products/new`, convertProductDataToSubmit(values)).then((response) => {
            setOpen(true);
        })
    };

    const handleSubmitEdit = (values: ProductFormDto): void => {
        axios.post(`http://127.0.0.1:8000/api/v1/products/update`, convertProductDataToSubmit(values,true, String(id))).then((response) => {
            setOpen(true);
        })
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    return (
       formValue ? <AddProduct
           items={selectItems}
           handleSubmit={handleSubmit}
           handleSubmitEdit={handleSubmitEdit}
           formValue={formValue}
           id={id}
           snackbar={{
               handleClose: handleClose,
               open: open,
               text: id ? 'Информация о продукте изменена' :  'Продукт успешно добавлен',
               duration: 2500
           }}>
       </AddProduct> : null
    )
}
