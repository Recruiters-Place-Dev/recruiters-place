import * as yup from "yup";
import { iUserLogin } from "../interface";

export const schemaFormRegister: any = yup.object().shape({
  name: yup.string().required("Preencha o campo com seu nome."),
  email: yup
    .string()
    .required("Preencha o campo com um email válido")
    .email("Email inválido"),
  password: yup
    .string()
    .required("Preencha o campo com uma senha")
    .min(6, "Senha com um mínimo de 6 caracteres."),
  checkpass: yup.string().oneOf([yup.ref("password")], "Senha não está igual."),
  isRecruiter: yup.boolean(),
  skipAbout: yup.boolean(),
  city: yup
    .string()
    .when("isRecruiter", {
      is: false,
      then: (schema) => schema.required(),
    })
    .when("skipAbout", {
      is: true,
      then: (schema) => schema.notRequired(),
    }),
  schooling: yup
    .string()
    .when("isRecruiter", {
      is: false,
      then: (schema) => schema.required(),
    })
    .when("skipAbout", {
      is: true,
      then: (schema) => schema.notRequired(),
    }),
  vacancy: yup
    .string()
    .when("isRecruiter", {
      is: false,
      then: (schema) => schema.required(),
    })
    .when("skipAbout", {
      is: true,
      then: (schema) => schema.notRequired(),
    }),
  isWork: yup.boolean(),
  skipLinks: yup.boolean(),
  linkedin: yup
    .string()
    .when("isRecruiter", {
      is: false,
      then: (schema) => schema.required(),
    })
    .when("skipLinks", {
      is: true,
      then: (schema) => schema.notRequired(),
    }),
  github: yup
    .string()
    .when("isRecruiter", {
      is: false,
      then: (schema) => schema.required(),
    })
    .when("skipLinks", {
      is: true,
      then: (schema) => schema.notRequired(),
    }),
  portfolio: yup.string(),
  techs: yup.object(),
});

export const schemaLogin: yup.SchemaOf<iUserLogin> = yup.object().shape({
  email: yup.string().required("Email obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const schemaPerfilRech = yup.object().shape({
  email: yup.string().email("Email inválido"),
  linkedin: yup.string().url("Deve ser uma URL válida"),
});

export const schemaEditDevTech = yup.object({
  html: yup.boolean(),
  css: yup.boolean(),
  js: yup.boolean(),
  react: yup.boolean(),
  ts: yup.boolean(),
  angular: yup.boolean(),
  vuejs: yup.boolean(),
  php: yup.boolean(),
  c: yup.boolean(),
});

export const schemaEditDevInfo = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  city: yup.string(),
  schooling: yup.string(),
  vacancy: yup.string(),
  linkedin: yup.string(),
  github: yup.string(),
  portifolio: yup.string(),
  tech: yup.object({
    html: yup.boolean(),
    css: yup.boolean(),
    js: yup.boolean(),
    react: yup.boolean(),
    ts: yup.boolean(),
    angular: yup.boolean(),
    vuejs: yup.boolean(),
    php: yup.boolean(),
    c: yup.boolean(),
  }),
});
