import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { WebContext } from "../../context/webcontext";
import Dashboard from "../../pages/dashboard";

export const PrivateRoutes = () => {
  return true ? <Dashboard /> : <Navigate to="/landingPage" replace />;
};
