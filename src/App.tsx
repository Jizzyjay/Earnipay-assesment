import React from "react";
import VerifyEmail from "./pages/VerifyEmail";
import AccountRestricted from "./pages/AccountRestricted";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
        <Route path="verify/email" element={<VerifyEmail />} />
        <Route path="account/restricted" element={<AccountRestricted />} />
        <Route path="get/started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
