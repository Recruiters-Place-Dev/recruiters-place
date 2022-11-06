import { ModalLogOff } from "./style";
import { ModalFeedContainer } from "../modalFeed/styles";
import { useNavigate } from "react-router-dom";

export function LogOffModal(){
    const navigate = useNavigate();
    
    function sair(){
        localStorage.clear();
        navigate("/");
    }

    function cancel(){
        window.location.reload();
    }
    
    return (
        <ModalFeedContainer>
            <ModalLogOff>
                <h3>Sair</h3>
                <p>Tem certeza que você deseja sair?</p>
                <div>
                    <button type="button" onClick={cancel} className="cancelar">Cancelar</button>
                    <button type="button" onClick={sair} className="sair">Sim, sair</button>
                </div>
            </ModalLogOff>
        </ModalFeedContainer>
    );
}