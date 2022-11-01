import { RegisterForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface iUserRegister {
  nome: string;
  email: string;
  escolaridade: string;
  vaga: string;
  password: string;
  checkpass: string;
}

export function FormRegister() {
  const yupSchema = yup.object().shape({
    nome: yup.string().required("Preencha o campo com seu nome."),
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
    return info;
  }

  return (
    <RegisterForm onSubmit={handleSubmit(fakeFunction)}>
      <fieldset>
        <legend>Nome</legend>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("nome")}
        />
        <p>{errors.nome?.message}</p>
      </fieldset>

      <fieldset>
        <legend>E-mail</legend>
        <input
          type="text"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </fieldset>

      <fieldset>
        <legend>Escolaridade</legend>
        <select {...register("escolaridade")}>
          <option value="Ensino Médio">Ensino Médio</option>
          <option value="Ensino Técnico">Ensino Técnico</option>
          <option value="Ensino Superior">Ensino Superior</option>
          <option value="Pós-Graduação">Pós Graduado</option>
          <option value="Mestrado">Mestrado</option>
          <option value="Doutorado">Doutorado</option>
        </select>
        <p>{errors.email?.message}</p>
      </fieldset>

      <fieldset>
        <legend>Oportunidade de Vaga</legend>
        <select {...register("vaga")}>
          <option value="Full-Stack">Full-Stack</option>
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
          <option value="Developer Mobile">Developer Mobile</option>
          <option value="Analise de Dados">Analise de Dados</option>
        </select>
        <p>{errors.email?.message}</p>
      </fieldset>

      <fieldset>
        <legend>Senha</legend>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </fieldset>

      <fieldset>
        <legend>Confirmar Senha</legend>
        <input
          type="password"
          placeholder="Repita a senha definida acima"
          {...register("checkpass")}
        />
        <p>{errors.checkpass?.message}</p>
      </fieldset>

      <button type="submit">Cadastrar</button>
      <p>Já possui uma conta?</p>
    </RegisterForm>
  );
}
