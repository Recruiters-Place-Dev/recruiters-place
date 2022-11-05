import { Route, Routes } from "react-router-dom";
import Chat from "../pages/chat";
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
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
