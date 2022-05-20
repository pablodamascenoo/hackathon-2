import { useState } from "react";
import FirstPage from "../pages/FistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../assets/global_styles/Reset";

export default function App() {
    return (
        <BrowserRouter>
            <Reset />
            <Routes>
                <Route path="/" element={<FirstPage />} />
            </Routes>
        </BrowserRouter>
    );
}
