import {Users} from "./user.ts";
import { Wallets } from "./wallets.ts";


export interface Balances{
    id_balances:number;
    user:Users;
    wallet:Wallets
    amount:number;
}

