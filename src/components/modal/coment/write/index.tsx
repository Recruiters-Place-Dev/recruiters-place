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
  const { modalWriteComent, setModalWriteComent } = useContext(WebContext);

  return modalWriteComent ? (
    <ModalComentWriteContainer>
      <div>
        <ModalComentWriteContainerButton
          onClick={() => setModalWriteComent(!modalWriteComent)}
        >
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
