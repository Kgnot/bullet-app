import {Balances, Expenses, Incomes} from "../entities";

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterUserData {
    nickname: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    description: string;
    img: string;
    expenses: Expenses[];
    incomes: Incomes[];
    balances: Balances[];
}