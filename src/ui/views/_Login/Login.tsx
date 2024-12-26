import "./Login.css";
import {LoginForm} from "../../Components/CustomForm/LoginForm/LoginForm.tsx";
import {useState} from "react";
import {ChangeSelected} from "./Component/changeSelected/ChangeSelected.tsx";
import {SignInForm} from "../../Components/CustomForm/SignIn/SignInForm.tsx";

const Login = () => {
    const [selected, setSelected] = useState("LOGIN");

    const changeSelected = (value: string) => {
        setSelected(value);
    };

    const getSubtitle = () => {
        return selected === "LOGIN"
            ? "Bienvenido de nuevo, ingresa tus credenciales para continuar."
            : "Regístrate para comenzar tu experiencia con nosotros.";
    };

    return (
        <div className="Login">
            <div className="login-left">
                <img src="./FinasitPet.svg" alt="logo"/>
            </div>
            <div className="login-right">
                <ChangeSelected parentMethod={changeSelected}/>
                <div className="login-right-body">
                    <h2>{selected}</h2>
                    <p className="login-subtitle">{getSubtitle()}</p>
                    {selected === "LOGIN" && <LoginForm/>}
                    {selected !== "LOGIN" && <SignInForm/>}
                </div>
            </div>
        </div>
    );
};

export default Login;
