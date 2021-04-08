import * as Yup from "yup";

export enum SearchFormParamsEnum {
    CATEGORY = 'category',
    PRODUCT = 'products'
}

export const searchInitValue = {
    params: 0,
    category: SearchFormParamsEnum.CATEGORY
}

export const searchValidationSchema =  Yup.object().shape({
    params: Yup.number().required("Введите id"),
})
