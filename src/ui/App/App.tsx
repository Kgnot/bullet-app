import './App.css'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Settings} from "../views/Configuration/Settings.tsx";
import {Dashboard} from "../views/Dashboard/Dashboard.tsx";
import {Expenses} from "../views/Expenses/Expenses.tsx";
import {Income} from "../views/Income/Income.tsx";
import {Profile} from "../views/Profile/Profile.tsx";
import {Navbar} from "../Components/Header/Navbar.tsx";
import {ProfileGlobe} from "../Components/ProfileGlobe/ProfileGlobe.tsx";

function App() {
    return (
        <>
            <Router>
                <ProfileGlobe/>
                <Routes>
                    <Route path="/settings" Component={Settings}/>
                    <Route path="/" Component={Dashboard}/>
                    <Route path="/expenses" Component={Expenses}/>
                    <Route path="/income" Component={Income}/>
                    <Route path="/profile" Component={Profile}/>
                </Routes>
                <Navbar/>
            </Router>
        </>
    )
}

export default App
