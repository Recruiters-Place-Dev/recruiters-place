import React, { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ButtonStylized } from "../../../buttons/style";
import { ModalComentContainer } from "./style";

function ModalComent() {
  const { modalComent, openModalComent, readModalComent, writeModalComent } =
    useContext(WebContext);

  return modalComent ? (
    <ModalComentContainer onClick={openModalComent}>
      <div>
        <ButtonStylized onClick={() => writeModalComent()}>Escrever comentário</ButtonStylized>
        <ButtonStylized onClick={() => readModalComent()}>Ver comentários</ButtonStylized>
      </div>
    </ModalComentContainer>
  ) : null;
}

export default ModalComent;
