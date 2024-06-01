import React from "react";
import VerifyEmail from "./pages/VerifyEmail";
import AccountRestricted from "./pages/AccountRestricted";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="account-restricted" element={<AccountRestricted />} />
          <Route path="get-started" element={<GetStarted />} />
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
