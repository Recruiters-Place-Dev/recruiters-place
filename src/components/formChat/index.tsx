import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { iUser, WebContext } from "../../context/webcontext";
import { ButtonSendChat, FormChatContainer } from "./style";

export interface iChat {
  from: string | undefined;
  to: string | undefined;
  idTo: string | undefined;
  idFrom: string | undefined;
  chat: string | undefined;
  isRead: boolean | undefined;
}

function FormChat() {
  const { user, chatId, allUsers, onSubmitChat } = useContext(WebContext);

  const { register, handleSubmit } = useForm<iChat>({});

  return (
    <FormChatContainer onSubmit={handleSubmit(onSubmitChat)}>
      <div>
        <h3>De: </h3>
        <input type="text" value={user?.name} {...register("from")} />
      </div>
      <div>
        <h3>Para:</h3>
        <input
          type="text"
          value={allUsers?.reduce((acc, act: iUser) => {
            if (act.id === Number(chatId)) {
              return acc + act.name;
            } else {
              return acc + "";
            }
          }, "")}
          {...register("to")}
        />
      </div>
      <textarea id="" {...register("chat")}></textarea>
      <ButtonSendChat type="submit">Enviar</ButtonSendChat>
    </FormChatContainer>
  );
}

export default FormChat;
