import CustomSelect from "./CustomSelect";
import { ListSchooling, ListMock } from "../../mockList/devType";
import { iInputProps } from "../Input";

type SelectProps = Omit<iInputProps, "type" | "errorMessage" | "login" |"default" | "name">

const Select = ({ errors, getValues, id, label, register }: SelectProps) => {
  //functions
  const selectOptions = () => {
    if (id === "schooling") {
      return (
        <>
          {ListSchooling.map((el) => {
            return <option value={el}>{el}</option>;
          })}
        </>
      );
    } else if (id === "vacancy") {
        return (
            <>
                {ListMock.map(el => {
                    return <option value={el}>{el}</option>
                })}
            </>
        )
    }
  };

  return (
    <CustomSelect>
      <select id={id} {...register(id)}>
        {selectOptions()}
      </select>
    </CustomSelect>
  );
};

export default Select;