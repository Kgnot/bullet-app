import {ReactNode} from "react";
import {useAuth} from "../../../state";
import { Navigate } from "react-router-dom";


interface ProtectedRouterProps {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouterProps) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};