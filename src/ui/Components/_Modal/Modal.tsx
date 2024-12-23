import {ReactNode} from "react";
import "./Modal.css"

interface Props{
    children: ReactNode
}


export const Modal = ({children}:Props) => {

    return(
        <div className="modal-p">
            {children}
        </div>
    )
}