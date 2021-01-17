import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(Admin)/)
    .required(),
  password: yup.number().oneOf([12345]).required(),
});

export { formSchema };
