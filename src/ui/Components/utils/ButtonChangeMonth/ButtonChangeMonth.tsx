interface ButtonProps {
    parentMethod: (type: number) => void
}

export const ButtonChangeMonth = ({parentMethod}: ButtonProps) => {

    return (
        <>
            <div className="calendar__button">
                <button onClick={() => parentMethod(-1)}>-</button>
                <button onClick={() => parentMethod(+1)}>+</button>
            </div>

        </>
    )

}