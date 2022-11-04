import { UseFormRegister } from "react-hook-form";
import { BoxInput } from "./style";

interface iInputEditProfile {
  type: "text" | "email" | "url";
  data:
    | "name"
    | "email"
    | "city"
    | "responsibility"
    | "linkedin"
    | "github"
    | "portfolio"
    | "profilePicture"
    | "location"
    | "schooling";
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
}

export const InputEditProfile = ({
  type,
  data,
  label,
  register,
}: iInputEditProfile) => {
  return (
    <BoxInput>
      <input type={type} {...register(data)} />
      <label>{label}</label>
    </BoxInput>
  );
};

