import { ModalLogOff } from "./style";

export function logOffModal(){
    <ModalLogOff>
        <h2>Sair</h2>
        <p>Tem certeza que você deseja sair?</p>
        <div>
            <button type="button" className="cancelar">Cancelar</button>
            <button type="button" className="sair">Sim, sair</button>
        </div>
    </ModalLogOff>
}