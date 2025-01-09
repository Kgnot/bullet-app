import React from "react";
import {ProfileProvider} from "../profileContext.tsx";
import {AuthProvider} from "../authContext.tsx";
import {ExpensesProvider} from "../expensesContext.tsx";
import {WalletsProvider} from "../walletsContext.tsx";
import {BalancesProvider} from "../balancesContext.tsx";
// Agrega otros contextos según sea necesario

type AppProvidersProps = {
    children: React.ReactNode;
};

export const AppProviders = ({children}: AppProvidersProps) => {
    return (
        <ProfileProvider>
            <AuthProvider>
                <ExpensesProvider>
                    <WalletsProvider>
                        <BalancesProvider>
                            {children}
                        </BalancesProvider>
                    </WalletsProvider>
                </ExpensesProvider>
            </AuthProvider>
        </ProfileProvider>
    );
};