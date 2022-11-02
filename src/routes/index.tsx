import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/login";
import Register from "../pages/register";
import { PrivateRoutes } from "./PrivateRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/landingPage" />} />
    </Routes>
  );
}

export default RoutesMain;
