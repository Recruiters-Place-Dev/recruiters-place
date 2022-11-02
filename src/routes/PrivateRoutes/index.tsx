import { Navigate } from "react-router-dom";
import HeaderDashboard from "../../components/headerDashboard";

export const PrivateRoutes = () => {
  return true ? <HeaderDashboard /> : <Navigate to="/landingPage" replace />;
};
