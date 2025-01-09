import "./Logout.css"
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useNavigate} from "react-router-dom";
import authService from "../../../service/api/AuthService.ts";

export const Logout = () => {
    const navigate = useNavigate();



    const logoutHandler = async () => {
        await authService.logout();
        navigate("/login");
    }

    return(
        <>
            <button
                className="logout-button" title="logout / salir"
                onClick={logoutHandler}
            >
            <LogoutOutlinedIcon />
            </button>
        </>
    )
}