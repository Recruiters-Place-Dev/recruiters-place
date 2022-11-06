import { useState } from "react";
import { Path, UseFormGetValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "../ParagraphError";
import InputGroup from "./inputGroup";

interface iInputProps {
  type: string;
  label: string;
  id: Path<any>;
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
  errorMessage?: string;
  errors?: any;
  login?: boolean;
  default?: string;
  name?: string;
}

const Input = ({
  type,
  label,
  id,
  register,
  getValues,
  errors,
  login,
  errorMessage,
}: iInputProps) => {
  const { onChange, onBlur, name, ref } = register(id);

  const [value, setValue] = useState(getValues(id) || "");

  return (
    <InputGroup
      className={
        !errors && value !== "" && login
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputGroup>
  );
};

export default Input;
