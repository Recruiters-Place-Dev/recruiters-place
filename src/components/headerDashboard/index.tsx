import React, { useState } from "react";
import { HeaderContainer } from "./style";
import Logo from "../../assets/RPlace_Clear.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { ListMock } from "../../mockList/listMock";

function HeaderDashboard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <HeaderContainer>
        <header>
          <img src={Logo} alt="" />
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setFilter(!filter);
                  }}
                >
                  Encontrar Devs
                </button>
              </li>
              <li>
                <button>Perfil</button>
              </li>
              <li>
                <button onClick={() => handleLogout()}>Sair</button>
              </li>
            </ul>
          </nav>
        </header>
        {filter && (
          <ul>
            <li>Todos</li>
            {ListMock.map((devType) => (
              <li key={devType}>{devType}</li>
            ))}
          </ul>
        )}
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default HeaderDashboard;
