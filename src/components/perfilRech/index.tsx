import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BiUserCircle } from "react-icons/bi";
import { SlPencil } from "react-icons/sl";
import { WebContext } from "../../context/webcontext";
import { SchemaPerfilRech } from "../../validations/schemas";
import Input from "../Input";
import {
  Container,
  ContainerContent,
  ContainerMain,
  ContainerProfile,
  FormEditRech,
} from "./style";

export interface iEditRech {
  email: string | undefined;
  empresa: string | undefined;
  linkedin: string | undefined;
  city: string | undefined;
  name: string | undefined;
  password: string | undefined;
}

const PerfilRech = () => {
  const [boxEdit, setBoxEdit] = useState(false);
  const { editSubmit, user2 } = useContext(WebContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditRech>({
    resolver: yupResolver(SchemaPerfilRech),
  });

  return (
    <ContainerMain>
      <Container size="small">
        <ContainerProfile>
          <figure>
            <BiUserCircle size={85} color="#1DA1F2" />
          </figure>
          <div>
            <p>{user2?.city}</p>
            <p>{user2?.email}</p>
          </div>
        </ContainerProfile>
        <ContainerContent>
          <h2>{user2?.name}</h2>
          <p>Tech Recruiter</p>
          {user2?.linkedin && <a href={user2?.linkedin}>Linkedin</a>}
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
            <Input id="name" type="text" label="Nome" register={register} />
            <Input id="city" type="text" label="Cidade" register={register} />
            <Input
              id="email"
              type="text"
              label="Editar email"
              register={register}
            />
            <Input
              id="password"
              type="password"
              label="Editar senha"
              register={register}
            />
            <Input
              id="empresa"
              type="text"
              label="Empresa"
              register={register}
            />
            <Input
              id="linkedin"
              type="text"
              label="Linkedin"
              register={register}
              errorMessage={errors.linkedin?.message}
            />
            <div className="box-btns">
              <button type="submit">Finalizar</button>
              <button onClick={() => setBoxEdit(false)} type="button">
                Cancelar
              </button>
            </div>
          </FormEditRech>
        </Container>
      )}
    </ContainerMain>
  );
};

export default PerfilRech;
