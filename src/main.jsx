import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignupPage from "./pages/SignupPage";   // ✅ correct path
import LoginPage from "./pages/LoginPage";     // ✅ correct path
import ProfilePage from "./pages/ProfilePage"; // ✅ correct path
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
