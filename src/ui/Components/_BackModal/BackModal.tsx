import {ReactNode} from "react";
import "./BackModal.css"

interface BackModalProps {
    children: ReactNode;
    onClick : () => void;
}

export const BackModal = ({children,onClick}:BackModalProps) => {

    return(
        <>
            <div className="backModal" onClick={onClick}></div>
            {children}
        </>
    )
}