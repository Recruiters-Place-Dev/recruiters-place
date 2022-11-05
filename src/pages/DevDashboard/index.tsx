import { Outlet } from "react-router-dom";

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
