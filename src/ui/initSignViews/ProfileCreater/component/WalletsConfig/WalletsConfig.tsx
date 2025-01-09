import "./WalletsConfig.css";
import {useWallets} from "../../../../../state/useWallets.ts";
import {useSignIn} from "../../../../../state/useSignIn.ts";

export const WalletsConfig = () => {
    const {wallets} = useWallets();
    const {signIn, addBalances} = useSignIn();
    const balances = signIn.balances;

    const handleBalanceChange = (id_wallet: number, newAmount: string) => {
        const parsedAmount = newAmount === '' ? 0 : parseFloat(newAmount);
        const updatedWallet = wallets.find(wallet => wallet.id_wallet === id_wallet);
        if (updatedWallet) {
            const updatedBalances = balances.map(balance =>
                balance.wallet.id_wallet === id_wallet
                    ? {...balance, amount: isNaN(parsedAmount) ? 0 : parsedAmount}
                    : balance
            );
            addBalances(updatedBalances);
        }
    };

    return (
        <div className="walletsConfig">
            <h2>No quisieras configurar algunas billeteras? </h2>
            <div className="walletsCards">
                {wallets.map((wallet, index) => (
                    <div key={index} className="wallet-item">
                        <img src="./finasit.png" alt={wallet.wallet_img_url} />
                        <div className="wallet-info">
                            <label className="wallet-label">{wallet.wallet_type}:</label>
                            <input
                                className="wallet-input"
                                type="number"
                                // value={balances.find(balance => balance.wallet.id_wallet === wallet.id_wallet)?.amount || 0}
                                placeholder={`Saldo en ${wallet.wallet_type}`}
                                onChange={(e) =>
                                    handleBalanceChange(wallet.id_wallet, e.target.value)
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

