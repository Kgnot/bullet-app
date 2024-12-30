import {Expenses} from "./expenses.ts";
import {ExpensesType} from "./expensesType.ts";

export interface ExpensesHistory{
    id_expense_history:number;
    id_expense:Expenses
    id_expense_type:ExpensesType;
}