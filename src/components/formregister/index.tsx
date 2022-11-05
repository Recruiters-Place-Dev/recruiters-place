import { RegisterForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import ModalRegister from "../modal/Register";
import { useState } from "react";

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
  const [show, setShow] = useState<boolean>(false);
  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);
  const [progress, setProgress] = useState<iProgressProps>({
    phase: 1,
    nextPhase: 2,
  });
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
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<iUserRegister>({
    resolver: yupResolver(yupSchema),
  });

  function fakeFunction(info: iUserRegister) {
    console.log(info);
  }

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(fakeFunction)}>
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
            onClick={() => setIsRecruiter(true)}
          />
        </div>
        <button
          type={isRecruiter ? "submit" : "button"}
          onClick={async () => {
            const isRecruiter = getValues("isRecruiter");

            if (!isRecruiter) {
              const valid = await trigger(
                ["name", "email", "password", "checkpass"],
                { shouldFocus: true }
              );

              if (valid) {
                setShow(true);
                setProgress({ phase: 2, nextPhase: 3 });
              }
            }
          }}
        >
          Cadastre-se
        </button>
      </RegisterForm>
      {show && (
        <ModalRegister
          setShow={setShow}
          progress={progress}
          setProgress={setProgress}
          register={register}
          getValues={getValues}
          trigger={trigger}
          handleSubmit={handleSubmit}
          fn={fakeFunction}
          errors={errors}
        />
      )}
    </>
  );
}
