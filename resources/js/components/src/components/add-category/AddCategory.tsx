import React from "react";
import {Form, Formik} from "formik";
import FormikField from "../formik-field/FormikField";
import {Button} from "@material-ui/core";
import {categoryFormValidationSchema} from "../../ts/consts/add-category-form.const";
import MessageSnackbar from "../snackbar/SnackBar";
import {FormPropsDto} from "../../ts/types/form-props.type";
import {BasicFormDto} from "../../ts/types/formik-form.type";

const AddCategory : React.FC<FormPropsDto<BasicFormDto>> = ({handleSubmit,snackbar,id,handleSubmitEdit, formValue}) =>{

    return (
        <div>
            <h3>{id? 'Изменить информацию о категории' : 'Добавить новую категорию'}</h3>
            <Formik
                initialValues={formValue}
                onSubmit={id? handleSubmitEdit :handleSubmit }
                validationSchema={categoryFormValidationSchema}
            >
                {({ errors,touched, isValid, dirty }) => {
                    return (
                        <Form>
                            <FormikField errorMessage={errors.name} error={Boolean(errors.name) && touched.name} name="name" label="Название" />
                            <Button
                                className='add-button'
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={!isValid || snackbar.open}
                                type="submit"
                            >
                                {id? 'Изменить' : 'Добавить' }
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
            <MessageSnackbar
                {...snackbar}
            >
            </MessageSnackbar>
        </div>
    )
}

export default AddCategory
