import Login from "../pages/Login";
import GlobalStyles from "../assets/global_styles/Global.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../assets/global_styles/Reset";

export default function App() {
    return (
        <BrowserRouter>
            <Reset />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
