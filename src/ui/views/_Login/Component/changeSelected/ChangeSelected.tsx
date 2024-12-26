import { useState } from "react";
import "./ChangeSelected.css";

interface ChangeSelectedProps {
    parentMethod: (value: string) => void;
}

export const ChangeSelected = ({ parentMethod }: ChangeSelectedProps) => {
    const [selected, setSelected] = useState("LOGIN");

    const handlerMethod = (value: string) => {
        setSelected(value);
        parentMethod(value);
    };

    return (
        <div className="ChangeSelected">
            <button
                onClick={() => handlerMethod("LOGIN")}
                className={`ChangeSelected_login ${selected === "LOGIN" ? "active" : ""}`}>
                Login
            </button>
            <button
                onClick={() => handlerMethod("SING IN")}
                className={`ChangeSelected_sing-in ${selected === "SING IN" ? "active" : ""}`}>
                Sign In
            </button>
        </div>
    );
};
