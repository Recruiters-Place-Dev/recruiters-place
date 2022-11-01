import Logo from "../../assets/Logoo.svg";
import { BoxSlogan, FormLogin, MainLogin, SectionLogin } from "./style";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaLogin from "../../validations/loginUser";
import Input from "../../components/Input";
import { LinkStyled } from "../../components/buttons/style";
import { useContext } from "react";
import { WebContext } from "../../context/webcontext";

export interface iUserLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const { onLogin } = useContext(WebContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
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
          <FormLogin onSubmit={handleSubmit(onLogin)}>
            <h3>Entrar</h3>
            <Input label="Email" type="text" register={register} data="email" />
            {
              <p className="errors">
                {errors.email && <RiErrorWarningFill />}
                {errors.email?.message}
              </p>
            }
            <Input
              label="Senha"
              type="password"
              register={register}
              data="password"
            />
            {
              <p className="errors">
                {errors.password && <RiErrorWarningFill />}
                {errors.password?.message}
              </p>
            }

            <button type="submit">Login</button>
            <span>Não tem uma conta ?</span>
            <LinkStyled to="/register">Register</LinkStyled>
          </FormLogin>
        </div>
      </SectionLogin>
      <BoxSlogan>
        <div className="blockBlue"></div>
        <div>
          <h2>Agilize o trabalho com parceiros</h2>
          <div className="boxLink">
            <a href="#">Confira os benefícios ➡</a>
            <span></span>
          </div>
        </div>
      </BoxSlogan>
    </MainLogin>
  );
};
