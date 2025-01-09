import {Balances} from "../entities";
import {createContext, ReactNode, useState} from "react";

export interface BalancesContextType {
    balances: Balances[];
    setBalances: (balances: Balances[]) => void;
}

export const BalancesContext = createContext<BalancesContextType | undefined>(undefined);

type BalancesProviderProps =
    {
        children: ReactNode;
    };

const initBalances:Balances[] = []

export const BalancesProvider = ({children}: BalancesProviderProps) => {
    const [balances, setBalances] = useState<Balances[]>(initBalances);



    return(
        <BalancesContext.Provider value={{balances,setBalances}}>
            {children}
        </BalancesContext.Provider>
    )

}

