import "./Wallet.css"
import {ButtonChange} from "../utils/ButtonChangeMonth/ButtonChange.tsx";
import {useState} from "react";

export const Wallet = () => {
    // aqui hacemos un usestate para cambiar de billetera .

    const [indexNumber, setIndexNumber] = useState(0);

    const changeWallet = (index: number) => {
        console.log("cambie de billetera: ", index)
        const newValue = indexNumber+index;
        setIndexNumber(newValue);
    }

    return (
        <div className="wallet-container">
            <div className="wallet-title">
                <ButtonChange parentMethod={changeWallet} text={`Billetera ${indexNumber}`}/>
            </div>
            <div className="wallet-img">
                <img src="./nequiLogo.webp" alt=""/>
            </div>
        </div>
    )
}
