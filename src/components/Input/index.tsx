import { useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import InputGroup from "./inputGroup";
import { iUserRegister } from "../formregister/index";

interface iInputProps {
  type: string;
  label: string;
  id: Path<iUserRegister>;
  register: UseFormRegister<iUserRegister>;
  errors?: any;
  login?: boolean
}

const Input = ({ type, label, id, register, errors, login }: iInputProps) => {
  const [value, setValue] = useState("");

  const { onChange, onBlur, name, ref } = register(id);

  return (
    <InputGroup
      className={!errors && value !== "" && login ? "done" : errors ? "error" : !errors && value !== "" ? "sucess" : ""}
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
    </InputGroup>
  );
};

export default Input;
