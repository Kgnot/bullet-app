import "./ChoosePet.css"

export const ChoosePet = () => {
    return (
        <>
            <div className="choosePet">
                <button> {`<`} </button>
                <div className="choosePet_img"> <img src="./bird.avif" alt=""/> </div>
                <button>{`>`} </button>
            </div>
        </>
    )
}