import React, { useContext } from "react";
import {
  ModalChatContainer,
  ModalChatContainerButton,
  ModalChatContainerMessage,
} from "./style";
import close from "../../../assets/close.png";
import { WebContext } from "../../../context/webcontext";
import FormChat from "../../formChat";

function ModalChat() {
  const { setModalChat, modalChat } = useContext(WebContext);

  return modalChat ? (
    <ModalChatContainer>
      <div>
        <ModalChatContainerButton
          onClick={() => {
            setModalChat(!modalChat);
          }}
        >
          <h1>Enviar mensagem</h1>
          <img src={close} alt="" />
        </ModalChatContainerButton>

        <ModalChatContainerMessage>
          <FormChat />
        </ModalChatContainerMessage>
      </div>
    </ModalChatContainer>
  ) : null;
}

export default ModalChat;
