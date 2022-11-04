import { RegisterForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Modal from "../modal";
import { useState } from "react";

export interface iUserRegister {
  name: string;
  email: string;
  local?: string;
  schooling?: string;
  vacancy?: string;
  password: string;
  checkpass: string;
  recruiter: boolean;
  linkedin?: string;
  github?: string;
  cv?: string;
}

export function FormRegister() {
  const [show, setShow] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [progress, setProgress] = useState({
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
  });

  const {
    register,
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
            errors={errors.name}
          />
          <Input
            type="text"
            label="Email"
            id="email"
            register={register}
            errors={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            id="password"
            register={register}
            errors={errors.password}
          />
          <Input
            type="password"
            label="Confirmar Senha"
            id="checkpass"
            register={register}
            errors={errors.checkpass}
          />
        </div>
        <div className="Recruiter-Opt">
          <span>Recrutador?</span>
          <input
            onClick={() => {
              setIsSubmit(!isSubmit);
            }}
            type="checkbox"
            id="recruiter"
            {...register("recruiter")}
          />
        </div>
        <button
          type={isSubmit ? "submit" : "button"}
          onClick={() => {
            if (!isSubmit) {
              const isRecruiter = getValues("recruiter");

              if (!isRecruiter) {
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
        <Modal
          setShow={setShow}
          progress={progress}
          setProgress={setProgress}
          register={register}
        />
      )}
    </>
  );
}
