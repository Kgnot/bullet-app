import { createContext, useState, ReactNode } from "react";

export interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}


export const AuthContext = createContext<AuthContextProps| undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({ children }:ContextProviderProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={ {isAuthenticated,login, logout } }>
            {children}
        </AuthContext.Provider>
    )
}