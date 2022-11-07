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

// export interface iUserDeveloper {
//   email: string;
//   name: string;
//   isRecruiter?: boolean;
//   city: string | undefined;
//   schooling?: string | undefined;
//   cargo?: string | undefined;
//   empresa: string | undefined;
//   isWork?: boolean | undefined;
//   linkedin: string | undefined;
//   github?: string | undefined;
//   portfolio?: string | undefined;
//   fotoDoPerfil: string | undefined;
//   escolaridade: string | undefined;
//   bio?: string | undefined;
//   tech: {
//     html?: boolean;
//     css?: boolean;
//     js?: boolean;
//     react?: boolean;
//     ts?: boolean;
//     angular?: boolean;
//     vuejs?: boolean;
//     php?: boolean;
//     c?: boolean;
//     sass?: boolean;
//     node?: boolean;
//   };
//   id?: number;
// }

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
    openModalFeed,
    openModalComent,
    setComentId,
    user,
    openModalChat,
    setChatId,
    getAllUsers,
    filteredTechs,
    filterDevelopers,
    setFilterDevelopers,
  } = useContext<iWebContext>(WebContext);

  const [techsDeveloper, setTechsDeveloper] = useState<
    ({ tech: string; dir: string } | undefined)[] | null
  >(null);
  const [modalDeveloper, setModalDeveloper] = useState<iUser | null>(null);

  const filter = allUsers?.filter((elem: iUser) => elem.isRecruiter === false);
  useEffect(() => {
    if (!filterDevelopers) {
      setFilterDevelopers(filter);
    }
  }, [filter]);

  return (
    <ContainerFeed>
      {filterDevelopers?.map((elem: iUser, index: number) => {
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
                {filteredTechs(elem)?.map((value) => {
                  return (
                    <div key={value?.tech}>
                      <img src={value?.dir} alt={value?.tech} />
                      <Tag>{value?.tech}</Tag>
                    </div>
                  );
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
                    setTechsDeveloper(filteredTechs(elem));
                  }}
                />
              </Contato>
            </DivDevelopersTech>
            <ModalFeed developer={modalDeveloper} techs={techsDeveloper} />
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
