import "./LoginForm.css"

import {SubmitHandler, useForm} from "react-hook-form";
import {FormLoginValues, schemaLogin} from "../Form.ts";
import {zodResolver} from "@hookform/resolvers/zod";
// import {useNavigate} from "react-router-dom";
import InputLoginForm from "../Components/InputLoginForm/InputLoginForm.tsx";
import apiService from "../../../../service/api/apiService.ts";
import {useAuth} from "../../../../state";


export const LoginForm = ({className}: { className?: string }) => {
    // const navigate = useNavigate();
    const {checkAuthentication} = useAuth();


    const {control, handleSubmit, formState: {errors}} = useForm<FormLoginValues>({
        resolver: zodResolver(schemaLogin)
    });

    const onsubmit: SubmitHandler<FormLoginValues> = async (data) => {
        const email = data.email;
        const password = data.password;
        try {
            await apiService.login({email,password});
            checkAuthentication();
            window.location.hash = "#/profile";
            console.log("XD???, debi cambiar a profile :p ")
            // navigate("#/profile");
        } catch (error) {
                window.alert('Error al ingresar');
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)} className={`loginForm ${className}`}>
                <InputLoginForm name="email" control={control} label="Email" error={errors.email} type="text"/>
                <InputLoginForm name="password" control={control} label="Contraseña" error={errors.password}
                                type="password"/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}