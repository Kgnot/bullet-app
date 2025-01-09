import {Wallets} from "../entities";
import {createContext, ReactNode, useEffect, useState} from "react";
import walletsService from "../service/api/WalletsService.ts";


export interface WalletsContextType {
    wallets: Wallets[];
    setWallets: (wallets: Wallets[]) => void;
    walletsTypes: string[];
    fetchWallets: () => void;
}

export const WalletsContext = createContext<WalletsContextType | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
}

const initialWallets: Wallets[] =
    []


export const WalletsProvider = ({children}: ContextProviderProps) => {
    const [wallets, setWallets] = useState<Wallets[]>(initialWallets);
    const walletsTypes: string[] = wallets.map(expenses => expenses.wallet_type);


    const fetchWallets = async () => {
        try {
            const w: Wallets[] = await walletsService.wallets();
            setWallets(w);
        } catch (error) {
            console.error("Error fetching wallets:", error);
        }
    };

    useEffect(() => {
        fetchWallets();
    }, []);

    return (
        <WalletsContext.Provider
            value=
                {
                    {
                        wallets,
                        setWallets,
                        walletsTypes,
                        fetchWallets,
                    }}>
            {children}
        </WalletsContext.Provider>
    )
}