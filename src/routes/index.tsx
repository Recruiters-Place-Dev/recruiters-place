import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PerfilRech from "../components/perfilRech";
import { WebContext } from "../context/webcontext";
import Dashboard from "../pages/dashboard";
import { DevDashboard } from "../pages/DevDashboard";
import { DevProfile } from "../pages/DevDashboard/components/DevProfile";
import { FormEditProfile } from "../pages/DevDashboard/components/FormEditProfile";
import Feed from "../pages/feed";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/login";
import Register from "../pages/register";
import { PrivateRoutes } from "./PrivateRoutes";

function RoutesMain() {
  const { user } = useContext(WebContext);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<PrivateRoutes />}>
        {user?.isRecruiter ? (
          <>
            <Route path="/home" element={<Dashboard />}>
              <Route index element={<Feed />} />
              <Route path="perfil" element={<PerfilRech />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/devDashboard" element={<DevDashboard />}>
              <Route index element={<DevProfile />} />
              <Route path="editProfile" element={<FormEditProfile />} />
            </Route>
            <Route path="*" element={<Navigate to="/devDashboard" />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default RoutesMain;
