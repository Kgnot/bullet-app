import {Users} from "./user.ts";

export interface Expenses{
    id_expense?:number;
    user?: Users;
    type:string;
}