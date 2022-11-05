import {
  SectionProfile,
  ListTech,
  NavLink,
  BioBox,
  DevInfoBox,
  NameAndWordBox,
  TitleName,
  TextWork,
  TextInfoDev,
  LinkEdit,
  EmptyBio,
  Bio
} from "./style";

import css from "../../assets/css.png";
import html from "../../assets/html.svg";
import avatar from "../../assets/avatar.svg";
import js from "../../assets/js.svg";
import pen from "../../assets/pen.svg";
import react from "../../assets/react.svg";
import ts from "../../assets/ts.svg";
import node from "../../assets/node.png";
import angular from "../../assets/angular.svg";
import vuejs from "../../assets/vue.png";
import { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";

export const DevProfile = () => {
  const { user } = useContext(WebContext);

  return (
    <SectionProfile>
      <DevInfoBox>
        <img src={user?.fotoDoPerfil || avatar} alt="img" />
        <div>
          <TextInfoDev>{user?.city}</TextInfoDev>
          <TextInfoDev>{user?.email}</TextInfoDev>
          <TextInfoDev>{user?.escolaridade}</TextInfoDev>
        </div>
        <NavLink>
          <a href={user?.linkedin} target="_blank">
            LinkedIn
          </a>
          <a href={user?.portfolio} target="_blank">
            Portifolio
          </a>
          <a href={user?.github} target="_blank">
            GitHub
          </a>
        </NavLink>
      </DevInfoBox>

      <NameAndWordBox>
        <TitleName>{user?.name}</TitleName>

        <TextWork>{user?.cargo}</TextWork>
      </NameAndWordBox>

      <BioBox>
        {user?.bio ? (
          <Bio>{user?.bio}</Bio>
        ) : (
          <EmptyBio>
            Você não possui uma bio, por favor atualize seu perfil.
          </EmptyBio>
        )}
      </BioBox>

      <ListTech>
        {user?.tech.html && (
          <li>
            <img src={html} />
          </li>
        )}

        {user?.tech?.css && (
          <li>
            <img src={css} />
          </li>
        )}

        {user?.tech?.js && (
          <li>
            <img src={js} />
          </li>
        )}
        {user?.tech?.react && (
          <li>
            <img src={react} />
          </li>
        )}
        {user?.tech?.ts && (
          <li>
            <img src={ts} />
          </li>
        )}
        {user?.tech?.node && (
          <li>
            <img src={node} />
          </li>
        )}
        {user?.tech?.angular && (
          <li>
            <img src={angular} />
          </li>
        )}
        {user?.tech?.vuejs && (
          <li>
            <img src={vuejs} />
          </li>
        )}
      </ListTech>

      <LinkEdit to="editProfile">
        <img src={pen} alt="PenForEdit" />
      </LinkEdit>
    </SectionProfile>
  );
};
