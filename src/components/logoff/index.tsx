import { ModalLogOff } from "./style";
import { ModalFeedContainer } from "../modalFeed/styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WebContext } from "../../context/webcontext";

export function LogOffModal() {
  const navigate = useNavigate();
  const { logOff, setLogOff } = useContext(WebContext);
  function sair() {
    setLogOff(false);
    localStorage.clear();
    navigate("/");
  }

  function cancel() {
    console.log(logOff);
    setLogOff(false);
  }

  return logOff ? (
    <ModalFeedContainer>
      <ModalLogOff>
        <h3>Sair</h3>
        <p>Tem certeza que você deseja sair?</p>
        <div>
          <button type="button" onClick={() => cancel()} className="cancelar">
            Cancelar
          </button>
          <button type="button" onClick={() => sair()} className="sair">
            Sim, sair
          </button>
        </div>
      </ModalLogOff>
    </ModalFeedContainer>
  ) : null;
}
