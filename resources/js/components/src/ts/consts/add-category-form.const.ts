import * as Yup from "yup";
import {BasicFormDto} from "../types/formik-form.type";

export const categoryFormValidationSchema = Yup.object().shape({
    name: Yup.string().required("Обязательное поле"),
})

export const categoryFormInitialValues: BasicFormDto = {
    name: "",
};
