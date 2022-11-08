import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { WebContext } from "../context/webcontext";
import Chat from "../pages/chat";
import Feed from "../pages/feed";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/login";
import Register from "../pages/register";
import { PrivateRoutes } from "./PrivateRoutes";
import Perfil from "../pages/perfil";
import { FormEditProfile } from "../pages/DevDashboard/FormEditProfile";
import ContactUs from "../pages/contact";

function RoutesMain() {
  const { user } = useContext(WebContext);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="/perfil/editProfile"
          element={
            user?.isRecruiter ? <Navigate to="/home" /> : <FormEditProfile />
          }
        />
      </Route>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default RoutesMain;
