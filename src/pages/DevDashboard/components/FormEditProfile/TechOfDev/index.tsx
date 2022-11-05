import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { ButtonStyled } from "../PersonalDataOfDev/style";
import { BoxImgCheckbox } from "./BoxImgCheckbox";
import schema from "../../../../../validations/editDevTech";

import { WebContext } from "../../../../../context/webcontext";

import { BoxBtns, TechsBox } from "./style";
import { iFormEditProfile } from "../types";
import { Api } from "../../../../../services/api";
interface iTechOfDev {
  setStep: any;
}
export const TechOfDev = ({ setStep }: iTechOfDev) => {
  const { user, setUser } = useContext(WebContext);

  const [isActiveTechs, setIsActiveTechs] = useState<any>({
    html: false,
    css: false,
    js: false,
    react: false,
    ts: false,
    angular: false,
    node: false,
    vue: false,
  });

  useEffect(() => {
    setIsActiveTechs(user?.tech);
  }, []);

  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<iFormEditProfile>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  
    try {
      const { data }: any = await Api.patch("/users/5", {
        tech: { ...isActiveTechs },
      });
     
      if (data) {
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TechsBox>
        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="html"
          register={register}
          isActive={isActiveTechs.html}
        />

        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="css"
          register={register}
          isActive={isActiveTechs.css}
        />

        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="js"
          register={register}
          isActive={isActiveTechs.js}
        />
        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="react"
          register={register}
          isActive={isActiveTechs.react}
        />

        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="ts"
          register={register}
          isActive={isActiveTechs.ts}
        />
        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="node"
          register={register}
          isActive={isActiveTechs.node}
        />
        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="angular"
          register={register}
          isActive={isActiveTechs.angular}
        />
        <BoxImgCheckbox
          setIsActiveTechs={setIsActiveTechs}
          id="vuejs"
          register={register}
          isActive={isActiveTechs.vuejs}
        />
      </TechsBox>

      <BoxBtns>
        <ButtonStyled onClick={() => setStep(1)}>Voltar</ButtonStyled>
        <ButtonStyled type="submit">Salvar</ButtonStyled>
      </BoxBtns>
    </form>
  );
};
