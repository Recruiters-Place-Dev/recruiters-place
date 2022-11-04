import React, { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ModalComentReadContainer } from "./style";

function ReadComent() {
  const { modalReadComent, setModalReadComent } = useContext(WebContext);
  return modalReadComent ? (
    <ModalComentReadContainer
      onClick={() => setModalReadComent(!modalReadComent)}
    >
      <div>
        <h1>ler comentários</h1>
      </div>
    </ModalComentReadContainer>
  ) : null;
}

export default ReadComent;
