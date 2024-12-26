import "./Logout.css"
import {useAuth} from "../../../state";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Logout = () => {
    const {logout} = useAuth();

    const logoutHandler = () => {
        logout();
        console.log("Logout");
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