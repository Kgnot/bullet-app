import {Users} from "./user.ts";
import {GoalsType} from "./goalsType.ts";

export interface Goals{
    id_goal:number;
    id_user:Users;
    date:Date; // quiza toca mirar para manejar fechas de inicio y final, pero..... ahi miramos :c
    id_goal_type:GoalsType;
}