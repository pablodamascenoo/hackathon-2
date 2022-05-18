import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../assets/global_styles/Reset";

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<h1>hello world!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
