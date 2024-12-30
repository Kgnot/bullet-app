import "./ProfileCreater.css";
import {TitleWithEffect} from "../../Components/utils/TitleWithEffect/TitleWithEffect.tsx";
import CarouselProperties from "./component/CarouselProperties/CarouselProperties.tsx";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../state";

const ProfileCreater = () => {
    const navigate = useNavigate();
    const {login} = useAuth();



    const backToLogin = () => {
        navigate("/login");

    }

    const createAccount = () => {
        login();
        navigate("/profile");
    }

    return (
        <div className="ProfileCreater">
            <button className="BackToLoginButton" onClick={backToLogin}> Atras </button>
            <div className="header">
                <h1 className="animated-title">
                    <TitleWithEffect text={"Bienvenido! Vamos a crear tu perfil!"}/>
                </h1>
            </div>
            <CarouselProperties/>
            <button className="AccountCreateButton" onClick={createAccount}> Crear Cuenta </button>
        </div>
    );
};

export default ProfileCreater;
