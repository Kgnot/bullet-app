// src/App.tsx
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; /* Acabo de cambiar BrowserRouter a HashRouter*/
import Login from "../views/_Login/Login.tsx";
import {__App} from "../Components/__App/__App.tsx";
import {ProtectedRoute} from "../Components/ProtectedRouter/ProtectedRouter.tsx";
import ProfileCreater from "../initSignViews/ProfileCreater/ProfileCreater.tsx";
import {AppProviders} from "../../context/_ProvidersContainer/AppProviders.tsx";
import {SignInProvider} from "../../context/SignIn.tsx";

function App() {
    return (
        //  La aplicacion va a estar encerrada en  varios contextos, como lo sería el de usuario
        <AppProviders>
            <Router>
                <Routes>
                    {/* Ruta de inicio de sesión */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sign/profile" element=
                        {<SignInProvider>
                            <ProfileCreater/>
                        </SignInProvider>}/>
                    {/* Rutas protegidas */}
                    <Route
                        path="/*"
                        element={
                            <ProtectedRoute>
                                <__App/>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AppProviders>
    );
}

export default App;
