import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BiUserCircle } from "react-icons/bi";
import { SlPencil } from "react-icons/sl";
import { WebContext } from "../../context/webcontext";
import { SchemaPerfilRech } from "../../validations/schemas";
import { ButtonStylized } from "../buttons/style";
import Input from "../Input";
import {
  Container,
  ContainerContent,
  ContainerMain,
  ContainerProfile,
  FormEditRech,
} from "./style";

export interface iEditRech {
  email: string;
  empresa: string;
  linkedin: string;
  city: string;
  name: string;
  password: string | undefined;
}

const PerfilRech = () => {
  const { boxEdit, setBoxEdit } = useContext(WebContext);
  const { editSubmit, user, inputPassRef } = useContext(WebContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<iEditRech>({
    resolver: yupResolver(SchemaPerfilRech),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      city: user?.city,
      linkedin: user?.linkedin,
    },
  });

  return (
    <ContainerMain>
      <Container size="small">
        <ContainerProfile>
          <figure>
            <BiUserCircle size={85} color="#1DA1F2" />
          </figure>
          <div>
            <p>{user?.city}</p>
            <p>{user?.email}</p>
          </div>
        </ContainerProfile>
        <ContainerContent>
          <h2>{user?.name}</h2>
          <p>Tech Recruiter</p>
          {user?.empresa && <p>{user.empresa}</p>}
          {user?.linkedin && <a href={user?.linkedin}>Linkedin</a>}
        </ContainerContent>
        <SlPencil
          onClick={() => setBoxEdit(!boxEdit)}
          size={24}
          color="#1DA1F2"
          cursor="pointer"
        />
      </Container>
      {boxEdit && (
        <Container size="big">
          <FormEditRech onSubmit={handleSubmit(editSubmit)}>
            <Input
              id="name"
              type="text"
              label="Nome"
              register={register}
              getValues={getValues}
            />
            <Input
              id="city"
              type="text"
              label="Cidade"
              register={register}
              getValues={getValues}
            />
            <Input
              id="email"
              type="text"
              label="Editar email"
              register={register}
              getValues={getValues}
            />
            <Input
              id="password"
              type="password"
              label="Editar senha"
              register={register}
              getValues={getValues}
              // ref={inputPassRef}
            />
            <Input
              id="empresa"
              type="text"
              label="Empresa"
              register={register}
              getValues={getValues}
            />
            <Input
              id="linkedin"
              type="text"
              label="Linkedin"
              register={register}
              getValues={getValues}
              errorMessage={errors.linkedin?.message}
            />
            <div className="box-btns">
              <ButtonStylized styled="medium" type="submit">Finalizar</ButtonStylized>
              <ButtonStylized styled="medium" onClick={() => setBoxEdit(false)} type="button">
                Cancelar
              </ButtonStylized>
            </div>
          </FormEditRech>
        </Container>
      )}
    </ContainerMain>
  );
};

export default PerfilRech;
