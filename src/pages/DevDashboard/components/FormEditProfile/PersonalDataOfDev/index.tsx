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
import { InputDevInfoEdit } from "./InputDevInfoEdit";
import { Api } from "../../../../../services/api";

interface iPersonalDataOfDev {
  setStep: any;
}

export const PersonalDataOfDev = ({ setStep }: iPersonalDataOfDev) => {
  const { user, setUser } = useContext(WebContext);

  const { register, handleSubmit } = useForm({});

  const onSubmit = async (formData: any) => {
    console.log(formData);

    try {
      const { data } = await Api.patch(`/users/${user?.id}`, formData);

      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TitleEditProfile>Editar Perfil</TitleEditProfile>
      <TextAreaBio
        id="bio"
        rows={10}
        {...register("bio")}
        placeholder="Bio"
        defaultValue={user?.bio}
      ></TextAreaBio>

      <AllInputBox>
        <div>
          <InputDevInfoEdit
            id="name"
            label="Nome"
            register={register}
            type="text"
            defaultValue={user?.name}
          />

          <InputDevInfoEdit
            type="text"
            id="cargo"
            register={register}
            label="Cargo"
            defaultValue={user?.cargo}
          />

          <InputDevInfoEdit
            type="text"
            id="linkedin"
            register={register}
            label="LinkedIn"
            defaultValue={user?.linkedin}
          />

          <InputDevInfoEdit
            type="text"
            id="portfolio"
            register={register}
            label="Portifolio"
            defaultValue={user?.portfolio}
          />
          <InputDevInfoEdit
            type="text"
            id="fotoDoPerfil"
            register={register}
            label="Foto do Perfil"
            defaultValue={user?.fotoDoPerfil}
          />
        </div>

        <div>
          <InputDevInfoEdit
            type="text"
            id="city"
            register={register}
            label="Localização"
            defaultValue={user?.city}
          />
          <InputDevInfoEdit
            type="text"
            id="email"
            register={register}
            label="Email"
            defaultValue={user?.email}
          />

          <InputDevInfoEdit
            type="text"
            id="escolaridade"
            register={register}
            label="Escolaridade"
            defaultValue={user?.escolaridade}
          />
          <InputDevInfoEdit
            type="text"
            id="github"
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
