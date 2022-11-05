import React, { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ModalComentContainer } from "./style";

function ModalComent() {
  const { modalComent, openModalComent, readModalComent, writeModalComent } =
    useContext(WebContext);

  return modalComent ? (
    <ModalComentContainer onClick={openModalComent}>
      <div>
        <button onClick={() => writeModalComent()}>Escrever comentário</button>
        <button onClick={() => readModalComent()}>Ver comentários</button>
      </div>
    </ModalComentContainer>
  ) : null;
}

export default ModalComent;
