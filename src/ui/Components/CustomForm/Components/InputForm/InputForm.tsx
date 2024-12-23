import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "../../Form.ts";
import "./InputForm.css";

interface Props {
    name: keyof FormValues;
    control: Control<FormValues>; // Control<FormValues>
    label: string;
    type?: string;
    options?: string[]; // Opciones para un select
    error?: FieldError;
    className?: string;
}

const InputForm = ({ name, control, label, type, options, error, className }: Props) => {
    return (
        <div className="form-input-group">
            <label className="form-group-label" htmlFor={name}>{label} :</label>
            {/* Usar Controller para manejar el input */}
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    type === "select" ? (
                        <select
                            id={name}
                            {...field}
                            className={`form-control ${error ? "is-invalid" : ""} ${className}`}
                        >
                            <option value="">Selecciona una {label.toLowerCase()}</option>
                            {options?.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    ) : type === "textarea" ? (
                        <textarea
                            id={name}
                            {...field}
                            className={`form-control ${error ? "is-invalid" : ""} ${className}`}
                            rows={4}
                        />
                    ) : (
                        //por defecto
                        <input
                            id={name}
                            type={type}
                            {...field}
                            className={`form-control ${error ? "is-invalid" : ""} ${className}`}
                            onChange={(e) => field.onChange(type === "number" ? e.target.valueAsNumber : e.target.value)} // Conversión a número
                        />
                    )
                }
            />

            {error && <p className="error">{error.message}</p>}
        </div>
    );
};

export default InputForm;
