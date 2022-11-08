import * as yup from "yup";

export const SchemaLogin = yup.object().shape({
  email: yup.string().required("Email obrigatório"),

  password: yup.string().required("Senha é obrigatória"),
});

export const SchemaPerfilRech = yup.object().shape({
  email: yup.string().email("Email inválido"),

  linkedin: yup.string().url("Deve ser uma URL válida"),
});
