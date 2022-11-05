import * as yup from "yup";

export default yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  city: yup.string(),
  escolaridade: yup.string(),
  cargo: yup.string(),
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


