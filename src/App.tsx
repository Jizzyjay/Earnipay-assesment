// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import GetStarted from "./pages/GetStarted";
// import Layout from "./pages/Layout";
// import VerifyEmail from "./pages/VerifyEmail";
// import AccountRestricted from "./pages/AccountRestricted";
// import ProtectedRoute from "./component/utils/ProtectedRoute";
// import { AuthProvider } from "./component/contexts/authContexts";

// function App() {
//   return (
//     <AuthProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/get/started" element={<GetStarted />} />
//         <Route element={<ProtectedRoute />}>
//           <Route path="/" element={<Layout />}>
//             <Route path="verify/email" element={<VerifyEmail />} />
//             <Route path="account/restricted" element={<AccountRestricted />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//         </AuthProvider>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import Layout from "./pages/Layout";
import VerifyEmail from "./pages/VerifyEmail";
import AccountRestricted from "./pages/AccountRestricted";
import { AuthProvider } from "./component/contexts/authContexts";
import ProtectedRoute from "./component/utils/ProtectedRoute";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/get/started" element={<GetStarted />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="verify/email" element={<VerifyEmail />} />
              <Route path="account/restricted" element={<AccountRestricted />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
