interface ButtonProps {
    parentMethod: (type: number) => void
    text?: string
}

export const ButtonChange = ({parentMethod,text}: ButtonProps) => {

    return (
        <>
            <div className="calendar__button">
                <button onClick={() => parentMethod(-1)}>-</button>
                {text}
                <button onClick={() => parentMethod(+1)}>+</button>
            </div>

        </>
    )

}