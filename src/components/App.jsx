import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import GlobalStyles from "../assets/global_styles/Global.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../assets/global_styles/Reset";

import { AuthProvider } from "../context/authContext";

export default function App() {
    return (
        <BrowserRouter>
            <Reset />

            <GlobalStyles />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/HomePage" element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
