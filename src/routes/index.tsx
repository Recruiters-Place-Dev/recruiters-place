import { Route, Routes } from "react-router-dom";
import { DevDashboard } from "../pages/DevDashboard";
import { DevProfile } from "../pages/DevDashboard/components/DevProfile";
import { FormEditProfile } from "../pages/DevDashboard/components/FormEditProfile";
import Feed from "../pages/feed";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/login";
import Perfil from "../pages/perfil";
import Register from "../pages/register";
import { PrivateRoutes } from "./PrivateRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />

        <Route path="/devDashboard" element={<DevDashboard />}>
          <Route index element={<DevProfile />} />
          <Route path="editProfile" element={<FormEditProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RoutesMain;
