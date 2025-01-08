import "./Logout.css"
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useNavigate} from "react-router-dom";
import apiService from "../../../service/api/apiService.ts";

export const Logout = () => {
    const navigate = useNavigate();



    const logoutHandler = async () => {
        await apiService.logout();
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