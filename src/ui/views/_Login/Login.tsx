import "./Login.css"
import {LoginForm} from "../../Components/CustomForm/LoginForm/LoginForm.tsx";


const Login = () => {

    return (
        <div className="Login">
            <div className="login-left">
                <img src="./FinasitPet.svg" alt="logo"/>
            </div>
            <div className="login-right">
                <LoginForm/>
            </div>
        </div>
    )
}


export default Login;