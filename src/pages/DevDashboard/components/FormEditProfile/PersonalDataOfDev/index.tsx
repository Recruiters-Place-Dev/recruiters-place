import { UseFormRegister } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { InputEditProfile } from "../BoxInput";

import {ButtonStyled,BoxBtn,LinkStyled,AllInputBox,TitleEditProfile} from "./style"

interface iPersonalDataOfDev {
  register: UseFormRegister<any>;
  setStep: any;
}

export const PersonalDataOfDev = ({
  register,
  setStep,
}: iPersonalDataOfDev) => {
  const navigate = useNavigate();

  return (
    <>
      <TitleEditProfile>Editar Perfil</TitleEditProfile>
      <textarea id="" cols={30} rows={10} {...register("bio")}></textarea>

      <AllInputBox>
        <div>
          <InputEditProfile
            type="text"
            data="name"
            register={register}
            label="Nome"
          />
          <InputEditProfile
            type="text"
            data="responsibility"
            register={register}
            label="Cargo"
          />

          <InputEditProfile
            type="text"
            data="linkedin"
            register={register}
            label="LinkedIn"
          />

          <InputEditProfile
            type="text"
            data="portfolio"
            register={register}
            label="Portifolio"
          />
          <InputEditProfile
            type="url"
            data="profilePicture"
            register={register}
            label="Foto do Perfil"
          />
        </div>

        <div>
          <InputEditProfile
            type="text"
            data="location"
            register={register}
            label="Localização"
          />
          <InputEditProfile
            type="email"
            data="email"
            register={register}
            label="Email"
          />

          <InputEditProfile
            type="text"
            data="schooling"
            register={register}
            label="Escolaridade"
          />
          <InputEditProfile
            type="text"
            data="github"
            register={register}
            label="GitHub"
          />
        </div>
      </AllInputBox>

      <BoxBtn>
        <LinkStyled  to="/devDashboard">
          Voltar
        </LinkStyled>
        <ButtonStyled type="submit">Salvar</ButtonStyled>
        <ButtonStyled type="button" onClick={() => setStep(2)}>
          Proximo
        </ButtonStyled>
      </BoxBtn>
    </>
  );
};
