import {useContext} from "react";
import {SignInContext} from "../context/SignIn.tsx";


export const useSignIn = () => {
    const context = useContext(SignInContext);
    if (!context) throw new Error("useSignIn must be used within an SignInProvider")
    return context;
}