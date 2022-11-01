import Logo from "../../assets/Logoo.svg";
import { BoxSlogan, FormLogin, MainLogin, SectionLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaLogin from "../../validations/loginUser";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
  });

  return (
    <MainLogin>
      <SectionLogin></SectionLogin>
      <SectionLogin>
        <div className="block"></div>
        <div className="containerLogin">
          <figure className="boxLogo">
            <img src={Logo} alt="Logo" />
          </figure>
          <FormLogin>
            <h3>Entrar</h3>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <button>Login</button>
            <p>Não tem uma conta ?</p>
            <button>Register</button>
          </FormLogin>
        </div>
      </SectionLogin>
      <BoxSlogan>
        <div className="blockBlue"></div>
        <div>
          <h2>Agilize o trabalho com parceiros</h2>
          <div className="boxLink">
            <a href="">Confira os benefícios ➡</a>
            <span></span>
          </div>
        </div>
      </BoxSlogan>
    </MainLogin>
  );
};
