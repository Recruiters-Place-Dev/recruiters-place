import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { WebContext } from "../../context/webcontext";

export const PrivateRoutes = () => {
  return true ? <Outlet /> : <Navigate to="/landingPage" replace />;
};
