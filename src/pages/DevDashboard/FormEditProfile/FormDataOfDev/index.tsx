import { Dispatch, SetStateAction, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUser, WebContext } from "../../../../context/webcontext";
import { motion } from "framer-motion";
import {
  ButtonStyled,
  BoxBtn,
  LinkStyled,
  AllInputBox,
  TitleEditProfile,
  TextAreaBio,
} from "./style";
import { InputDevInfoEdit } from "./InputDevInfoEdit";
import { Api } from "../../../../services/api";
import { iApiError, iFormEditProfile } from "../types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "../../../../validations/editDevInfo";

interface iPersonalDataOfDev {
  setStep: Dispatch<SetStateAction<1 | 2>>;
}

export const FormDataOfDev = ({ setStep }: iPersonalDataOfDev) => {
  const { user, setUser, getAllUsers, setFilterDevelopers, allUsers } =
    useContext(WebContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormEditProfile>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iFormEditProfile> = async (formData) => {
    delete formData.tech;

    try {
      const { data } = await Api.patch<iUser>(`/user/${user?.id}`, formData);

      setUser(data);
      getAllUsers();
      setFilterDevelopers(
        allUsers?.filter((elem: iUser) => elem.isRecruiter === false)
      );
      toast.success("Informações atualizadas!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
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
              errors={errors.name}
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
              type="email"
              id="email"
              register={register}
              label="Email"
              defaultValue={user?.email}
              errors={errors.email}
            />

            <InputDevInfoEdit
              type="text"
              id="schooling"
              register={register}
              label="Escolaridade"
              defaultValue={user?.schooling}
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
          <LinkStyled to="/perfil">Voltar</LinkStyled>
          <ButtonStyled type="submit">Salvar</ButtonStyled>
          <ButtonStyled type="button" onClick={() => setStep(2)}>
            Proximo
          </ButtonStyled>
        </BoxBtn>
      </form>
    </motion.div>
  );
};
// {
