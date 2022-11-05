import { BoxForm } from "./style";
import { PersonalDataOfDev } from "./PersonalDataOfDev";
import { TechOfDev } from "./TechOfDev";
import { useState } from "react";

export const FormEditProfile = () => {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <BoxForm step={step}>
      {step === 1 ? (
        <PersonalDataOfDev setStep={setStep} />
      ) : (
        <TechOfDev setStep={setStep} />
      )}
    </BoxForm>
  );
};
