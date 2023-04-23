import { FormikErrors } from "formik";
import { AddTransactionFormValues } from "../../../types";

const validate = (values: AddTransactionFormValues) => {
  const errors: FormikErrors<AddTransactionFormValues> = {};

  const { category, sum, date, comment } = values;

  if (!category.name) {
    errors.category = {};
    errors.category.name = "Required field";
  }

  if (!sum) {
    errors.sum = "Required field";
  } else if (sum <= 0) {
    errors.sum = "Must be greater than 0";
  }

  if (!date) {
    errors.date = "Required field";
  }

  if (comment.length > 30) {
    errors.comment = "Must be 30 characters or less";
  }

  return errors;
};

export default validate;
