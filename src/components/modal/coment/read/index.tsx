import React, { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ComentContainer, ModalComentReadContainer } from "./style";
import userPerfil from "../../../../assets/carbon_user-avatar.svg";
import close from "../../../../assets/close.png";
import { ModalComentWriteContainerButton } from "../write/style";

function ReadComent() {
  const { modalReadComent, setModalReadComent, allComents, comentId, user } =
    useContext(WebContext);

  console.log(allComents);
  return modalReadComent ? (
    <ModalComentReadContainer>
      <div>
        <ModalComentWriteContainerButton
          onClick={() => setModalReadComent(!modalReadComent)}
        >
          <img src={close} alt="" />
        </ModalComentWriteContainerButton>

        <ComentContainer>
          {allComents?.map((coment) =>
            coment.idTo === comentId ? (
              <li>
                <div>
                  <img src={userPerfil} alt="" />
                </div>
                <div>
                  <h1>{user?.name}</h1>
                  <p>{coment.coment}</p>
                </div>
              </li>
            ) : null
          )}
        </ComentContainer>
      </div>
    </ModalComentReadContainer>
  ) : null;
}

export default ReadComent;
