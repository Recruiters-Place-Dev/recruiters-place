import { useContext } from "react";
import { iUser, iWebContext, WebContext } from "../../context/webcontext";
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
import FotoPerfil from "../../assets/carbon_user-avatar.svg";

interface iModalFeedProps {
  developer: iUser | null;
  techs: ({ tech: string; dir: string } | undefined)[] | null;
}

function ModalFeed({ developer, techs }: iModalFeedProps) {
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
            {techs?.map((devTech) => (
              <img src={devTech?.dir} alt="devTech.tech" />
            ))}
          </Techs>
        </DivInfo>
      </div>
    </ModalFeedContainer>
  ) : null;
}

export default ModalFeed;
