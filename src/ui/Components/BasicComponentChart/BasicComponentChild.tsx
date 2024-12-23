import {ReactNode} from "react";


interface BasicComponentChildProps {
    className?: string;
    title?: string,
    children: ReactNode,
}


export const BasicComponentChild = ({title, className,children}: BasicComponentChildProps) => {

    return (
        <>
            <div className={`${className}`} style={{display: "flex", flexDirection: "column", padding:"1em", alignItems:'center',justifyContent:"center"}}>
                {title && <h1> {title}</h1>}
                {children}
            </div>
        </>
    )
}