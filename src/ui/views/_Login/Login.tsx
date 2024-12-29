import "./Login.css";
import {LoginForm} from "../../Components/CustomForm/LoginForm/LoginForm.tsx";
import {useRef, useState} from "react";
import {ChangeSelected} from "./Component/changeSelected/ChangeSelected.tsx";
import {SignInForm} from "../../Components/CustomForm/SignIn/SignInForm.tsx";

const Login = () => {
    const [selected, setSelected] = useState("LOGIN");
    const [isAnimating, setIsAnimating] = useState(false);
    const login_rightRef = useRef<HTMLDivElement>(null);

    const changeSelected = (value: string) => {
        setSelected(value);
    };

    const getSubtitle = () => {
        return selected === "LOGIN"
            ? "Bienvenido de nuevo, ingresa tus credenciales para continuar."
            : "Regístrate para comenzar tu experiencia con nosotros.";
    };

    const oncClickSignInButtonAnimation = () => {
        if (!login_rightRef.current) return;
        setIsAnimating(true);
    };


    return (
        <div className="Login">
            <div className= {`login-left ${isAnimating ? "close" : ""}`}>
                <img src="./FinasitPet.svg" alt="logo"/>
            </div>
            <div className={`login-right ${isAnimating ? "open" : ""}`}
                 ref={login_rightRef}
            >
                <ChangeSelected parentMethod={changeSelected}/>
                <div className="login-right-body">
                    <h2>{selected}</h2>
                    <p className="login-subtitle">{getSubtitle()}</p>
                    {selected === "LOGIN" && <LoginForm/>}
                    {selected !== "LOGIN" && <SignInForm methodParent={oncClickSignInButtonAnimation}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
