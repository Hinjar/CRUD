import React from "react";
import {Form, Formik} from "formik";
import FormikField from "../formik-field/FormikField";
import {Button} from "@material-ui/core";
import './Search.css'
import FormikSelect from "../formik-select/FormikSelect";
import {searchSelectItems} from "../../ts/consts/select-items.const";
import MessageSnackbar from "../snackbar/SnackBar";
import {SearchPropsDto} from "../../ts/types/search-props.type";
import {searchInitValue, searchValidationSchema} from "../../ts/consts/search-form-params.const";

const Search: React.FC<SearchPropsDto> = ({handleSubmit, children, snackbar}) => {

    return (
        <div>
            <h3>Поиск</h3>
            <Formik
                validationSchema={searchValidationSchema}
                initialValues={searchInitValue}
                onSubmit={handleSubmit}
            >
                {({errors, touched}) => {
                    return (
                        <Form>
                            <div className='search-form'>
                                <div className='form-param'>
                                    <FormikField type={'number'}
                                                 errorMessage={errors.params}
                                                 error={Boolean(errors.params) && Boolean(touched.params)} name="params"
                                                 label="Id"/>
                                </div>
                                <Button
                                    className='search-button'
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    {'Найти'}
                                </Button>
                            </div>
                            <FormikSelect
                                name="category"
                                items={searchSelectItems}
                                error={Boolean(errors.category)}
                            />
                        </Form>
                        );
                    }
                }
            </Formik>
            {children}
            <MessageSnackbar
                {...snackbar}
            >
            </MessageSnackbar>
        </div>
    )
}

export default Search
