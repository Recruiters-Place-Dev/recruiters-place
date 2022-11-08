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
        <ModalChatContainerButton>
          <h1>Enviar mensagem</h1>
          <img
            src={close}
            alt=""
            onClick={() => {
              setModalChat(!modalChat);
            }}
          />
        </ModalChatContainerButton>

        <ModalChatContainerMessage>
          <FormChat />
        </ModalChatContainerMessage>
      </div>
    </ModalChatContainer>
  ) : null;
}

export default ModalChat;
