import { useState } from "react";
import "./ChangeSelected.css";

interface ChangeSelectedProps {
    parentMethod: (value: string) => void;
    className?:string;
}

export const ChangeSelected = ({ parentMethod ,className}: ChangeSelectedProps) => {
    const [selected, setSelected] = useState("LOGIN");

    const handlerMethod = (value: string) => {
        setSelected(value);
        parentMethod(value);
    };

    return (
        <div className={`ChangeSelected ${className}`}>
            <button
                onClick={() => handlerMethod("LOGIN")}
                className={`ChangeSelected_login ${selected === "LOGIN" ? "active" : ""}`}>
                Login
            </button>
            <button
                onClick={() => handlerMethod("SIGN IN")}
                className={`ChangeSelected_sing-in ${selected === "SIGN IN" ? "active" : ""}`}>
                Sign In
            </button>
        </div>
    );
};
