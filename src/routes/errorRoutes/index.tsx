import { Navigate } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";

export const ErrorRoute = () => {
  return true ? <Dashboard /> : <Navigate to="/notfound" replace />;
};
