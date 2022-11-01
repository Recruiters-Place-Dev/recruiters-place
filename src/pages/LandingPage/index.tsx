import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../assets/RPlace_Clear.svg";
import PeopleLanding from "../../assets/peoplelanding.svg";
import {
  MainStyled,
  Container,
  BackgroundStyled,
  TextAuth,
  TextBackground,
  TitleLogin,
  TitleBackground,
  ContainerImg,
  ContainerRedirect,
  Lines,
} from "./style";
import { LinkStyled } from "../../components/buttons/style";

export const LandingPage = () => {
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
              <TitleLogin>Entrar</TitleLogin>

              <LinkStyled to="/login">Login</LinkStyled>
              <TextAuth>Caso não tenha uma conta</TextAuth>
              <LinkStyled to="/register">Cadastro</LinkStyled>
            </ContainerRedirect>
          </Container>

          <BackgroundStyled>
            <TitleBackground>Agilize o trabalho com parceiros</TitleBackground>
            <TextBackground>Confira os beneficios</TextBackground>
          </BackgroundStyled>
        </MainStyled>
      </motion.div>
    </AnimatePresence>
  );
};
