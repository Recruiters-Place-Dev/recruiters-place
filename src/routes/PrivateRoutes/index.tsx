import { Navigate, Outlet } from "react-router-dom";
import HeaderDashboard from "../../components/headerDashboard";

export const PrivateRoutes = () => {
  return true ? <Outlet /> : <Navigate to="/landingPage" replace />;
};
