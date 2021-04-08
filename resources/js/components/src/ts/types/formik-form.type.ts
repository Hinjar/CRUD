import {ReactNode} from "react";
import {FieldInputProps} from "formik/dist/types";

export interface FormikSelectItem {
    label: string;
    value: number | string;
}

export interface FormikSelectProps {
    name: string;
    error: boolean;
    items: FormikSelectItem[];
    label?: string;
    required?: boolean;
    errorMessage?: string;
}

export interface MaterialUISelectFieldProps extends FieldInputProps<string> {
    errorString?: string;
    children: ReactNode;
    label: string;
    required: boolean;
    error: boolean
}

export interface FormikFieldProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    error?: boolean;
    errorMessage: string | undefined;
}

export interface BasicFormDto{
    name: string
}

export interface AddProductFormDto extends BasicFormDto{
    description: string,
    price: number,
    quantity: number,
    category: string;
}


