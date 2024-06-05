import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContexts";

const ProtectedRoute = () => {
  const { userLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
