import {
  SectionProfile,
  ListTech,
  NavLink,
  BioBox,
  NameAndWordBox,
  TitleName,
  TextWork,
  TextInfoDev,
  LinkEdit,
  EmptyBio,
  Bio,
  DivPhoto,
  DivInfoDev,
} from "./style";
import { AnimatePresence, motion } from "framer-motion";
import avatar from "../../assets/avatar.svg";

import pen from "../../assets/pen.svg";

import { WebContext } from "../../context/webcontext";

import techList from "../../mockList/devTechs.json";
import { useContext } from "react";

type tTypeTech =
  | "html"
  | "css"
  | "js"
  | "vuejs"
  | "sass"
  | "node"
  | "php"
  | "react"
  | "ts"
  | "angular"
  | "c";

export const DevDashboard = () => {
  const { user } = useContext(WebContext);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionProfile>
          <DivPhoto>
            <img src={user?.fotoDoPerfil || avatar} alt="img" />
          </DivPhoto>

          <DivInfoDev>
            <TextInfoDev>{user?.city}</TextInfoDev>
            <TextInfoDev>{user?.email}</TextInfoDev>
            <TextInfoDev>{user?.schooling}</TextInfoDev>
          </DivInfoDev>

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
            {user?.tech &&
              techList.map((current) => {
                if (user.tech[current.tech as tTypeTech]) {
                  return (
                    <li key={current.tech}>
                      <img src={current.dir} />
                    </li>
                  );
                }
              })}
          </ListTech>

          <LinkEdit to="editProfile">
            <img src={pen} alt="PenForEdit" />
          </LinkEdit>
        </SectionProfile>
      </motion.div>
    </AnimatePresence>
  );
};
