import { useContext } from "react";
import { iWebContext, WebContext } from "../../context/webcontext";
import {
  DeveloperName,
  DevelopersCargo,
  DivBio,
  DivInfo,
  DivInfoEmail,
  DivLinks,
  DivPersonalInfo,
  FigureModal,
  ModalFeedContainer,
  Techs,
} from "./styles";
import { iUser } from "../../context/webcontext";
import FotoPerfil from "../../assets/carbon_user-avatar.svg";
import techList from "../../mockList/devTechs.json";
import { iUserDeveloper } from "../../pages/feed";

interface iModalFeedProps {
  developer: iUser | null;
}

function ModalFeed({ developer }: iModalFeedProps) {
  const { modalFeed, openModalFeed, allUsers } =
    useContext<iWebContext>(WebContext);

  return modalFeed ? (
    <ModalFeedContainer onClick={openModalFeed}>
      <div>
        <DivPersonalInfo>
          <FigureModal>
            <img src={FotoPerfil} alt="Foto de Perfil" />
          </FigureModal>
          <DivInfoEmail>
            <p>{developer?.city}</p>
            <p>{developer?.email}</p>
            <p>{developer?.schooling}</p>
          </DivInfoEmail>

          <DivLinks>
            <a href={developer?.linkedin}>Linkedin</a>
            <a href={developer?.github}>Github</a>
            <a href={developer?.portfolio}>Portifolio</a>
          </DivLinks>
        </DivPersonalInfo>
        <DivInfo>
          <DeveloperName>{developer?.name}</DeveloperName>
          <DevelopersCargo>{developer?.cargo}</DevelopersCargo>

          <DivBio>
            {developer?.bio ? (
              <p>{developer?.bio}</p>
            ) : (
              <p>{developer?.name} não possui uma bio</p>
            )}
          </DivBio>

          <Techs>
            {techList.map((devTech, index) => (
              <img key={index} src={devTech.dir} alt="devTech.tech" />
            ))}
          </Techs>
        </DivInfo>
      </div>
    </ModalFeedContainer>
  ) : null;
}

export default ModalFeed;
