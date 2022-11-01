import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/login";
import Register from "../pages/register";

function RoutesMain() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <button onClick={() => navigate("/login")}>login</button>
            <button onClick={() => navigate("/register")}>register</button>
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesMain;
