import React, { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ButtonStylized } from "../../../buttons/style";
import { ModalComentContainer } from "./style";
import close from "../../../../assets/close.png";

function ModalComent() {
  const { modalComent, setModalComent, readModalComent, writeModalComent } =
    useContext(WebContext);

  return modalComent ? (
    <ModalComentContainer>
      <div>
        <div className="closeDiv">
          <img
            src={close}
            alt=""
            onClick={() => setModalComent(!modalComent)}
          />
        </div>
        <ButtonStylized onClick={() => writeModalComent()}>
          Escrever comentário
        </ButtonStylized>
        <ButtonStylized onClick={() => readModalComent()}>
          Ver comentários
        </ButtonStylized>
      </div>
    </ModalComentContainer>
  ) : null;
}

export default ModalComent;
