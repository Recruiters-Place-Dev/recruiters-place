import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../assets/RPlace_Clear.svg";

import PeopleLanding from "../../assets/peoplelanding.png";

import {
  MainStyled,
  Container,
  BackgroundStyled,
  TextAuth,
  TextBackground,
  TitleLogin,
  TitleAuth,
  TitleBackground,
  SloganBackground,
  ContainerImg,
  ContainerRedirect,
  Lines,
  ButtonLogout,
  ContainerWelcome,
} from "./style";
import { LinkStyled } from "../../components/buttons/style";
import { useContext } from "react";
import { iWebContext, WebContext } from "../../context/webcontext";

export const LandingPage = () => {
  const { setUser, user } = useContext<iWebContext>(WebContext);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MainStyled>
          <Lines></Lines>

          <Container>
            <ContainerImg>
              <img src={PeopleLanding} alt="People" />
            </ContainerImg>

            <ContainerRedirect>
              <img src={Logo} alt="Logo site" />
              {localStorage.getItem("RPlace:Token") ? (
                <>
                  <ContainerWelcome>
                    <TitleAuth>
                      Bem vindo:
                      <br />
                      {user?.email}
                    </TitleAuth>
                  </ContainerWelcome>
                  <LinkStyled to="/home">Dashboard</LinkStyled>
                  <TextAuth>Deseja entrar em outra conta ?</TextAuth>
                  <ButtonLogout
                    onClick={() => {
                      window.localStorage.clear();
                      setUser("");
                    }}
                  >
                    sair
                  </ButtonLogout>
                </>
              ) : (
                <>
                  <TitleLogin>Entrar</TitleLogin>

                  <LinkStyled to="/login">Login</LinkStyled>
                  <TextAuth>Caso não tenha uma conta</TextAuth>
                  <LinkStyled to="/register">Register</LinkStyled>
                </>
              )}
            </ContainerRedirect>
          </Container>

          <BackgroundStyled>
            <SloganBackground>Recrutamento em um só lugar</SloganBackground>
            <TitleBackground>Agilize o trabalho com parceiros</TitleBackground>
            <TextBackground>Confira os beneficios</TextBackground>
          </BackgroundStyled>
        </MainStyled>
      </motion.div>
    </AnimatePresence>
  );
};
