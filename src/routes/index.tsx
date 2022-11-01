import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { PrivateRoutes } from "./PrivateRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<h1>Auto Login</h1>} />
        <Route path="/dashboard" element={<h1>Dash</h1>} />
        <Route path="*" element={<h1>Not Found Page</h1>}></Route>
      </Route>

      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/register" element={<h1>Register Page</h1>} />

      <Route path="*" element={<Navigate to="/landingPage" />} />
    </Routes>
  );
}

export default RoutesMain;
