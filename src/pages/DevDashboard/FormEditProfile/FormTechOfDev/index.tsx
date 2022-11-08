import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { BoxImgCheckbox } from "./BoxImgCheckbox";
import schema from "../../../../validations/editDevTech";

import { iUser, WebContext } from "../../../../context/webcontext";

import { BoxBtns, TechsBox, FormStyled } from "./style";

import { Api } from "../../../../services/api";
import { iApiError, iFormEditProfile } from "../types";
import { ButtonStyled } from "../FormDataOfDev/style";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { iTechs } from "../types";

interface iTechOfDev {
  setStep: Dispatch<SetStateAction<1 | 2>>;
}
export const FormTechOfDev = ({ setStep }: iTechOfDev) => {
  const { user, setUser } = useContext(WebContext);

  const [isActiveTechs, setIsActiveTechs] = useState<iTechs | undefined>({
    html: false,
    css: false,
    js: false,
    react: false,
    ts: false,
    angular: false,
    node: false,
    vuejs: false,
  });

  useEffect(() => {
    setIsActiveTechs(user?.tech);
  }, []);

  const { register, handleSubmit } = useForm<iFormEditProfile>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iFormEditProfile> = async () => {
    try {
      const { data } = await Api.patch<iUser>(`/users/${user?.id}`, {
        tech: { ...isActiveTechs },
      });

      setUser(data);
      toast.success("Tecnologias atualizadas!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <TechsBox>
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="html"
            register={register}
            isActive={isActiveTechs?.html}
          />

          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="css"
            register={register}
            isActive={isActiveTechs?.css}
          />

          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="js"
            register={register}
            isActive={isActiveTechs?.js}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="react"
            register={register}
            isActive={isActiveTechs?.react}
          />

          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="ts"
            register={register}
            isActive={isActiveTechs?.ts}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="node"
            register={register}
            isActive={isActiveTechs?.node}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="angular"
            register={register}
            isActive={isActiveTechs?.angular}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="vuejs"
            register={register}
            isActive={isActiveTechs?.vuejs}
          />
        </TechsBox>

        <BoxBtns>
          <ButtonStyled onClick={() => setStep(1)}>Voltar</ButtonStyled>
          <ButtonStyled type="submit">Salvar</ButtonStyled>
        </BoxBtns>
      </FormStyled>
    </motion.div>
  );
};