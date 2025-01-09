import "./SingInForm.css"
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSingInValues, schemaSignIn} from "../Form.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import InputLoginForm from "../Components/InputLoginForm/InputLoginForm.tsx";
import GoogleIcon from '@mui/icons-material/Google';
import {useNavigate} from "react-router-dom";
import {useSignIn} from "../../../../state/useSignIn.ts";

interface SignInFormProps {
    className?: string;
    methodParent: ()=>void

}


export const SignInForm = ({className,methodParent}:SignInFormProps) => {
    const navigate = useNavigate();
    const {control, handleSubmit, formState: {errors}} = useForm<FormSingInValues>({
        resolver: zodResolver(schemaSignIn)
    });
    // apartado del signIn:
    const {addBasicInfo} = useSignIn();

    const onsubmit: SubmitHandler<FormSingInValues> = (data) => {
        methodParent();
        addBasicInfo(data.nickName,data.firstName,data.lastName,data.email,data.password); // add basic info. xd
        setTimeout(() => {
            navigate("/sign/profile");
        }, 500);
    }

    const handlerGoogleSignIn = () => {
        console.log("xd");
    }


    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)} className={`signInForm ${className}`}>
                <div>
                    <InputLoginForm name="nickName" control={control} type="text" label="Nickname"
                                    error={errors.nickName}/>
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
                    <button
                        className="signIn_button"
                        type="submit"> Registrarse
                    </button>
                </div>
            </form>
            <button className="signIn_google_button" onClick={handlerGoogleSignIn}><GoogleIcon/>
                <span> Usar Google</span></button>

        </>
    )
}