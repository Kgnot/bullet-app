import {SubmitHandler, useForm} from "react-hook-form";
import {FormLoginValues, schemaLogin} from "../Form.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../../state";
import InputLoginForm from "../Components/InputLoginForm/InputLoginForm.tsx";
import "./LoginForm.css"



export const LoginForm = ({className}:{className?:string}) => {
    const navigate = useNavigate();
    const {login} = useAuth();


    const {control, handleSubmit, formState: {errors}} = useForm<FormLoginValues>({
        resolver: zodResolver(schemaLogin)
    });

    const onsubmit: SubmitHandler<FormLoginValues> = (data) => {
        login();
        console.log(data)
        navigate("/profile");
    }


    return (
        <>
        <form onSubmit={handleSubmit(onsubmit)} className={`loginForm ${className}`}>
            <InputLoginForm name="email" control={control} label="Email" error={errors.email} type="text"/>
            <InputLoginForm name="password" control={control} label="Contraseña" error={errors.password} type="password"/>
            <button  type="submit">Login</button>
        </form>
        </>
    )
}