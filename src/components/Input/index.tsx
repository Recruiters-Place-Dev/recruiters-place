import { Eye, EyeSlash } from "phosphor-react";
import { ReactNode, useState } from "react";
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
  showPass?: boolean;
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
  showPass,
}: iInputProps) => {
  // Destructuring the register
  const { onChange, onBlur, name, ref } = register(id);

  const inputValue = getValues(id) ? getValues(id) : "";

  // States
  const [value, setValue] = useState(inputValue);
  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");

  // Validations
  const className =
    !errors && value !== "" && login
      ? "done"
      : errors
      ? "error"
      : !errors && value !== ""
      ? "sucess"
      : "";

  const inputType = showPass ? passType : type;

  // functions
  const showPassword = (showPass: boolean): ReactNode => {
    if (value !== "" && showPass) {
      const whichEye =
        show === false ? (
          <EyeSlash size={22} color="#030303" />
        ) : (
          <Eye size={22} color="#030303" />
        );
      const passType = show === false ? "text" : "password";
      return (
        <div
          className="showPass"
          onClick={() => {
            setShow(!show);
            setPassType(passType);
          }}
          role="button"
        >
          {whichEye}
        </div>
      );
    }
  };

  return (
    <InputGroup className={className} inputValue={value}>
      <input
        autoComplete="off"
        id={id}
        value={value}
        type={inputType}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        onBlur={onBlur}
        name={name}
        ref={ref}
      />
      <label>{label}</label>
      {showPass ? showPassword(showPass) : null}
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </InputGroup>
  );
};

export default Input;
