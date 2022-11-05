import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { WebContext } from "../../context/webcontext";

import { Header } from "./components/Header";

import { MainStyled } from "./style";
export const DevDashboard = () => {
  const { user } = useContext(WebContext);

  console.log("opaaaa");
  console.log(user);
 
  
  return (
    <>
      <Header />

      <MainStyled>
        <Outlet />
      </MainStyled>
    </>
  );
};
