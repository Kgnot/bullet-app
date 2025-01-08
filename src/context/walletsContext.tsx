import {Wallets} from "../entities";
import {createContext, ReactNode, useEffect, useState} from "react";
import apiService from "../service/api/apiService.ts";


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
            const w: Wallets[] = await apiService.walletsUser();
            setWallets(w);
            localStorage.setItem('wallets', JSON.stringify(w)); // Usa `w` aquí, no `wallets`
        } catch (error) {
            console.error("Error fetching wallets:", error);
        }
    };


    useEffect(() => {
        const wallets = localStorage.getItem('wallets');
        if (wallets) {
            setWallets(JSON.parse(wallets));
        }
    }, []);

    return (
        <WalletsContext.Provider
            value=
                {
                    {
                        wallets,
                        setWallets,
                        walletsTypes,
                        fetchWallets
                    }}>
            {children}
        </WalletsContext.Provider>
    )
}