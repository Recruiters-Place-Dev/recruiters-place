import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Dashboard from "../../pages/dashboard";

export const PrivateRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("RPlace:Token")) {
      navigate("/");
    }
  });
  return true ? <Dashboard /> : <Navigate to="/landingPage" replace />;
};
