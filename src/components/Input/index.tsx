import { type } from "@testing-library/user-event/dist/type";
import { InputHTMLAttributes, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import InputGroup from "./inputGroup";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: iClassName;
  type: string;
  label: string;
  data: string;
  register: UseFormRegister<any>;
}

export type iClassName = "success" | "error" | "done" | undefined;

const Input = ({ className, type, label, register, data }: iInputProps) => {
  return (
    <InputGroup className={className}>
      <input type={type} {...register(data)} />
      <label htmlFor="">{label}</label>
    </InputGroup>
  );
};

export default Input;
