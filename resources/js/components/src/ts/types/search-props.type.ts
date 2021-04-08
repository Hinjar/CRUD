import {SearchFormParamsEnum} from "../consts/search-form-params.const";
import {FormikHelpers} from "formik/dist/types";
import {ReactNode} from "react";
import {SnackbarPropsDto} from "./product-form.type";

export interface SearchPropsDto{
    handleSubmit:  (values: SearchFormDto, formikHelpers: FormikHelpers<SearchFormDto>) => void | Promise<any>,
    children: ReactNode,
    snackbar: SnackbarPropsDto,
}

export interface SearchFormDto{
    params: number;
    category: SearchFormParamsEnum
}
