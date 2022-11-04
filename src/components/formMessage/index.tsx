import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { iUser, WebContext } from "../../context/webcontext";
import Input from "../Input";
import { ButtonSendComent, FormContainer } from "./style";

function FormMessage() {
  const { modalWriteComent, setModalWriteComent, user, comentId, allUsers } =
    useContext(WebContext);
  const { register, handleSubmit } = useForm({});
  return (
    <FormContainer>
      <div>
        <h3>De: </h3>
        <h1>{user?.name}</h1>
      </div>
      <div>
        <h3>Para:</h3>
        <h1>
          {allUsers?.reduce((acc, act: iUser) => {
            if (act.id === Number(comentId)) {
              return acc + act.name;
            } else {
              return acc + "";
            }
          }, " ")}
        </h1>
      </div>
      <textarea name="" id=""></textarea>
      <ButtonSendComent>Enviar</ButtonSendComent>
    </FormContainer>
  );
}

export default FormMessage;
