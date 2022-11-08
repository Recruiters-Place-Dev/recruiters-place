import Logo from "../../assets/Logo.svg";
import { BoxSlogan, FormLogin, MainLogin, SectionLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "../../validations/schemas";
import Input from "../../components/Input";

import { ButtonStylized, LinkStyled } from "../../components/buttons/style";
import HomemLogin from "../../assets/HomemLogin.svg";
import ImgLogin from "../../assets/ImgLogin.svg";

import { useContext, useEffect, useState } from "react";

import { WebContext } from "../../context/webcontext";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/ParagraphError";
import Slogan from "../../components/backgroundStyled";

export interface iUserLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const { onLogin, loading } = useContext(WebContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("RPlace:Token")) {
      navigate("/home");
    }
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(SchemaLogin),
  });

  return (
    <MainLogin>
      <div className="boxAnimated">
        <img src={ImgLogin} alt="ImgLogin" className="ImgLogin" />
        <img src={HomemLogin} alt="Logo" className="HomemLogin" />
        <span className="line1"></span>
        <span className="line2"></span>
      </div>
      <SectionLogin>
        {/* <div className="block"></div> */}
        <div className="containerLogin">
          <figure className="boxLogo">
            <img src={Logo} alt="Logo" />
          </figure>
          <FormLogin onSubmit={handleSubmit(onLogin)}>
            <h3>Entrar</h3>
            <Input
              label="Email"
              type="text"
              register={register}
              id="email"
              getValues={getValues}
              login={true}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Input
              label="Senha"
              type="password"
              register={register}
              id="password"
              login={true}
              getValues={getValues}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <ButtonStylized type="submit">
              {!loading && <>Login</>}
              {loading && (
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </ButtonStylized>

            <span>Não tem uma conta ?</span>
            <LinkStyled to="/register">Register</LinkStyled>
          </FormLogin>
        </div>
      </SectionLogin>

      <BoxSlogan>
        <Slogan />
      </BoxSlogan>
    </MainLogin>
  );
};
