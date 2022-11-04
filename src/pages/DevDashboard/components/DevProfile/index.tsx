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
import vue from "../../assets/vue.png";
import { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";

export const DevProfile = () => {
  const { user } = useContext(WebContext);

  console.log(user)

  return (
    <SectionProfile>
      <DevInfoBox>
        <img src={avatar} alt="img" />
        <div>
          <TextInfoDev>Mateus Leme</TextInfoDev>
          <TextInfoDev>leomartins2001@gmai.com</TextInfoDev>
          <TextInfoDev>Ensino medio completo</TextInfoDev>
        </div>
        <NavLink>
          <a>LinkedIn</a>
          <a>Portifolio</a>
          <a>GitHub</a>
        </NavLink>
      </DevInfoBox>

      <NameAndWordBox>
        <TitleName>Lucas Iury Costa Schmidt</TitleName>

        <TextWork>Desenvolvedor Front End</TextWork>
      </NameAndWordBox>

      <BioBox>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          veniam ratione quos. Totam autem officiis quibusdam culpa neque,
          voluptatem quae dignissimos expedita voluptates optio debitis dolor
          earum amet reprehenderit odit. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quia ratione
        </p>
      </BioBox>

      <ListTech>
        {user?.tech?.html && (
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
        {user?.tech?.vue && (
          <li>
            <img src={vue} />
          </li>
        )}
      </ListTech>

      <LinkEdit to="editProfile">
        <img src={pen} alt="PenForEdit" />
      </LinkEdit>
    </SectionProfile>
  );
};
