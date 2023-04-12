import { FormikErrors } from "formik";

export type RegistrationFormValues = {
  email: string;
  password: string;
  repeatedPassword: string;
  name: string;
};

const validate = (values: RegistrationFormValues) => {
  const errors: FormikErrors<RegistrationFormValues> = {};

  const { email, password, repeatedPassword, name } = values;

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

  if (!repeatedPassword) {
    errors.repeatedPassword = "Required field";
  } else if (repeatedPassword !== password) {
    errors.repeatedPassword = "Passwords do not match";
  }

  if (!name) {
    errors.name = "Required field";
  } else if (name.length >= 20) {
    errors.name = "Must be 20 characters or less";
  } else if (name.length < 3) {
    errors.name = "Must be 3 characters or more";
  }

  return errors;
};

export default validate;
