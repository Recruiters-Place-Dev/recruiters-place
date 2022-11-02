import { RegisterForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";

export interface iUserRegister {
  name: string;
  email: string;
  escolaridade?: string;
  vaga?: string;
  password: string;
  checkpass: string;
  recruiter: boolean;
}

export function FormRegister() {
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
  } = useForm<iUserRegister>({
    resolver: yupResolver(yupSchema),
  });

  function fakeFunction(info: iUserRegister) {
    console.log(info);
  }

  return (
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
        <input type="checkbox" id="recruiter" {...register("recruiter")} />
      </div>
      <button>Cadastre-se</button>
    </RegisterForm>
  );
}
