import {useContext} from "react";
import {WalletsContext} from "../context/walletsContext.tsx";

export const useWallets = () => {
    const context = useContext(WalletsContext);
    if (!context) throw new Error("useWallet must be used within an ExpensesProvider");
    return context;
}