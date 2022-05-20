import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
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
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
