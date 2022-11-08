import React, { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ButtonStylized } from "../../../buttons/style";
import { ModalComentContainer } from "./style";

function ModalComent() {
  const { modalComent, setModalComent, readModalComent, writeModalComent } =
    useContext(WebContext);

  return modalComent ? (
    <ModalComentContainer onClick={() => setModalComent(!modalComent)}>
      <div>
        <ButtonStylized onClick={() => writeModalComent()}>Escrever comentário</ButtonStylized>
        <ButtonStylized onClick={() => readModalComent()}>Ver comentários</ButtonStylized>
      </div>
    </ModalComentContainer>
  ) : null;
}

export default ModalComent;
