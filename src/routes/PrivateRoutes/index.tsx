import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import { useAuth } from "../../context/webcontext";

export const PrivateRoutes = () => {
  const { navigate } = useAuth();

  useEffect(() => {
    if (!localStorage.getItem("RPlace:Token")) {
      navigate("/");
    }
  });

  return true ? <Dashboard /> : <Navigate to="/landingPage" />;
};
