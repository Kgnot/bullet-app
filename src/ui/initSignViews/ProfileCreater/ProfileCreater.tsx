import "./ProfileCreater.css";
import {TitleWithEffect} from "../../Components/utils/TitleWithEffect/TitleWithEffect.tsx";
import CarouselProperties from "./component/CarouselProperties/CarouselProperties.tsx";
import {useNavigate} from "react-router-dom";
import {useSignIn} from "../../../state/useSignIn.ts";

const ProfileCreater = () => {
    const navigate = useNavigate();
    const {sendRequest} = useSignIn();

    const backToLogin = () => {
        navigate("/login");

    }

    const createAccount = async () => {
        try{
            await sendRequest();
            navigate("/profile");
        }
        catch (e){
            console.error("error al intentar iniciar: ",e);
        }

    }

    return (
        <div className="ProfileCreater">
            <button className="BackToLoginButton" onClick={backToLogin}> Atrás </button>
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
