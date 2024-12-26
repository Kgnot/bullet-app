// src/Components/__App.tsx
import { Balance } from "../_GlobeProperties/Balance/Balance.tsx";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar } from "../Header/Navbar.tsx";
import { ProfileGlobe } from "../ProfileGlobe/ProfileGlobe.tsx";

// lazy load:
const Settings = lazy(() => import("../../views/Configuration/Settings.tsx"));
const Dashboard = lazy(() => import("../../views/Dashboard/Dashboard.tsx"));
const Expenses = lazy(() => import("../../views/Expenses/Expenses.tsx"));
const Income = lazy(() => import("../../views/Income/Income.tsx"));
const Profile = lazy(() => import("../../views/Profile/Profile.tsx"));
const Wallets = lazy(() => import("../../views/Wallets/Wallets"));

export const __App = () => {
    return (
        <>
            <Balance />
            {/* Suspense para cargar vistas con carga perezosa */}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/income" element={<Income />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/wallets" element={<Wallets />} />
                </Routes>
            </Suspense>
            {/* Componentes comunes */}
            <Navbar />
            <ProfileGlobe />
        </>
    );
};
