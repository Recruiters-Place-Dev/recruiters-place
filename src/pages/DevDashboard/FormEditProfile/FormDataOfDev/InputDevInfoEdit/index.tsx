import { useState } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "../../../../../components/ParagraphError";
import InputGroup from "./inputGroup";

type tId =
  | "name"
  | "bio"
  | "email"
  | "cargo"
  | "linkedin"
  | "portfolio"
  | "fotoDoPerfil"
  | "city"
  | "schooling"
  | "github";

interface iInputProps {
  type: "text" | "email";
  label: string;
  id: tId;
  register: UseFormRegister<any>;
  errorMessage?: string;
  errors?: FieldError | undefined;
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
      {errors?.message && <ErrorMessage>{errors.message}</ErrorMessage>}
    </InputGroup>
  );
};
