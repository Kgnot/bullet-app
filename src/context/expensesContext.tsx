import {Expenses} from "../entities";
import {createContext, ReactNode, useEffect, useState} from "react";


export interface ExpensesContextType {
    expenses: Expenses[];
    setExpenses: (expenses: Expenses[]) => void;
    expensesTypes: string[];
}

export const ExpensesContext = createContext<ExpensesContextType | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
}

const initialExpenses: Expenses[] =
    [
        {
            id_expense: 0,
            type: "comida"
        }
    ]


export const ExpensesProvider = ({children}: ContextProviderProps) => {
    const [expenses, setExpenses] = useState<Expenses[]>(initialExpenses);

    const expensesTypes: string[] = expenses.map(expenses => expenses.type);


    useEffect(() => {
        const expenses = localStorage.getItem('expenses');
        if (expenses) {
            setExpenses(JSON.parse(expenses));
        }
    }, [expenses]);

    return (
        <ExpensesContext.Provider value={{expenses, setExpenses, expensesTypes}}>
            {children}
        </ExpensesContext.Provider>
    )
}