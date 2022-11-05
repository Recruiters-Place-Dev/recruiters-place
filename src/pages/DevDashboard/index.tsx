import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { WebContext } from "../../context/webcontext";

import { Header } from "./components/Header";

import { MainStyled } from "./style";
export const DevDashboard = () => {
  return (
    <>
      <Header />

      <MainStyled>
        <Outlet />
      </MainStyled>
    </>
  );
};
