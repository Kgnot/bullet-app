import {useState} from "react";
import "./WalletsConfig.css"; // Suponiendo que tengas un archivo de estilos

export const WalletsConfig = () => {
    const [wallets, setWallets] = useState([
        {name: "Efectivo", img: "./wallets/Efectivo.png", amount: 0},
        {name: "Nequi", img: "./wallets/Nequi.png", amount: 0},
        {name: "Uala", img: "./wallets/Uala.png", amount: 0},
        {name: "Lulo", img: "./wallets/lulobank.png", amount: 0},
        {name: "Daviplata", img: "./wallets/daviplata.png", amount: 0},
    ]);

    const handleSubmit = () => {
        setWallets(wallets);
    }

    // para manejar el input
    const handleAmountChange = (index: number, newAmount: string) => {
        const updatedWallets = wallets.map((wallet, i) =>
            i === index
                ? {...wallet, amount: parseInt(newAmount) || 0}
                : wallet
        );
        setWallets(updatedWallets);
    };


    return (
        <div className="walletsConfig" onSubmit={handleSubmit}>
            {/*no mas para quitar el error pero debo cambiar lo de arriba*/}
            <h2>No quisieras configurar algunas billeteras? </h2>
            <div className="walletsCards">
                {wallets.map((wallet, index) => (
                    <div key={index} className="wallet-item">
                        <img src={wallet.img} alt={wallet.img}/>
                        <div className="wallet-info">
                            <label className="wallet-label">{wallet.name}:</label>
                            <input
                                className="wallet-input"
                                type="number"
                                value={wallet.amount}
                                placeholder={`Saldo en ${wallet.name}`}
                                onChange={(e) =>
                                    handleAmountChange(index, e.target.value)
                                }
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};
