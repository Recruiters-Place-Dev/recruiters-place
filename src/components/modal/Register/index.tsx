import ModalContainer from "./Modal";
import {
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import Input from "../../Input";
import { iProgressProps } from "../../formregister";
import { iUserRegister } from "../../formregister";
import { CheckCircle } from "phosphor-react";

interface iModalProps {
  setShow: (show: boolean) => void;
  progress: iProgressProps;
  setProgress: (progress: iProgressProps) => void;
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  fn: (data: iUserRegister) => void;
}

const ModalRegister = ({
  setShow,
  progress,
  setProgress,
  register,
  getValues,
  handleSubmit,
  fn,
}: iModalProps) => {
  return (
    <ModalContainer progress={progress}>
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
            className={progress.phase === 1 ? "onProgress" : "completed"}
          ></div>
          <div
            className={
              progress.phase === 1
                ? "notCompleted"
                : progress.phase === 2
                ? "onProgress"
                : "completed"
            }
          ></div>
          <div
            className={
              progress.phase === 1
                ? "notCompleted"
                : progress.phase === 2
                ? "notCompleted"
                : progress.phase === 3
                ? "onProgress"
                : "completed"
            }
          ></div>
          <div
            className={
              progress.phase === 1
                ? "notCompleted"
                : progress.phase === 2
                ? "notCompleted"
                : progress.phase === 3
                ? "notCompleted"
                : progress.phase === 4
                ? "onProgress"
                : "completed"
            }
          ></div>
        </div>
        {progress.phase === 2 && (
          <form className={`progress-${progress.phase}`}>
            <h2>Sobre você</h2>
            <Input
              type="text"
              label="Local"
              id="local"
              register={register}
              getValues={getValues}
            />
            <Input
              type="text"
              label="Escolaridade"
              id="schooling"
              register={register}
              getValues={getValues}
            />
            <Input
              type="text"
              label="Selecione seu cargo"
              id="vacancy"
              register={register}
              getValues={getValues}
            />
            <div className="controls">
              <div className="working">
                <input type="checkbox" id="isWork" {...register("isWork")} />
                <label htmlFor="isWork">Esta trabalhando no momento?</label>
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
              getValues={getValues}
            />
            <Input
              type="text"
              label="Github"
              id="github"
              register={register}
              getValues={getValues}
            />
            <Input
              type="text"
              label="Portifolio"
              id="portfolio"
              register={register}
              getValues={getValues}
            />
            <div className="controls">
              <button
                type="button"
                onClick={() => setProgress({ phase: 4, nextPhase: 5 })}
              >
                Avançar
              </button>
              <button
                type="button"
                onClick={() => setProgress({ phase: 4, nextPhase: 5 })}
              >
                Pular etapa
              </button>
            </div>
          </form>
        )}
        {progress.phase === 4 && (
          <form
            className={`progress-${progress.phase}`}
            onSubmit={(e) => {
              handleSubmit(fn)(e);
              setProgress({ phase: 5, nextPhase: null });
            }}
          >
            <div className="techslist">
              <input type="checkbox" id="" {...register("tech.html")}/>
              <input type="checkbox" id="" {...register("tech.css")}/>
              <input type="checkbox" id="" {...register("tech.js")}/>
              <input type="checkbox" id="" {...register("tech.react")}/>
              <input type="checkbox" id="" {...register("tech.ts")}/>
              <input type="checkbox" id="" {...register("tech.angular")}/>
              <input type="checkbox" id="" {...register("tech.vue")}/>
              <input type="checkbox" id="" {...register("tech.php")}/>
              <input type="checkbox" id="" {...register("tech.c")}/>
            </div>
            <button type="submit">Finalizar</button>
          </form>
        )}
        {progress.phase === 5 && (
          <div className="RegisterCompleted">
            <CheckCircle size={150} color="#4bad31" />
            <h3>Cadastro realizado com sucesso</h3>
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default ModalRegister;
