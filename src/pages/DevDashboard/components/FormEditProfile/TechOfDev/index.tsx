import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { ButtonStyled } from "../PersonalDataOfDev/style";
import { BoxImgCheckbox } from "./BoxImgCheckbox";

import { BoxBtns, TechsBox } from "./style";
interface iTechOfDev {
  setStep: any;
  register: UseFormRegister<any>;
  setIsActiveTechs: any;
  isActiveTechs: any;
}
export const TechOfDev = ({
  setStep,
  register,
  setIsActiveTechs,
  isActiveTechs,
}: iTechOfDev) => {

  return (
    <>
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
          id="vue"
          register={register}
          isActive={isActiveTechs.vue}
        />
      </TechsBox>

      <BoxBtns>
        <ButtonStyled onClick={() => setStep(1)}>Voltar</ButtonStyled>
        <ButtonStyled type="submit">Salver Alterações</ButtonStyled>
      </BoxBtns>
    </>
  );
};
