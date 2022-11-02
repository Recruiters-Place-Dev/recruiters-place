import React from "react";
import { HeaderContainer } from "./style";
import Logo from "../../assets/RPlace_Clear.svg";
import { useNavigate } from "react-router-dom";

function HeaderDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li>
            <button>Encontrar Devs</button>
          </li>
          <li>
            <button>Perfil</button>
          </li>
          <li>
            <button onClick={() => handleLogout()}>Sair</button>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default HeaderDashboard;
