import {Users} from "./user.ts";

export interface Incomes{
    id_income?:number;
    user?: Users;
    type:string;
}