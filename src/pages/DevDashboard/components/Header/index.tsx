import { HeaderStyled, Container, ButtonLogout } from "./style";
import Logo from "../../../../assets/RPlace_Clear.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    window.localStorage.clear();
  };

  return (
    <HeaderStyled>
      <Container>
        <img src={Logo} alt="Logo"></img>
        <ButtonLogout onClick={() => logout()}>Sair</ButtonLogout>
      </Container>
    </HeaderStyled>
  );
};
