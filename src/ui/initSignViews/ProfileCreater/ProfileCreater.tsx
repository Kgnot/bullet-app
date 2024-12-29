import "./ProfileCreater.css";
import {TitleWithEffect} from "../../Components/utils/TitleWithEffect/TitleWithEffect.tsx";
import CarouselProperties from "./component/CarouselProperties/CarouselProperties.tsx";

const ProfileCreater = () => {
    return (
        <div className="ProfileCreater">
            <div className="header">
                <h1 className="animated-title">
                    <TitleWithEffect text={"Bienvenido! Vamos a crear tu perfil!"}/>
                </h1>
            </div>

            <CarouselProperties/>

            {/*<div className="box-profile-container">*/}
            {/*    {showBoxProfile && <BoxProfile className="boxProfile-animation" />}*/}
            {/*</div>*/}
            {/*{showButtons && <div className="profileCreater_buttons_div">*/}
            {/*    <button className="profileCreator_button">Anterior</button>*/}
            {/*    <button className="profileCreator_button">Siguiente</button>*/}
            {/*</div>}*/}
        </div>
    );
};

export default ProfileCreater;
