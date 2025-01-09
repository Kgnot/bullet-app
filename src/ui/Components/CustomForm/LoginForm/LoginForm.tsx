import "./LoginForm.css"

import {SubmitHandler, useForm} from "react-hook-form";
import {FormLoginValues, schemaLogin} from "../Form.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import InputLoginForm from "../Components/InputLoginForm/InputLoginForm.tsx";
import {useAuth} from "../../../../state";
import authService from "../../../../service/api/AuthService.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export const LoginForm = ({className}: { className?: string }) => {
    const navigate = useNavigate();
    const {checkAuthentication,isAuthenticated} = useAuth();


    const {control, handleSubmit, formState: {errors}} = useForm<FormLoginValues>({
        resolver: zodResolver(schemaLogin)
    });

    const onsubmit: SubmitHandler<FormLoginValues> = async (data) => {
        const email = data.email;
        const password = data.password;
        try {
            await authService.login({email,password});
            await checkAuthentication();
            navigate("/profile");
        } catch (error) {
                window.alert('Error al ingresar');
        }
    }

    useEffect(() => {
        if(isAuthenticated){
            navigate("/profile");
        }
    }, [isAuthenticated, navigate]);

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