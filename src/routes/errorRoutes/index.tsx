import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Dashboard from "../../pages/dashboard";

export const ErrorRoute = () => {
  const navigate = useNavigate();

  return true ? <Dashboard /> : <Navigate to="/notfound" replace />;
};
