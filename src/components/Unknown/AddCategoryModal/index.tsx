import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../Button";

import { useAppDispatch } from "../../../redux/hooks";
import { addCategories } from "../../../redux/actions/user-operations";
import validate from "./validation";
import { AddCategoryFormValues, TransactionType } from "../../../types";
import "./styles.scss";

interface AddCategoryModalProps {
  type: TransactionType;
  closeModal: () => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  type,
  closeModal,
}) => {
  const dispatch = useAppDispatch();

  const initialValues: AddCategoryFormValues = {
    type,
    name: "",
  };

  const onSubmit = (values: AddCategoryFormValues) => {
    dispatch(addCategories(values));
    closeModal();
  };

  return (
    <div className="add-category-modal">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form className="add-category-modal__form">
          <div className="add-category-modal__field">
            <Field
              name="name"
              className="add-category-modal__field__input"
              placeholder="Category name"
            />

            <ErrorMessage
              name="name"
              render={(errorMes) => (
                <p className="add-category-modal__field__error-message">
                  {errorMes}
                </p>
              )}
            />
          </div>

          <Button type="submit" variant="main">
            Add category
          </Button>

          <Button type="button" onClick={closeModal}>
            Cancel
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCategoryModal;
