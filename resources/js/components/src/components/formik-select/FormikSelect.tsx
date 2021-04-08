import React from "react";
import {Field} from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {FormikSelectProps, MaterialUISelectFieldProps} from "../../ts/types/formik-form.type";

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
    error,
    errorString,
    label,
    children,
    value,
    name,
    onChange,
    onBlur,
    required
}) => {
    return (
        <FormControl error={error} fullWidth>
            <InputLabel required={required}>{label}</InputLabel>
            <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
                {children}
            </Select>
            <FormHelperText>{errorString}</FormHelperText>
        </FormControl>
    );
};

const FormikSelect: React.FC<FormikSelectProps> = ({name, items, label = '', required = false, error, errorMessage }) => {


    return (
        <div className="FormikSelect">
            <Field
                error={error}
                name={name}
                as={MaterialUISelectField}
                label={label}
                errorString={errorMessage}
                required={required}
            >
                {items.map(item => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Field>
        </div>
    );
};

export default FormikSelect;
