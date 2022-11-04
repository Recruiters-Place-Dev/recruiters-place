
import { Navigate, Outlet } from "react-router-dom";


export const PrivateRoutes = () => {
  return true ? <Outlet /> : <Navigate to="/landingPage" replace />;
}