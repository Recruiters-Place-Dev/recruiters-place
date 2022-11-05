import { ReactNode } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { iWebProvider } from "../../context/webcontext";
import { ParagraphError } from "./style";

export const ErrorMessage = ({ children }: iWebProvider) => {
  return (
    <ParagraphError>
      {children && <RiErrorWarningFill />}
      {children}
    </ParagraphError>
  );
};
