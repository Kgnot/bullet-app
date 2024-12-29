// src/App.tsx
import {HashRouter as Router, Routes, Route} from "react-router-dom"; /* Acabo de cambiar BrowserRouter a HashRouter*/
import {AuthProvider} from "../../context";
import Login from "../views/_Login/Login.tsx";
import {__App} from "../Components/__App/__App.tsx";
import {ProtectedRoute} from "../Components/ProtectedRouter/ProtectedRouter.tsx";
import ProfileCreater from "../initSignViews/ProfileCreater/ProfileCreater.tsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Ruta de inicio de sesión */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sign/profile" element={<ProfileCreater/>}/>
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
        </AuthProvider>
    );
}

export default App;
