import ModalContainer from "./Modal";
import { UseFormRegister } from "react-hook-form";
import Input from "../Input";

interface iProgressProps {
  phase: number;
  nextPhase: number;
}

interface iModalProps {
  setShow: (show: boolean) => void;
  progress: iProgressProps;
  setProgress: (progress: iProgressProps) => void;
  register: UseFormRegister<any>;
}

const Modal = ({ setShow, progress, setProgress, register }: iModalProps) => {
  return (
    <ModalContainer>
      <div>
        <button
          className="back"
          onClick={() => {
            if (progress.phase === 2) {
              setShow(false);
              setProgress({ phase: 1, nextPhase: 2 });
            }

            if (progress.phase === 3) setProgress({ phase: 2, nextPhase: 3 });
          }}
        >
          Voltar
        </button>
        <div className="progressBarContainer">
          <div
            className={
              progress.phase === 2
                ? "completed"
                : progress.phase === 3
                ? "completed"
                : "notCompleted"
            }
          ></div>
          <div
            className={
              progress.phase === 2 && progress.nextPhase === 3
                ? "onProgress"
                : progress.phase === 3
                ? "completed"
                : "notCompleted"
            }
          ></div>
          <div
            className={
              progress.phase === 3 && progress.nextPhase !== 4
                ? "completed"
                : progress.phase === 2 && progress.nextPhase === 3
                ? "notCompleted"
                : progress.phase === 3 && progress.nextPhase === 4
                ? "onProgress"
                : "notCompleted"
            }
          ></div>
        </div>
        {progress.phase === 2 && (
          <form className={`progress-${progress.phase}`}>
            <h2>Sobre você</h2>
            <Input type="text" label="Local" id="local" register={register} />
            <Input
              type="text"
              label="Escolaridade"
              id="schooling"
              register={register}
            />
            <Input
              type="text"
              label="Selecione seu cargo"
              id="vacancy"
              register={register}
            />
            <div className="controls">
              <div className="working">
                <input type="checkbox" id="working" />
                <label htmlFor="working">Esta trabalhando no momento?</label>
              </div>
              <button
                type="button"
                onClick={() => setProgress({ phase: 3, nextPhase: 4 })}
              >
                Avançar
              </button>
              <button
                type="button"
                onClick={() => setProgress({ phase: 3, nextPhase: 4 })}
              >
                Pular etapa
              </button>
            </div>
          </form>
        )}
        {progress.phase === 3 && (
          <form className={`progress-${progress.phase}`}>
            <h2>Links</h2>
            <Input
              type="text"
              label="Linkedin"
              id="linkedin"
              register={register}
            />
            <Input type="text" label="Github" id="github" register={register} />
            <Input type="text" label="Portifolio" id="cv" register={register} />
            <div className="controls">
              <div className="working">
                <input type="checkbox" id="working" />
                <label htmlFor="working">Esta trabalhando no momento?</label>
              </div>
              <button
                type="button"
                onClick={() => setProgress({ phase: 3, nextPhase: 4 })}
              >
                Avançar
              </button>
            </div>
          </form>
        )}
      </div>
    </ModalContainer>
  );
};

export default Modal;
