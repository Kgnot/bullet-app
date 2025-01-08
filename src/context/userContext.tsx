import {Users} from "../entities";
import {createContext, ReactNode, useEffect, useState} from "react";
import apiService from "../service/api/apiService.ts";


// Que espero que retorne mi context? :
export interface UserContextType {
    user: Users;
    setUser: (user: Users) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
}

const initialUser: Users =
    {
        id_user: 0,
        nickname: "defecto",
        email: "defecto@def.com",
        password: "esto boraré"
    }


export const UserProvider = ({children}: ContextProviderProps) => {
    const [user, setUser] = useState<Users>(initialUser);

    const initUser = async () => {
        const response = await apiService;
    }



    useEffect(() => {
    }, [user]);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}