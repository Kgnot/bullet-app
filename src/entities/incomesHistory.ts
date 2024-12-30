import {Incomes} from "./incomes.ts";
import {IncomesTypes} from "./incomesTypes.ts";

export interface IncomesHistory{
    id_income_history:number;
    id_income:Incomes;
    id_income_type:IncomesTypes;
}