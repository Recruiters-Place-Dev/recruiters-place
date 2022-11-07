import { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ComentContainer, ModalComentReadContainer } from "./style";
import userPerfil from "../../../../assets/carbon_user-avatar.svg";
import close from "../../../../assets/close.png";
import { ModalComentWriteContainerButton } from "../write/style";
import {v4 as uuid} from "uuid"

function ReadComent() {
  const {
    modalReadComent,
    setModalComent,
    setModalReadComent,
    allComents,
    comentId,
    user,
  } = useContext(WebContext);

  return modalReadComent ? (
    <ModalComentReadContainer>
      <div>
        <ModalComentWriteContainerButton
          onClick={() => {
            setModalReadComent(!modalReadComent);
            setModalComent(true);
          }}
        >
          <img src={close} alt="" />
        </ModalComentWriteContainerButton>

        <ComentContainer>
          {allComents?.map((coment) =>
            coment.idTo === comentId ? (
              <li key={uuid()}>
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
