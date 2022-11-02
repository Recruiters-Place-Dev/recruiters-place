import Logo from "../../assets/Logo.svg";
import { BoxSlogan, FormLogin, MainLogin, SectionLogin } from "./style";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaLogin from "../../validations/loginUser";
import Input from "../../components/Input";
import { LinkStyled } from "../../components/buttons/style";
import { useContext, useEffect } from "react";
import { WebContext } from "../../context/webcontext";
import { useNavigate } from "react-router-dom";

export interface iUserLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const { onLogin } = useContext(WebContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("RPlace:Token")) {
      navigate("/home");
    }
  }, []);

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
            <Input label="Email" type="text" register={register} id="email" login={true} />
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
              id="password"
              login={true}
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
