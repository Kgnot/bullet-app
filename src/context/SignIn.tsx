// Contexto de SignIn
import {Balances, Expenses, Incomes} from "../entities";
import {createContext, ReactNode, useState} from "react";
import authService from "../service/api/AuthService.ts";
import {RegisterUserData} from "../service/interface.ts";

export interface SignInContextType {
    signIn: RegisterUserData;
    setSignIn: (s: RegisterUserData) => void;
    sendRequest: () => Promise<void>;
    addBasicInfo: (nickname: string, firstName: string, lastName: string,email:string,password:string) => void;
    updateDescriptionAndImage: (description: string, img: string) => void;
    addExpenses: (expenses: Expenses[]) => void;
    addExpense: (expense:Expenses) => void;
    deleteExpense:(index:number)=> void;
    addIncomes: (incomes: Incomes[]) => void;
    addIncome: (income:Incomes) => void;
    deleteIncome:(index:number)=> void;
    addBalances: (balances: Balances[]) => void;
}

export const SignInContext = createContext<SignInContextType | undefined>(undefined);

type SignInProviderProps = {
    children: ReactNode;
};

const initSignIn: RegisterUserData = {
    nickname: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    description: "",
    img: "",
    expenses: [],
    incomes: [],
    balances: [],
};

export const SignInProvider = ({ children }: SignInProviderProps) => {
    const [signIn, setSignIn] = useState<RegisterUserData>(initSignIn);

    // Función para enviar una solicitud al servidor
    const sendRequest = async () => {
         await authService.register(signIn);
         setSignIn(initSignIn); // volvemos a cambiarlo para que no generé un error feo xd
    };

    // Función para agregar información básica (nickname, firstName, lastName)
    const addBasicInfo = (nickname: string, firstName: string, lastName: string, email:string, password:string) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            nickname,
            firstName,
            lastName,
            email,
            password
        }));
    };

    // Función para actualizar descripción e imagen
    const updateDescriptionAndImage = (description: string, img: string) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            description,
            img,
        }));
    };

    // Función para agregar gastos (expenses)
    const addExpenses = (expenses: Expenses[]) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            expenses: [...prev.expenses, ...expenses],
        }));
    };

    const addExpense = (expense: Expenses) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            expenses: [...prev.expenses, expense],
        }));
    };

    const deleteExpense = (expenseId: number) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            expenses: prev.expenses.filter(expense => expense.id_expense !== expenseId),
        }));
    };

    // Función para agregar ingresos (incomes)
    const addIncomes = (incomes: Incomes[]) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            incomes: [...prev.incomes, ...incomes],
        }));
    };
    const addIncome = (income: Incomes) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            incomes: [...prev.incomes, income],
        }));
    };

    const deleteIncome = (incomeId: number) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            incomes: prev.incomes.filter(income => income.id_income !== incomeId),
        }));
    };
    // Balances

    const addBalances = (balances: Balances[]) => {
        setSignIn((prev:RegisterUserData) => ({
            ...prev,
            balances: [...prev.balances, ...balances],
        }));
    };

    return (
        <SignInContext.Provider
            value={{
                signIn,
                setSignIn,
                sendRequest,
                addBasicInfo,
                updateDescriptionAndImage,
                addExpenses,
                addExpense,
                deleteExpense,
                addIncomes,
                addIncome,
                deleteIncome,
                addBalances,
            }}
        >
            {children}
        </SignInContext.Provider>
    );
};
