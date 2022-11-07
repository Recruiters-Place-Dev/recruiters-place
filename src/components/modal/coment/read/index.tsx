import { useContext } from "react";
import { WebContext } from "../../../../context/webcontext";
import { ComentContainer, ModalComentReadContainer } from "./style";
import userPerfil from "../../../../assets/carbon_user-avatar.svg";
import close from "../../../../assets/close.png";
import { ModalComentWriteContainerButton } from "../write/style";
import { v4 as uuid } from "uuid";
import pen from "../../../../assets/pen.svg";
import trash from "../../../../assets/trash.svg";
import { iComent } from "../../../formMessage";
import { Api } from "../../../../services/api";

function ReadComent() {
  const {
    modalReadComent,
    setModalComent,
    setModalReadComent,
    allComents,
    comentId,
    user,
    deleteComent,
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
          {allComents?.map((coment: iComent) =>
            coment.idTo === comentId ? (
              <li key={uuid()}>
                <div>
                  <img src={userPerfil} alt="" />
                </div>
                <div>
                  <h1>{user?.name}</h1>
                  <p>{coment.coment}</p>
                </div>

                {coment?.idFrom ===
                  String(localStorage.getItem("RPlace:id")) && (
                  <div className="float">
                    <img src={pen} alt="" id={coment.id + ""} />
                    <img
                      src={trash}
                      alt=""
                      id={coment.id + ""}
                      onClick={(event) => {
                        deleteComent((event.target as HTMLImageElement).id);
                      }}
                    />
                  </div>
                )}
              </li>
            ) : null
          )}
        </ComentContainer>
      </div>
    </ModalComentReadContainer>
  ) : null;
}

export default ReadComent;
