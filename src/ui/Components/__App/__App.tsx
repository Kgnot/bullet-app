// src/Components/__App.tsx
import {Balance} from "../_GlobeProperties/Balance/Balance.tsx";
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {Navbar} from "../Header/Navbar.tsx";
import {ProfileGlobe} from "../ProfileGlobe/ProfileGlobe.tsx";
import {Logout} from "../LogOut/Logout.tsx";
import Settings from "../../views/Configuration/Settings.tsx";
import Dashboard from "../../views/Dashboard/Dashboard.tsx";
import Expenses from "../../views/Expenses/Expenses.tsx";
import Income from "../../views/Income/Income.tsx";
import Profile from "../../views/Profile/Profile.tsx";
import Wallets from "../../views/Wallets/Wallets.tsx";



export const __App = () => {
    return (
        <>

                <Balance/>
                {/* Suspense para cargar vistas con carga perezosa */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>

                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/expenses" element={<Expenses/>}/>
                        <Route path="/income" element={<Income/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/wallets" element={<Wallets/>}/>
                    </Routes>
                </Suspense>
                {/* Componentes comunes */}
                <Navbar/>
                <ProfileGlobe/>
                <Logout/>
        </>
    );
};
