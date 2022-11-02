import React from "react";
import { FormRegister } from "../../components/formregister";
import RegisterContainer from "./RegisterContainer";

function Register() {
  return (
    <RegisterContainer>
      <div className="FormContainer">
        <p>Logo</p>
        <h2>Cadastrar</h2>
        <FormRegister />
        <div className="BackToLogin">
          <span>Já possuí uma conta ?</span>
          <button>Login</button>
        </div>
      </div>
      <div className="ContentContainer"></div>
    </RegisterContainer>
  );
}

export default Register;
