import {SubmitHandler, useForm} from "react-hook-form";
import {FormValues, schema} from "./Form.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import InputForm from "./Components/InputForm/InputForm.tsx";
import "./ExpensesForm.css"

export const ExpensesForm = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema)
    });

    const onsubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="expensesForm">
            <InputForm name="quantity" control={control} label="Cantidad" type="number" error={errors.quantity}/>
            <InputForm name="category" control={control} label="Categoria" type="select"
                       options={["Category1", "Category2", "Category3"]} error={errors.category}/>
            <InputForm name="feeling" control={control} label="Sentir" type="select"
                       options={["Happy", "Sad", "Neutral"]} error={errors.feeling}/>
            <InputForm name="description" control={control} label="Descripción" type="textarea" error={errors.description} className="form-description-input"/>

            <button type="submit">Guardar Gasto</button>
        </form>
    )
}