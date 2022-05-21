import Login from "../pages/Login";
import QuestionsPage from "../pages/QuestionsPage";
import HomePage from "../pages/HomePage";
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
                    <Route path="/question/:id" element={<QuestionsPage />} />
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
