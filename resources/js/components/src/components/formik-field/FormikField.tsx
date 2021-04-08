import React from "react";
import {Field } from "formik";
import TextField from "@material-ui/core/TextField";
import {FormikFieldProps} from "../../ts/types/formik-form.type";

const FormikField: React.FC<FormikFieldProps> = ({ name, label, type = "text", required = false, error = false, errorMessage}) => {
    return (
        <div className="FormikField">
            <Field
                required={required}
                autoComplete="off"
                error={error}
                as={TextField}
                label={label}
                name={name}
                fullWidth
                type={type}
                helperText={errorMessage}
            />
        </div>
    );
};

export default FormikField;
