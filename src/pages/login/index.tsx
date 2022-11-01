import Logo from "../../assets/Logoo.svg";
import { BoxSlogan, FormLogin, MainLogin, SectionLogin } from "./style";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaLogin from "../../validations/loginUser";
import Input from "../../components/Input";

export interface iUserLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(SchemaLogin),
  });

  function fakeFunctionLogin(data: iUserLogin) {
    console.log(data);
    return data;
  }

  return (
    <MainLogin>
      <SectionLogin></SectionLogin>
      <SectionLogin>
        <div className="block"></div>
        <div className="containerLogin">
          <figure className="boxLogo">
            <img src={Logo} alt="Logo" />
          </figure>
          <FormLogin onSubmit={handleSubmit(fakeFunctionLogin)}>
            <h3>Entrar</h3>
            {/* <Input label="Email" type="text" /> */}
            {/* <Input label="Senha" type="text" /> */}
            <input type="text" placeholder="Email" {...register("email")} />
            {
              <p className="errors">
                {errors.email && <RiErrorWarningFill />}
                {errors.email?.message}
              </p>
            }
            <input type="text" placeholder="Senha" {...register("password")} />
            {
              <p className="errors">
                {errors.password && <RiErrorWarningFill />}
                {errors.password?.message}
              </p>
            }

            <button type="submit">Login</button>
            <span>Não tem uma conta ?</span>
            <button>Register</button>
          </FormLogin>
        </div>
      </SectionLogin>
      <BoxSlogan>
        <div className="blockBlue"></div>
        <div>
          <h2>Agilize o trabalho com parceiros</h2>
          <div className="boxLink">
            <a href="">Confira os benefícios ➡</a>
            <span></span>
          </div>
        </div>
      </BoxSlogan>
    </MainLogin>
  );
};
