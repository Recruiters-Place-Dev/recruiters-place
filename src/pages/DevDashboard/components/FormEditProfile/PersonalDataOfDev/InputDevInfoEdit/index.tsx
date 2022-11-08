import { useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "../../../../../../components/ParagraphError";
import InputGroup from "./inputGroup";

interface iInputProps {
  type: string;
  label: string;
  id: Path<any>;
  register: UseFormRegister<any>;
  errorMessage?: string;
  errors?: any;
  defaultValue?: string;
}
export const InputDevInfoEdit = ({
  type,
  label,
  id,
  register,
  errors,
  errorMessage,
  defaultValue,
}: iInputProps) => {
 
  const [value, setValue] = useState(defaultValue ? defaultValue : "");
  const { onChange, onBlur, name, ref } = register(id);
  return (
    <InputGroup
      className={
        !errors && value !== ""
          ? "done"
          : errors
          ? "error"
          : !errors && value !== ""
          ? "sucess"
          : ""
      }
      inputValue={value}
    >
      <input
        autoComplete="off"
        id={id}
        defaultValue={value}
        type={type}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        onBlur={onBlur}
        name={name}
        ref={ref}
      />
      <label>{label}</label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputGroup>
  );
};
