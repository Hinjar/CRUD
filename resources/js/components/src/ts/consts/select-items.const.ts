import {FormikSelectItem} from "../types/formik-form.type";
import {SearchFormParamsEnum} from "./search-form-params.const";

export const noItems: FormikSelectItem[] = [{
    value: '',
    label: 'Нет доступных категорий'
}]

export const searchSelectItems = [{value: SearchFormParamsEnum.CATEGORY, label: 'Категория'}, {value: SearchFormParamsEnum.PRODUCT, label: 'Продукт'}]
