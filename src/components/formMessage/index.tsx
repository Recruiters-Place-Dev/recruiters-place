import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { iUser, WebContext } from "../../context/webcontext";
import { ButtonSendComent, FormContainer } from "./style";

export interface iComent {
  from: string | undefined;
  to: string | undefined;
  idTo: string | undefined;
  idFrom: string | undefined;
  coment: string | undefined;
}

function FormMessage() {
  const {
    onSubmitComent,
    user,
    comentId,
    allUsers,
  } = useContext(WebContext);
  const { register, handleSubmit } = useForm<iComent>({});

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitComent)}>
      <div>
        <h3>De: </h3>
        <input type="text" value={user?.name} {...register("from")} />
      </div>
      <div>
        <h3>Para:</h3>
        <input
          type="text"
          value={allUsers?.reduce((acc, act: iUser) => {
            if (act.id === Number(comentId)) {
              return acc + act.name;
            } else {
              return acc + "";
            }
          }, "")}
          {...register("to")}
        />
      </div>
      <textarea id="" {...register("coment")}></textarea>
      <ButtonSendComent type="submit">Enviar</ButtonSendComent>
    </FormContainer>
  );
}

export default FormMessage;
