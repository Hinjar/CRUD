import {FormikHelpers} from "formik/dist/types";
import {SnackbarPropsDto} from "./product-form.type";

export interface FormPropsDto<T> {
    id: string | undefined
    snackbar: SnackbarPropsDto,
    handleSubmit:  (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>,
    formValue: T,
    handleSubmitEdit:  (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>,
}
