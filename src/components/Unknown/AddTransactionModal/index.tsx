import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";
import Datetime from "react-datetime";
import Select from "react-select";
import "react-datetime/css/react-datetime.css";

import Toggle from "../Toggle";
import Button from "../Button";
import ModalContainer from "../ModalContainer";
import AddCategoryModal from "../AddCategoryModal";
import { CloseIcon, CalendarIcon } from "../Icons";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  addTransaction,
  fetchAllTransactions,
} from "../../../redux/actions/transactions-operations";
import { categoriesSelector } from "../../../redux/selectors/transactions-selectors";
import { mapCategoriesForSelect } from "../../../utils";
import validate from "./validation";
import { AddTransactionFormValues } from "../../../types";
import "./styles.scss";

interface AddTransactionModalProps {
  closeModal: () => void;
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  closeModal,
}) => {
  const [type, setType] = useState<"incoming" | "spending">("spending");
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(categoriesSelector);

  const categoriesForSelect = mapCategoriesForSelect(categories[type]);

  const initialValues: AddTransactionFormValues = {
    category: { name: "", color: "" },
    sum: 0,
    date: new Date(),
    comment: "",
  };

  const onSubmit = async (values: AddTransactionFormValues) => {
    await dispatch(
      addTransaction({
        type,
        ...values,
      }),
    );
    await dispatch(fetchAllTransactions(1));
    closeModal();
  };

  return (
    <div className="add-modal">
      <button className="add-modal__close-btn" onClick={closeModal}>
        <CloseIcon />
      </button>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, errors }) => (
          <Form className="add-modal__form">
            <p className="add-modal__title">Add transaction</p>

            <div className="add-modal__toggle-container">
              <p
                className={`add-modal__type-name add-modal__type-name--${
                  type === "incoming" && "incoming"
                }`}
              >
                Incoming
              </p>

              <Toggle
                onInputChange={(checked: boolean) => {
                  setFieldValue("category", initialValues.category);
                  setType(checked ? "incoming" : "spending");
                }}
              />

              <p
                className={`add-modal__type-name add-modal__type-name--${
                  type === "spending" && "spending"
                }`}
              >
                Spending
              </p>
            </div>

            <div className="add-modal__field">
              <Select
                isClearable
                name="category"
                key={`${categoriesForSelect[0].label}`}
                options={categoriesForSelect}
                placeholder="Select category"
                classNamePrefix="add-modal__field__select"
                openMenuOnFocus
                onChange={(val) => {
                  setFieldValue("category", {
                    name: val?.label ?? "",
                    color: val?.value ?? "",
                  });
                }}
                components={{
                  MenuList: ({ innerRef, innerProps, children }) => (
                    <>
                      <div ref={innerRef} {...innerProps}>
                        {children}
                      </div>

                      <div className="add-category">
                        <button
                          type="button"
                          className="add-category__button"
                          onClick={() => setShowAddCategoryModal(true)}
                        >
                          Add your category
                        </button>
                      </div>
                    </>
                  ),
                }}
              />

              <ErrorMessage
                name="category.name"
                render={(errorMes) => (
                  <p className="add-modal__field__error-message">{errorMes}</p>
                )}
              />
            </div>

            <div className="add-modal__sum-date-container">
              <div className="add-modal__field">
                <Field
                  step="0.5"
                  type="number"
                  name="sum"
                  placeholder="0.00"
                  className="add-modal__field__input"
                />

                <ErrorMessage
                  name="sum"
                  render={(errorMes) => (
                    <p className="add-modal__field__error-message">
                      {errorMes}
                    </p>
                  )}
                />
              </div>

              <div className="add-modal__field">
                <Field name="date" disabled>
                  {() => (
                    <Datetime
                      value={values.date}
                      closeOnSelect
                      timeFormat={false}
                      dateFormat="DD.MM.YYYY"
                      inputProps={{
                        className: "add-modal__field__input",
                        readOnly: true,
                      }}
                      onChange={(date) => {
                        setFieldValue("date", date);
                      }}
                      isValidDate={(currenatDate) =>
                        currenatDate.isBefore(moment())
                      }
                    />
                  )}
                </Field>

                <CalendarIcon className="add-modal__field__icon" />

                <ErrorMessage
                  name="date"
                  render={(errorMes) => (
                    <p className="add-modal__field__error-message">
                      {errorMes}
                    </p>
                  )}
                />
              </div>
            </div>

            <div className="add-modal__field">
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className="add-modal__field__input add-modal__field__input-comment"
              />

              <ErrorMessage
                name="comment"
                render={(errorMes) => (
                  <p className="add-modal__field__error-message">{errorMes}</p>
                )}
              />
            </div>

            <Button type="submit" variant="main">
              Add
            </Button>

            <Button type="button" onClick={closeModal}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>

      {showAddCategoryModal && (
        <ModalContainer closeModal={() => setShowAddCategoryModal(false)}>
          <AddCategoryModal
            type={type}
            closeModal={() => setShowAddCategoryModal(false)}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default AddTransactionModal;
