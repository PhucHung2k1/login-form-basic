// src/components/ProtectedRoute.tsx
import { useAuth } from "../../context/AuthContext";
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Component,
}) => {
  const { isAuthenticated } = useAuth();
  console.log("🚀 ~ isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
