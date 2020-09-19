import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().max(30, "Too Long!").required("Name is required!"),
  phone: Yup.number().required("Phone is required!"),
  mail: Yup.string().email("Invalid email").required("Mail is required!"),
});
