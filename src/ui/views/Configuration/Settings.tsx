import './Settings.css';
import {ProfileImage} from "../../Components/ProfileContainer/ProfileImage/ProfileImage.tsx";
import {SettingProfile} from "../../Components/SettingProfile/SettingProfile.tsx";
import {BasicComponentChild} from "../../Components/BasicComponentChart/BasicComponentChild.tsx";
import {ChooseTheme} from "../../Components/ChooseTheme/ChooseTheme.tsx";
import {ChoosePet} from "../../Components/ChoosePet/ChoosePet.tsx";

const Settings = () => {
    return (
        <div className="settings-container">
            <h1>Configuración</h1>
            <div className="bento-grid-settings ">
                <div className="settings-left">
                    <div className="settings-left-top child-default-comp">
                        <ProfileImage/>
                        <SettingProfile/>
                    </div>
                    <div className="settings-left-bot child-default-comp">
                        <h2>Billeteras Asociadas</h2>

                    </div>
                </div>
                <div className="settings-right">
                    <BasicComponentChild className="settings-right-top child-default-comp">
                        <ChooseTheme/>
                        <ChoosePet/>
                    </BasicComponentChild>
                    <div className="settings-right-bot child-default-comp">
                            <h2> Moneda </h2>
                        <select className="select-money">
                            <option value="value1">COP</option>
                            <option value="value2" selected>USD</option>
                            <option value="value3">CMX</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
