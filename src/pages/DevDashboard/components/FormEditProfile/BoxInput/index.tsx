import { UseFormRegister } from "react-hook-form";
import { BoxInput } from "./style";

interface iInputEditProfile {
  type: "text" | "email" | "url";
  data:
    | "name"
    | "email"
    | "city"
    | "cargo"
    | "linkedin"
    | "github"
    | "portfolio"
    | "fotoDoPerfil"
    | "city"
    | "escolaridade";
  label:
    | "Nome"
    | "Cargo"
    | "Email"
    | "Cidade"
    | "LinkedIn"
    | "Portifolio"
    | "Foto do Perfil"
    | "GitHub"
    | "Localização"
    | "Escolaridade";
  register: UseFormRegister<any>;
  defaultValue?: string;
}

export const InputEditProfile = ({
  type,
  data,
  label,
  register,
  defaultValue,
}: iInputEditProfile) => {
  return (
    <BoxInput>
      <input
        type={type}
        {...register(data)}
        defaultValue={defaultValue}
        required
      />
      <label>{label}</label>
    </BoxInput>
  );
};
