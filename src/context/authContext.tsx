import {createContext, useState, ReactNode, useEffect} from "react";
import apiService from "../service/api/apiService.ts";

export interface AuthContextProps {
    isAuthenticated: boolean;
    setIsAuthenticated:(auth:boolean)=>void
    checkAuthentication: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: ContextProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthentication = async () => {
        console.log("entrexd")
        try {
            const response:boolean = await apiService.isAuthenticated();
            console.log(response);
            setIsAuthenticated(response);
        } catch (error) {
            console.error("Error checking authentication:", error);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkAuthentication(); // Verificar al cargar la página
    }, [isAuthenticated]);
    return (
        <AuthContext.Provider value={{ isAuthenticated , checkAuthentication, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};