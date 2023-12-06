import { UseFormRegister } from "react-hook-form";
import { BoxInput } from "./style";
import { iFormEditProfile } from "../../../../interface";

interface iInputEditProfile {
  type: "text" | "email" | "url";
  data:
    | "name"
    | "email"
    | "city"
    | "vacancy"
    | "linkedin"
    | "github"
    | "portfolio"
    | "fotoDoPerfil"
    | "city"
    | "schooling";
  label:
    | "Nome"
    | "vacancy"
    | "Email"
    | "Cidade"
    | "LinkedIn"
    | "Portifolio"
    | "Foto do Perfil"
    | "GitHub"
    | "Localização"
    | "Schooling";
  register: UseFormRegister<iFormEditProfile>;
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
