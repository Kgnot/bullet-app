// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../context";
import { ProtectedRoute } from "../Components/ProtectedRouter/ProtectedRouter.tsx";
import Login from "../views/_Login/Login.tsx";
import { __App } from "../Components/__App/__App.tsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Ruta de inicio de sesión */}
                    <Route path="/login" element={<Login />} />

                    {/* Rutas protegidas */}
                    <Route
                        path="/*"
                        element={
                            <ProtectedRoute>
                                <__App />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
