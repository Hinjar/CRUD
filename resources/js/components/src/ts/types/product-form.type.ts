import {ProductFormDto} from "./product.type";
import {FormikSelectItem} from "./formik-form.type";
import * as React from "react";
import {FormPropsDto} from "./form-props.type";
import {Color} from "@material-ui/lab";

export interface ProductFormPropsDto extends FormPropsDto<ProductFormDto>{
    items: FormikSelectItem[],
}

export interface SnackbarPropsDto{
    duration: number,
    text: string,
    handleClose?: (event: React.SyntheticEvent<any>) => void
    open: boolean,
    severity?: Color | undefined
}
