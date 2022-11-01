import React from "react";
import { LinkStyled } from "../../components/buttons/style";
import { ContainerCenter } from "../../components/ContainerCenter/style";
import { FormRegister } from "../../components/formregister";

function Register() {
  return (
    <ContainerCenter>
      <h1>Cadastrar</h1>
      <FormRegister />
      <LinkStyled to="/login">Login</LinkStyled>
    </ContainerCenter>
  );
}

export default Register;
