import React, { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import {
  ModalComentWriteContainer,
  ModalComentWriteContainerButton,
  ModalComentWriteContainerMessage,
} from "./style";
import close from "../../../../assets/close.png";
import FormMessage from "../../../formMessage";

function WriteComent() {
  const { modalWriteComent, setModalComent, setModalWriteComent } =
    useContext(WebContext);

  return modalWriteComent ? (
    <ModalComentWriteContainer>
      <div>
        <ModalComentWriteContainerButton
          onClick={() => {
            setModalWriteComent(!modalWriteComent);
            setModalComent(true);
          }}
        >
          <h1>Escrever comentário</h1>
          <img src={close} alt="" />
        </ModalComentWriteContainerButton>

        <ModalComentWriteContainerMessage>
          <FormMessage />
        </ModalComentWriteContainerMessage>
      </div>
    </ModalComentWriteContainer>
  ) : null;
}

export default WriteComent;
