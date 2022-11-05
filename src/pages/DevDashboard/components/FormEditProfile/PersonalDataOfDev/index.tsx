import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WebContext } from "../../../../../context/webcontext";

import { InputEditProfile } from "../BoxInput";

import Input from "../../../../../components/Input";
import {
  ButtonStyled,
  BoxBtn,
  LinkStyled,
  AllInputBox,
  TitleEditProfile,
  TextAreaBio,
} from "./style";

interface iPersonalDataOfDev {
  setStep: any;
}

export const PersonalDataOfDev = ({ setStep }: iPersonalDataOfDev) => {
  const navigate = useNavigate();
  const { user } = useContext(WebContext);

  const { register, handleSubmit } = useForm({
   
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TitleEditProfile>Editar Perfil</TitleEditProfile>
      <TextAreaBio
        id="bio"
        rows={10}
        {...register("bio")}
        placeholder="Bio"
      ></TextAreaBio>

      <AllInputBox>
        <div>
          

          {/* <InputEditProfile
            type="text"
            data="name"
            register={register}
            label="Nome"
          /> */}
          <InputEditProfile
            type="text"
            data="cargo"
            register={register}
            label="Cargo"
            defaultValue={user?.cargo}
          />

          <InputEditProfile
            type="text"
            data="linkedin"
            register={register}
            label="LinkedIn"
            defaultValue={user?.linkedin}
          />

          <InputEditProfile
            type="text"
            data="portfolio"
            register={register}
            label="Portifolio"
            defaultValue={user?.portfolio}
          />
          <InputEditProfile
            type="text"
            data="fotoDoPerfil"
            register={register}
            label="Foto do Perfil"
            defaultValue={user?.fotoDoPerfil}
          />
        </div>

        <div>
          <InputEditProfile
            type="text"
            data="city"
            register={register}
            label="Localização"
            defaultValue={user?.city}
          />
          <InputEditProfile
            type="text"
            data="email"
            register={register}
            label="Email"
            defaultValue={user?.email}
          />

          <InputEditProfile
            type="text"
            data="escolaridade"
            register={register}
            label="Escolaridade"
            defaultValue={user?.escolaridade}
          />
          <InputEditProfile
            type="text"
            data="github"
            register={register}
            label="GitHub"
            defaultValue={user?.github}
          />
        </div>
      </AllInputBox>

      <BoxBtn>
        <LinkStyled to="/devDashboard">Voltar</LinkStyled>
        <ButtonStyled type="submit">Salvar</ButtonStyled>
        <ButtonStyled type="button" onClick={() => setStep(2)}>
          Proximo
        </ButtonStyled>
      </BoxBtn>
    </form>
  );
};
// {
