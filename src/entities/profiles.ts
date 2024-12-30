import {Users} from "./user.ts";

export interface Profiles {
    id_profile:number;
    user:Users;
    first_name:string;
    last_name:string;
    img:string;
    description:string;
}