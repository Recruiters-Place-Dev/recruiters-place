import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { ContainerFormContact, ContainerImg, MainContainer } from "./style";
import Logo from "../../assets/Logo.svg";
import { ButtonStylized } from "../../components/buttons/style";
function ContactUs() {
  const { register, handleSubmit, getValues } = useForm({});
  return (
    <MainContainer>
      <ContainerImg>
        <img src={Logo} alt="" />
      </ContainerImg>
      <ContainerFormContact>
        <Input
          type="text"
          label="Nome"
          id="name"
          register={register}
          getValues={getValues}
        />
        <Input
          type="text"
          label="email"
          id="email"
          register={register}
          getValues={getValues}
        />
        <Input
          type="text"
          label="Motivo do contato"
          id="reason"
          register={register}
          getValues={getValues}
        />

        <textarea name="" id=""></textarea>
        <ButtonStylized>Enviar</ButtonStylized>
      </ContainerFormContact>
    </MainContainer>
  );
}

export default ContactUs;
