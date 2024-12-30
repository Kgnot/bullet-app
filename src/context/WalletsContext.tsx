import {Wallets} from "../entities";
import {createContext, ReactNode, useEffect, useState} from "react";
import {walletsFetch} from "../scripts/restFetch/fetch.ts";


export interface WalletsContextType {
    wallets: Wallets[];
    setWallets: (wallets: Wallets[]) => void;
    walletsTypes: string[];
}

export const WalletsContext = createContext<WalletsContextType | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
}

const initialWallets: Wallets[] = await walletsFetch();


export const WalletsProvider = ({children}: ContextProviderProps) => {
    const [wallets, setWallets] = useState<Wallets[]>(initialWallets);

    const walletsTypes: string[] = wallets.map(expenses => expenses.wallet_type);


    useEffect(() => {
        const wallets = localStorage.getItem('wallets');
        if (wallets) {
            setWallets(JSON.parse(wallets));
        }
    }, [wallets]);

    return (
        <WalletsContext.Provider value={{wallets, setWallets, walletsTypes}}>
            {children}
        </WalletsContext.Provider>
    )
}