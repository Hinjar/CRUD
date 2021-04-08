import React from "react";
import {Form, Formik} from "formik";
import {Avatar, Button} from "@material-ui/core";
import FormikSelect from "../formik-select/FormikSelect";
import FormikField from "../formik-field/FormikField";
import {productFormValidationSchema} from "../../ts/consts/add-product-form.const";
import {ProductFormPropsDto} from "../../ts/types/product-form.type";
import MessageSnackbar from "../snackbar/SnackBar";
import Dropzone from "react-dropzone";
import './AddProduct.css'

const AddProduct : React.FC<ProductFormPropsDto> = ({id, formValue, handleSubmitEdit, handleSubmit, items, snackbar}) => {

    function photo(photo: string | File){
        if(typeof  photo === 'string'){
            return `http://127.0.0.1:8000/storage/${photo}`
        }
        return URL.createObjectURL(photo)
    }

    return (
        <div>
            <h3>{id? 'Изменить информацию о продукте' : 'Добавить новый продукт'}</h3>
            <Formik
                initialValues={formValue}
                onSubmit={id? handleSubmitEdit :handleSubmit }
                validationSchema={productFormValidationSchema}
            >
                {({ errors, isValid,setFieldValue,values }) => {
                    return (
                        <Form encType='multipart/form-data'>
                            <h5>Фото</h5>
                            <Dropzone noDrag={true} onDrop={acceptedFiles =>  setFieldValue("photo",acceptedFiles[0])}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                        <div className='drop-zone' {...getRootProps()}>
                                            <input name={'photo'} {...getInputProps()} />
                                            <div className='avatar-wrap'>
                                                <Avatar src={photo(values.photo)} className={'avatar'}></Avatar>
                                            </div>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                            <h5>Информация</h5>
                            <FormikField error={Boolean(errors.name)} errorMessage={errors.name} name="name" label="Название"  />
                            <FormikField error={Boolean(errors.description)}  errorMessage={errors.description} name="description" label="Описание"  />
                            <FormikField error={Boolean(errors.price)}  errorMessage={errors.price} name="price" label="Цена" type='number'  />
                            <FormikField error={Boolean(errors.quantity)}  errorMessage={errors.quantity}  name="quantity" label="Количество" type='number'  />
                            <FormikSelect
                                errorMessage={errors.category}
                                name="category"
                                items={items}
                                label="Категория"
                                required
                                error={Boolean(errors.category)}
                            />
                            <Button
                                className='add-button'
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={!isValid || snackbar.open}
                                type="submit"
                            >
                                {id? 'Изменить' : 'Добавить'}
                            </Button>
                        </Form>
                        );
                    }
                }
            </Formik>
            <MessageSnackbar
                {...snackbar}
            >
            </MessageSnackbar>
        </div>
    )
}

export default AddProduct
