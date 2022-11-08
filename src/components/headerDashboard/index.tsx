import { HeaderContainer } from "./style";
import Logo from "../../assets/RPlace_Clear.svg";
import { useNavigate, useParams } from "react-router-dom";
import { MouseEventHandler, useContext, useState } from "react";
import { ListMock } from "../../mockList/devType";
import techList from "../../mockList/devTechs.json";
import { LogOffModal } from "../../components/logoff";
import { iUser, WebContext } from "../../context/webcontext";
import { v4 as uuid } from "uuid";
import { array } from "yup";
import { Id } from "react-toastify";

function HeaderDashboard() {
  const { home } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);

  const { setFilterDevelopers, allUsers, logOff, setLogOff } =
    useContext(WebContext);

  function handleLogout() {
    setLogOff(true);
  }

  function goToPerfil() {
    setFilter(false);
    navigate("perfil");
  }
  function goToChat() {
    setFilter(false);
    navigate("chat");
  }

  function reset() {
    navigate("/home");
    setFilterDevelopers(
      allUsers?.filter((elem: iUser) => elem.isRecruiter === false)
    );
  }

  function handleFilter(event: string) {
    const arrayfiltro: iUser[] | undefined = [] as iUser[] | undefined;
    allUsers?.map((elem: iUser) => {
      if (elem.tech) {
        const techs = Object.entries<boolean>(
          elem?.tech as { [s: string]: boolean } | ArrayLike<boolean>
        );
        techs?.filter((elemento: [string, boolean]) => {
          if (elemento[1]) {
            if (elem?.isRecruiter === false && elemento[0] === event) {
              arrayfiltro?.push(elem);
            }
          }
        });
      }
      setFilterDevelopers(arrayfiltro);
    });
  }
  function handleFilterDev(event: string) {
    const arrayfiltro: iUser[] = [];
    allUsers?.map((elem: iUser) => {
      if (elem.cargo === event) {
        arrayfiltro.push(elem);
      }
    });

    setFilterDevelopers(arrayfiltro);
  }

  return (
    <>
      <HeaderContainer>
        {/* {logOff && <LogOffModal />} */}
        <header>
          <img onClick={() => reset()} src={Logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <button onClick={() => goToPerfil()}>Perfil</button>
                <span className="spanBorder"></span>
              </li>
              <li>
                <button onClick={() => goToChat()}>Mensagens</button>
                <span className="spanBorder"></span>
              </li>
              {home === "home" && (
                <li>
                  <button
                    onClick={() => {
                      setFilter(!filter);
                    }}
                  >
                    Encontrar Devs
                    <span className="spanBorder"></span>
                  </button>
                </li>
              )}
              <li>
                <button onClick={() => handleLogout()}>Sair</button>
                <span className="spanBorder"></span>
              </li>
            </ul>
          </nav>
        </header>
        {filter && (
          <div>
            <ul>
              <li>Todos</li>
              {ListMock.map((devType) => (
                <li key={uuid()}>
                  <button
                    id={devType}
                    onClick={(event) => {
                      handleFilterDev((event.target as HTMLButtonElement).id);
                    }}
                  >
                    {devType}
                  </button>
                </li>
              ))}
            </ul>
            <ul>
              <li>Tecnologias</li>
              {techList &&
                techList.map((devTech) => (
                  <li key={uuid()}>
                    <img
                      id={devTech.tech}
                      src={devTech.dir}
                      alt="devTech.tech"
                      onClick={(event) => {
                        handleFilter((event.target as HTMLImageElement).id);
                      }}
                    ></img>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </HeaderContainer>
    </>
  );
}

export default HeaderDashboard;
