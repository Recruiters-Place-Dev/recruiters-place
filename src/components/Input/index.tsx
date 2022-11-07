import { useState } from "react";
import { Path, UseFormGetValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "../ParagraphError";
import InputGroup from "./inputGroup";

export interface iInputProps {
  default?: string;
  errorMessage?: string;
  errors?: any;
  getValues: UseFormGetValues<any>;
  id: Path<any>;
  label: string;
  login?: boolean;
  name?: string;
  register: UseFormRegister<any>;
  type: string;
}

const Input = ({
  errorMessage,
  errors,
  getValues,
  id,
  label,
  login,
  register,
  type,
}: iInputProps) => {
  // Destructuring the register
  const { onChange, onBlur, name, ref } = register(id);

  // States
  const [value, setValue] = useState(getValues(id) || "");

  // Validations
  const className =
    !errors && value !== "" && login
      ? "done"
      : errors
      ? "error"
      : !errors && value !== ""
      ? "sucess"
      : "";

  return (
    <InputGroup className={className} inputValue={value}>
      <input
        autoComplete="off"
        id={id}
        value={value}
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
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </InputGroup>
  );
};

export default Input;
