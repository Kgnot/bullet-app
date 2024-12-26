import { Control, Controller, FieldError } from "react-hook-form";
import {FormLoginValues} from "../../Form.ts";
import "./InputLoginForm.css";

interface Props {
    name: keyof FormLoginValues;
    control: Control<FormLoginValues>; // Control<FormValues>
    label: string;
    type?: string;
    options?: string[]; // Opciones para un select
    error?: FieldError;
    className?: string;
    placeholder?: string;
}

const InputForm = ({ name, control, label, type,error, className,placeholder }: Props) => {
    return (
        <div className="form-input-login-group">
            <label className="form-input-group-label" htmlFor={name}>
                {label} :
            </label>
            {/* Usar Controller para manejar el input */}
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                        <input
                            id={name}
                            type={type}
                            {...field}
                            name={name}
                            className={`form-control-login ${error ? "is-invalid" : ""} ${className}`}
                            placeholder={placeholder}
                            onChange={(e) => field.onChange(type === "number" ? e.target.valueAsNumber : e.target.value)} // Conversión a número
                        />
                }
            />
            {error && <p className="error">{error.message}</p>}
        </div>
    );
};

export default InputForm;