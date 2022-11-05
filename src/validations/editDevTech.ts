import * as yup from "yup";

export default yup.object({
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
