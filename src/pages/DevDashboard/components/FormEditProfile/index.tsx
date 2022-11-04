import { useForm } from "react-hook-form";

import { iFormEditProfile } from "./types";

import schema from "../../../../validations/editDevInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./style";
import { PersonalDataOfDev } from "./PersonalDataOfDev";
import { TechOfDev } from "./TechOfDev";
import { Api } from "../../../../services/api";
import { useContext, useState } from "react";
import { WebContext } from "../../../../context/webcontext";

export const FormEditProfile = () => {
  const [step, setStep] = useState<1 | 2>(1);
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
  const { setUser } = useContext(WebContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<iFormEditProfile>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log("opa");
    try {
      const resp: iFormEditProfile = await Api.patch("/users/5", data);

      if (resp?.tech) {
        setIsActiveTechs(resp.tech);
        setUser(resp);
      }
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormStyled step={step} onSubmit={handleSubmit(onSubmit)}>
      {step === 1 ? (
        <PersonalDataOfDev register={register} setStep={setStep} />
      ) : (
        <TechOfDev
          setStep={setStep}
          register={register}
          isActiveTechs={isActiveTechs}
          setIsActiveTechs={setIsActiveTechs}
        />
      )}
    </FormStyled>
  );
};
