import React from "react";
import {UserProvider} from "../userContext.tsx";
import {AuthProvider} from "../authContext.tsx";
import {ExpensesProvider} from "../expensesContext.tsx";
import {WalletsProvider} from "../WalletsContext.tsx";
// Agrega otros contextos según sea necesario

type AppProvidersProps = {
    children: React.ReactNode;
};

export const AppProviders = ({children}: AppProvidersProps) => {
    return (
        <UserProvider>
            <AuthProvider>
                <ExpensesProvider>
                    <WalletsProvider>
                        {children}
                    </WalletsProvider>
                </ExpensesProvider>
            </AuthProvider>
        </UserProvider>
    );
};