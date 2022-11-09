import { RegisterForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import ModalRegister from "../modal/Register";
import { useState, useContext } from "react";
import { WebContext } from "../../context/webcontext";
import { keyboardKey } from "@testing-library/user-event";

export interface iUserRegister {
  name: string;
  email: string;
  city?: string;
  schooling?: string;
  vacancy?: string;
  password: string;
  checkpass: string;
  isRecruiter: boolean;
  isWork?: boolean;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  tech?: {
    html: boolean;
    css: boolean;
    js: boolean;
    react: boolean;
    ts: boolean;
    angular: boolean;
    vuejs: boolean;
    php: boolean;
    c: boolean;
  };
}

export interface iProgressProps {
  phase: number;
  nextPhase: number | null;
}

export function FormRegister() {
  //States
  const [show, setShow] = useState<boolean>(false);
  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);
  const [progress, setProgress] = useState<iProgressProps>({
    phase: 1,
    nextPhase: 2,
  });

  // functions
  const { onRegister } = useContext(WebContext);

  const registerUser = async (): Promise<void> => {
    const isRecruiter = getValues("isRecruiter");

    if (!isRecruiter) {
      const valid = await trigger(["name", "email", "password", "checkpass"], {
        shouldFocus: true,
      });

      if (valid) {
        setShow(true);
        setProgress({ phase: 2, nextPhase: 3 });
      }
    } else {
      setShow(true);
      setProgress({ phase: 5, nextPhase: null });
    }
  };

  const setRecruiterTrue = () => {
    setIsRecruiter(true);
  };

  const forceOpenModal = async (e: keyboardKey): Promise<void> => {
    if (e.key === "Enter") {
      const valid = await trigger(["name", "email", "password", "checkpass"]);
      if (valid) registerUser();
    }
  };

  // validations
  const type = isRecruiter ? "submit" : "button";

  // Hook-Form / yup
  const yupSchema = yup.object().shape({
    name: yup.string().required("Preencha o campo com seu nome."),
    email: yup
      .string()
      .required("Preencha o campo com um email válido")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Preencha o campo com uma senha")
      .min(6, "Senha com um mínimo de 6 caracteres."),
    checkpass: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não está igual."),
    isRecruiter: yup.boolean(),
    skipAbout: yup.boolean(),
    city: yup
      .string()
      .when("isRecruiter", {
        is: false,
        then: (schema) => schema.required(),
      })
      .when("skipAbout", {
        is: true,
        then: (schema) => schema.notRequired(),
      }),
    schooling: yup
      .string()
      .when("isRecruiter", {
        is: false,
        then: (schema) => schema.required(),
      })
      .when("skipAbout", {
        is: true,
        then: (schema) => schema.notRequired(),
      }),
    vacancy: yup
      .string()
      .when("isRecruiter", {
        is: false,
        then: (schema) => schema.required(),
      })
      .when("skipAbout", {
        is: true,
        then: (schema) => schema.notRequired(),
      }),
    isWork: yup.boolean(),
    skipLinks: yup.boolean(),
    linkedin: yup
      .string()
      .when("isRecruiter", {
        is: false,
        then: (schema) => schema.required(),
      })
      .when("skipLinks", {
        is: true,
        then: (schema) => schema.notRequired(),
      }),
    github: yup
      .string()
      .when("isRecruiter", {
        is: false,
        then: (schema) => schema.required(),
      })
      .when("skipLinks", {
        is: true,
        then: (schema) => schema.notRequired(),
      }),
    portfolio: yup.string(),
    techs: yup.object(),
  });

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    trigger,
  } = useForm<iUserRegister>({
    resolver: yupResolver(yupSchema),
  });

  return (
    <>
      <RegisterForm
        onKeyDown={(e: keyboardKey) => forceOpenModal(e)}
        onSubmit={handleSubmit(onRegister)}
      >
        <div className="InputsContainer">
          <Input
            type="text"
            label="Nome"
            id="name"
            register={register}
            getValues={getValues}
            errors={errors.name}
          />
          <Input
            type="text"
            label="Email"
            id="email"
            register={register}
            getValues={getValues}
            errors={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            id="password"
            register={register}
            getValues={getValues}
            errors={errors.password}
          />
          <Input
            type="password"
            label="Confirmar Senha"
            id="checkpass"
            register={register}
            getValues={getValues}
            errors={errors.checkpass}
          />
        </div>
        <div className="Recruiter-Opt">
          <span>Recrutador?</span>
          <input
            type="checkbox"
            id="recruiter"
            {...register("isRecruiter")}
            onClick={setRecruiterTrue}
          />
        </div>
        <button type={type} onClick={registerUser}>
          Cadastre-se
        </button>
      </RegisterForm>
      {!!show && (
        <ModalRegister
          errors={errors}
          fn={onRegister}
          getValues={getValues}
          handleSubmit={handleSubmit}
          progress={progress}
          register={register}
          reset={reset}
          setProgress={setProgress}
          setShow={setShow}
          trigger={trigger}
        />
      )}
    </>
  );
}
