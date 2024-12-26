import "./SingInForm.css"
import {useAuth} from "../../../../state";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSingInValues, schemaSignIn} from "../Form.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import InputLoginForm from "../Components/InputLoginForm/InputLoginForm.tsx";
import GoogleIcon from '@mui/icons-material/Google';

export const SignInForm = ({className}: { className?: string }) => {
    const {login} = useAuth();
    const {control, handleSubmit, formState: {errors}} = useForm<FormSingInValues>({
        resolver: zodResolver(schemaSignIn)
    });

    const onsubmit: SubmitHandler<FormSingInValues> = (data) => {
        login();
        console.log(data)
    }

    const handlerGoogleSignIn = () => {
        console.log("xd");
    }


    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)} className={`signInForm ${className}`}>
                <div>
                    <InputLoginForm name="firstName" control={control} type="text" label="Nombre"
                                    error={errors.firstName}/>
                    <InputLoginForm name="lastName" control={control} type="text" label="Apellido"
                                    error={errors.lastName}/>
                    <InputLoginForm name="email" control={control} type="email" label="Email" error={errors.email}/>
                    <InputLoginForm name="password" control={control} type="password" label="Contraseña"
                                    error={errors.password}/>
                    <InputLoginForm name="confirmPassword" control={control} type="password"
                                    label="Confirmar Contraseña" error={errors.confirmPassword}/>
                </div>
                <div className="buttons_div_signIn">
                    <button className="signIn_button" type="submit"> Registrarse</button>
                </div>
            </form>
            <button className="signIn_google_button" onClick={handlerGoogleSignIn}><GoogleIcon/>
                <span> Usar Google</span></button>

        </>
    )
}