import React from "react";
import { Formik, Form, Field } from "formik";

import Button from "../Button";

import { useAppDispatch } from "../../../redux/hooks";
import { addCategories } from "../../../redux/actions/user-operations";
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
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="add-category-modal__form">
          <Field
            name="name"
            className="add-category-modal__field"
            placeholder="Category name"
          />

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
