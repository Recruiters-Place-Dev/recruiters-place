import { ReactNode } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { ParagraphError } from "./style";

interface iChildrenError {
  children: ReactNode;
}

export const ErrorMessage = ({children}: iChildrenError) => {
  return (
    <ParagraphError><RiErrorWarningFill/>{children}</ParagraphError>
  )
}
