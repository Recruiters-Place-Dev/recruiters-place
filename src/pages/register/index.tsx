/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../../assets/Logo.svg";
import sprite from "../../assets/sprite.svg"
import { LinkStyled } from "../../components/buttons/style";
import { FormRegister } from "../../components/formregister";
import RegisterContainer from "./RegisterContainer";

function Register() {
  return (
    <RegisterContainer>
      <div className="FormContainer">
        <img src={Logo} alt="Logo" />
        <h2>Cadastrar</h2>
        <FormRegister />
        <div className="BackToLogin">
          <span>Já possuí uma conta ?</span>
          <LinkStyled to={"/login"}>Login</LinkStyled>
        </div>
      </div>
      <div className="ContentContainer"></div>
      <div className="SquareContent">
        <img src={sprite} alt="" />
        <div>
          <h3>Agiliza o trabalho com parceiros</h3>
          <a href="#">Confira os benefícios ➡</a>
        </div>
      </div>
      <div className="square"></div>
      <div className="halfSquare"></div>
    </RegisterContainer>
  );
}

export default Register;
