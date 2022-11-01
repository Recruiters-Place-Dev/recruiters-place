import { useState } from "react";
import InputGroup from "./inputGroup";

interface iInputProps {
  className?: string;
  type: string;
  label: string;
}

const Input = ({ className, type, label }: iInputProps) => {
  const [value, setValue] = useState("");

  return (
    <InputGroup className={className} inputValue={value}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
      <label htmlFor="">{label}</label>
    </InputGroup>
  );
};

export default Input;
