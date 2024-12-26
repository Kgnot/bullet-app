import { createContext, useState, ReactNode } from "react";

export interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type ContextProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: ContextProviderProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => JSON.parse(localStorage.getItem("isAuthenticated") || "false") // Leer del localStorage
    );

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", JSON.stringify(true)); // Guardar en localStorage
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", JSON.stringify(false)); // Eliminar de localStorage
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};