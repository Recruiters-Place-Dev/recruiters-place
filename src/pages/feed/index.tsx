import { MouseEventHandler, useContext, useEffect, useState } from "react";
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
import { ModalComentReadContainer } from "../../components/modal/coment/read/style";
import ReadComent from "../../components/modal/coment/read";
import WriteComent from "../../components/modal/coment/write";

function Feed() {
  const { allUsers, openModalFeed, openModalComent, setComentId, user } =
    useContext<iWebContext>(WebContext);
  const [modalDeveloper, setModalDeveloper] = useState<iUser | null>(null);

  const developers = allUsers?.filter(
    (elem: iUser) => elem.isRecruiter === false
  );
  useEffect(() => {}, []);

  return (
    <ContainerFeed>
      {developers?.map((elem: iUser, index: number) => {
        return (
          <ContainerDeveloper key={index}>
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
                {techList.map((devTech) => (
                  <div>
                    <img src={devTech.dir} alt="devTech.tech" />
                  </div>
                ))}
              </Techs>

              <Contato>
                {user?.isRecruiter && (
                  <img src={duoChat} alt="chat" id={elem.id + ""} />
                )}

                <img
                  src={Vermais}
                  alt="chat"
                  id={elem.id + ""}
                  onClick={(event) => {
                    setComentId((event.target as HTMLImageElement).id);
                    openModalComent();
                  }}
                />
                <img
                  src={ChatImg}
                  alt="chat"
                  id={elem.id + ""}
                  onClick={() => {
                    openModalFeed();
                    setModalDeveloper(elem);
                  }}
                />
              </Contato>
            </DivDevelopersTech>
          </ContainerDeveloper>
        );
      })}
      <ModalFeed developer={modalDeveloper} />
      <ModalComent />
      <ReadComent />
      <WriteComent />
    </ContainerFeed>
  );
}

export default Feed;
