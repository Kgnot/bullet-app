import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "../Components/Header/Navbar.tsx";
import { ProfileGlobe } from "../Components/ProfileGlobe/ProfileGlobe.tsx";

// Lazy-load de las vistas
const Settings = lazy(() => import("../views/Configuration/Settings.tsx"));
const Dashboard = lazy(() => import("../views/Dashboard/Dashboard.tsx"));
const Expenses = lazy(() => import("../views/Expenses/Expenses.tsx"));
const Income = lazy(() => import("../views/Income/Income.tsx"));
const Profile = lazy(() => import("../views/Profile/Profile.tsx"));

function App() {
    return (
        <>
            <Router>
                {/* Fallback para mostrar mientras se carga una vista */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/settings" Component={Settings} />
                        <Route path="/" Component={Dashboard} />
                        <Route path="/expenses" Component={Expenses} />
                        <Route path="/income" Component={Income} />
                        <Route path="/profile" Component={Profile} />
                    </Routes>
                </Suspense>
                {/* Elementos comunes */}
                <Navbar />
                <ProfileGlobe />
            </Router>
        </>
    );
}

export default App;
