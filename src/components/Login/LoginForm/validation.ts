import { FormikErrors } from "formik";
import { LoginFormValues } from "../../../types";

const validate = (values: LoginFormValues) => {
  const errors: FormikErrors<LoginFormValues> = {};

  const { email, password } = values;

  if (!email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Required field";
  } else if (password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }

  return errors;
};

export default validate;
