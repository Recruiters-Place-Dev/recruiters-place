import { HeaderContainer } from "./style";
import Logo from "../../assets/RPlace_Clear.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";

function HeaderDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="Logo" />
        <nav>
          <ul>
            <li>
              <button>Encontrar Devs</button>
            </li>
            <li>
              <Link to={"/perfil"}>Perfil</Link>
            </li>
            <li>
              <button onClick={() => handleLogout()}>Sair</button>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default HeaderDashboard;
