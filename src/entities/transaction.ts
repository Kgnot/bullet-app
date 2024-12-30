import {ExpensesHistory} from "./expensesHistory.ts";
import {IncomesHistory} from "./incomesHistory.ts";
import {Denomination} from "./denomination.ts";
import {Wallets} from "./wallets.ts";
import {Users} from "./user.ts";
import {Moods} from "./moods.ts";

export interface Transaction{
    id_transaction:number;
    id_expense_history:ExpensesHistory;
    id_income_history:IncomesHistory;
    value:number;
    id_denomination:Denomination;
    date:Date;
    month:number;
    year:number;
    id_wallet:Wallets;
    id_user:Users;
    id_mood:Moods

}