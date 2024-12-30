import {Users} from "../entities";
import {createContext, ReactNode, useEffect, useState} from "react";


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

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, [user]);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}