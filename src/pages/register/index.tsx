import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkStyled } from "../../components/buttons/style";
import { ContainerCenter } from "../../components/ContainerCenter/style";
import { FormRegister } from "../../components/formregister";

function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("RPlace:Token")) {
      navigate("/home");
    }
  }, []);

  return (
    <ContainerCenter>
      <h1>Cadastrar</h1>
      <FormRegister />
      <LinkStyled to="/login">Login</LinkStyled>
    </ContainerCenter>
  );
}

export default Register;
