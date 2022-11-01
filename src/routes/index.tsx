import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/login";
import Register from "../pages/register";
import { PrivateRoutes } from "./PrivateRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<h1>Auto Login</h1>} />
        <Route path="/dashboard" element={<h1>Dash</h1>} />
        <Route path="*" element={<h1>Not Found Page</h1>}></Route>
      </Route>

      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/landingPage" />} />
    </Routes>
  );
}

export default RoutesMain;
