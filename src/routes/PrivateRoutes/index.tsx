import { Navigate } from "react-router-dom";
import HeaderDashboard from "../../components/headerDashboard";
import Dashboard from "../../pages/dashboard";

export const PrivateRoutes = () => {
  return true ? <Dashboard /> : <Navigate to="/landingPage" replace />;
};
