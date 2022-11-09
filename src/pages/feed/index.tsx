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
  Tag,
  Techs,
} from "./styles";
import ModalFeed from "../../components/modalFeed";
import ModalComent from "../../components/modal/coment/duality";
import ReadComent from "../../components/modal/coment/read";
import WriteComent from "../../components/modal/coment/write";
import ModalChat from "../../components/modal/chat";
import { v4 as uuid } from "uuid";
import { LogOffModal } from "../../components/logoff";
import { Navigate, useNavigate } from "react-router-dom";

export interface iTech {
  tech: string;
  dir: string;
}

export interface iTechs {
  techs: iTech;
}

function Feed() {
  const {
    allUsers,
    modalFeed,
    setModalFeed,
    modalComent,
    setModalComent,
    setComentId,
    user,
    modalChat,
    setModalChat,
    setChatId,
    filteredTechs,
    filterDevelopers,
    setFilterDevelopers,
  } = useContext<iWebContext>(WebContext);

  const [techsDeveloper, setTechsDeveloper] = useState<
    ({ tech: string; dir: string } | undefined)[] | null
  >(null);
  const [modalDeveloper, setModalDeveloper] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (filterDevelopers) {
      console.log(filterDevelopers);
    }
    setFilterDevelopers(
      allUsers?.filter((elem: iUser) => elem.isRecruiter === false)
    );
    console.log(filterDevelopers);

    if (!localStorage.getItem("RPlace:Token")) {
      navigate("/");
    }
  }, []);

  return (
    <ContainerFeed>
      {filterDevelopers?.map((elem: iUser) => (
        <ContainerDeveloper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          key={uuid()}
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
              {filteredTechs(elem)?.map((value) => (
                <div key={uuid()}>
                  <img src={value?.dir} alt={value?.tech} />
                  <Tag>{value?.tech}</Tag>
                </div>
              ))}
            </Techs>

            <Contato>
              {user?.isRecruiter && (
                <img
                  src={duoChat}
                  alt="chat"
                  id={elem.id + ""}
                  onClick={(event) => {
                    setChatId((event.target as HTMLImageElement).id);
                    setModalChat(!modalChat);
                  }}
                />
              )}

              <img
                src={Vermais}
                alt="coments"
                id={elem.id + ""}
                onClick={(event) => {
                  setComentId((event.target as HTMLImageElement).id);
                  setModalComent(!modalComent);
                }}
              />
              <img
                src={ChatImg}
                alt="perfil"
                id={elem.id + ""}
                onClick={() => {
                  setModalFeed(!modalFeed);
                  setModalDeveloper(elem);
                  setTechsDeveloper(filteredTechs(elem));
                }}
              />
            </Contato>
          </DivDevelopersTech>
          <ModalFeed developer={modalDeveloper} techs={techsDeveloper} />
        </ContainerDeveloper>
      ))}

      <ModalComent />
      <ReadComent />
      <WriteComent />
      <ModalChat />
      <LogOffModal />
    </ContainerFeed>
  );
}

export default Feed;
