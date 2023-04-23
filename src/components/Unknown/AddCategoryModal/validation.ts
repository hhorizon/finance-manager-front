import { FormikErrors } from "formik";
import { AddCategoryFormValues } from "../../../types";

const validate = (values: AddCategoryFormValues) => {
  const errors: FormikErrors<AddCategoryFormValues> = {};

  const { type, name } = values;

  if (!type) {
    errors.type = "Required field";
  }

  if (!name) {
    errors.name = "Required field";
  } else if (name.length > 20) {
    errors.name = "Must be 20 characters or less";
  }

  return errors;
};

export default validate;
