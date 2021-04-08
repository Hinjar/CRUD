import React, {useEffect, useState} from "react";
import AddCategory from "../components/add-category/AddCategory";
import {BasicFormDto} from "../ts/types/formik-form.type";
import axios from "axios";
import {useParams} from "react-router-dom";
import {
    convertCategoryDataToSubmit, convertDataToProductForm,
} from "../ts/utils/convert-form-data";
import {categoryFormInitialValues} from "../ts/consts/add-category-form.const";

export const AddCategory_c = () => {
    let {id}: {
        id: string | undefined
    } = useParams()
    id = id?.replace(/\D/g, '')

    const [open, setOpen] = React.useState(false);

    const [formValue, setFormValue] = useState<undefined | BasicFormDto>()

    useEffect(() => {
        if(!id) {
            setFormValue(categoryFormInitialValues)
            return
        }

        axios.get(`http://127.0.0.1:8000/api/v1/category/${id}`).then((response) => {
            setFormValue(convertDataToProductForm(response.data))
        })
    }, [])

    const handleSubmit = (values: BasicFormDto): void => {
        axios.post(`http://127.0.0.1:8000/api/v1/categories/new`, {name: values.name}).then(() => {
            setOpen(true);
        })
    };

    const handleSubmitEdit = (values: BasicFormDto): void => {
        axios.put(`http://127.0.0.1:8000/api/v1/categories/update`, convertCategoryDataToSubmit(values, Number(id))).then(() => {
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
        formValue ?
       <AddCategory
           handleSubmit={handleSubmit}
           id={id}
           handleSubmitEdit={handleSubmitEdit}
           formValue={formValue}
           snackbar={{
           handleClose: handleClose,
           open: open,
           text: id ? 'Информация о категории изменена' :  'Категория успешно добавлена',
           duration: 2500
       }}>

       </AddCategory> : null
    )
}
