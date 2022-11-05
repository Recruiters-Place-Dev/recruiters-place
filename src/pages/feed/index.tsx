import { useContext, useEffect, useState } from "react";
import FotoPerfil from "../../assets/carbon_user-avatar.svg";
import ChatImg from "../../assets/ant-design_file-search-outlined.svg";
import Vermais from "../../assets/bi_chat-dots-fill.svg";
import duoChat from "../../assets/chat.png";
import { iUser, iWebContext, WebContext } from "../../context/webcontext";
import {
  ContainerDeveloper,
  ContainerFeed,
  Contato,
  DeveloperName,
  DevelopersCargo,
  DivDevelopersInfo,
  DivDevelopersLinks,
  DivDevelopersName,
  DivDevelopersTech,
  Figure,
  Techs,
} from "./styles";

import techList from "../../mockList/devTechs.json";
import ModalFeed from "../../components/modalFeed";
import ModalComent from "../../components/modal/coment/duality";
import ReadComent from "../../components/modal/coment/read";
import WriteComent from "../../components/modal/coment/write";
import ModalChat from "../../components/modal/chat";

interface iUserDeveloper {
  email: string;
  name: string;
  isRecruiter?: boolean;
  city: string | undefined;
  schooling?: string | undefined;
  cargo?: string | undefined;
  empresa: string | undefined;
  isWork?: boolean | undefined;
  linkedin: string | undefined;
  github?: string | undefined;
  portfolio?: string | undefined;
  bio?: string | undefined;
  tech: {
    html: boolean;
    css: boolean;
    js: boolean;
    react: boolean;
    ts: boolean;
    angular: boolean;
    vuejs: boolean;
    php: boolean;
    c: boolean;
    sass: boolean
  };
  id?: number;
}

function Feed() {
  const {
    allUsers,
    openModalFeed,
    openModalComent,
    setComentId,
    user,
    openModalChat,
    setChatId,
  } = useContext<iWebContext>(WebContext);
  const [modalDeveloper, setModalDeveloper] = useState<iUser | null>(null);

  const developers = allUsers?.filter(
    (elem: iUser) => elem.isRecruiter === false
  );
  useEffect(() => {}, []);

  return (
    <ContainerFeed>
      {developers?.map((elem: iUserDeveloper, index: number) => {
        // Object.entries(elem.tech)
        const olhatecnologia = Object.entries(elem.tech);
        const meupau = olhatecnologia.filter((elem) => {
          return elem[1] === true;
        });

        const minhasbolas = meupau.map((elem) => {
          return techList.find((E) => elem[0] === E.tech);
        });

        return (
          <ContainerDeveloper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={index}
          >
            <DivDevelopersInfo>
              <Figure>
                <img src={FotoPerfil} alt="Foto de Perfil" />
              </Figure>
              <p>{elem?.email}</p>
              <p>{elem?.city}</p>
              <p>{elem?.schooling}</p>
            </DivDevelopersInfo>
            <DivDevelopersName>
              <DeveloperName>{elem?.name}</DeveloperName>

              <DevelopersCargo>{elem?.cargo}</DevelopersCargo>

              <DivDevelopersLinks>
                <a href={elem?.linkedin}>Linkedin</a>
                <a href={elem?.github}>Github</a>
                <a href={elem?.portfolio}>Portifolio</a>
              </DivDevelopersLinks>
            </DivDevelopersName>

            <DivDevelopersTech>
              <Techs>
                {minhasbolas.map((element: any) => {
                  console.log(element.tech);
                  return <img src={element.dir} alt={element.tech} />;
                })}
              </Techs>

              <Contato>
                {user?.isRecruiter && (
                  <img
                    src={duoChat}
                    alt="chat"
                    id={elem.id + ""}
                    onClick={(event) => {
                      setChatId((event.target as HTMLImageElement).id);
                      openModalChat();
                    }}
                  />
                )}

                <img
                  src={Vermais}
                  alt="coments"
                  id={elem.id + ""}
                  onClick={(event) => {
                    setComentId((event.target as HTMLImageElement).id);
                    openModalComent();
                  }}
                />
                <img
                  src={ChatImg}
                  alt="perfil"
                  id={elem.id + ""}
                  onClick={() => {
                    openModalFeed();
                    setModalDeveloper(elem);
                  }}
                />
              </Contato>
            </DivDevelopersTech>
            <ModalFeed developer={modalDeveloper} />
          </ContainerDeveloper>
        );
      })}

      <ModalComent />
      <ReadComent />
      <WriteComent />
      <ModalChat />
    </ContainerFeed>
  );
}

export default Feed;
