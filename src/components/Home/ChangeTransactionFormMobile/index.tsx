import React from "react";
import { Formik, Form, Field } from "formik";
import Datetime from "react-datetime";
import Select from "react-select";
import moment from "moment";

import { SaveIcon, DeleteIcon } from "../../Unknown/Icons";
import { mapCategoriesForSelect } from "../../../utils";
import {
  Transaction,
  AddTransactionRequestBody,
  CategoriesList,
  AddFormValues,
} from "../../../types";
import "./styles.scss";

interface ChangeTransactionFormMobileProps {
  transaction: Transaction;
  categories: CategoriesList;
  onUpdate: (id: string, body: AddTransactionRequestBody) => void;
  onDelete: (id: string) => void;
  setSelectedTransaction: (transaction: Transaction | null) => void;
}

interface ChangeTransactionFormMobileProps {}

const ChangeTransactionFormMobile: React.FC<
  ChangeTransactionFormMobileProps
> = ({
  transaction,
  categories,
  onUpdate,
  onDelete,
  setSelectedTransaction,
}) => {
  const { category, sum, date, comment, type, _id } = transaction;

  const categoriesForSelect = mapCategoriesForSelect(categories[type]);

  const initialValues: AddFormValues = {
    category: { name: category.name, color: category.color },
    sum,
    date: new Date(date),
    comment,
  };

  const onSubmit = (values: AddFormValues) => {
    onUpdate(_id, {
      type,
      ...values,
    });
  };

  return (
    <li
      className={`change-trans-mobile__item change-trans-mobile__item--${transaction.type}`}
    >
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, dirty, setFieldValue }) => (
          <Form className="change-trans-mobile__form">
            <div className="change-trans-mobile__field ">
              <div className="change-trans-mobile__field__name">Date</div>

              <Field name="date">
                {() => (
                  <Datetime
                    value={values.date}
                    closeOnSelect
                    timeFormat={false}
                    dateFormat="DD.MM.YYYY"
                    inputProps={{
                      className: "change-trans-mobile__field__input",
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
            </div>

            <div className="change-trans-mobile__field ">
              <div className="change-trans-mobile__field__name">Category</div>

              <Select
                required
                options={categoriesForSelect}
                className="change-trans-mobile__field__select__container"
                classNamePrefix="change-trans-mobile__field__select"
                openMenuOnFocus
                onChange={(val) => {
                  setFieldValue("category.name", val?.label);
                  setFieldValue("category.color", val?.value);
                }}
              />
            </div>

            <div className="change-trans-mobile__field">
              <div className="change-trans-mobile__field__name">Comment</div>

              <Field
                as="textarea"
                name="comment"
                className="change-trans-mobile__field__input change-trans-mobile__field__input--textarea"
              />
            </div>

            <div className="change-trans-mobile__field">
              <div className="change-trans-mobile__field__name">Amount</div>

              <Field
                required
                min="0.5"
                step="0.5"
                type="number"
                name="sum"
                className={`change-trans-mobile__field__input change-trans-mobile__field__input--${type}`}
              />
            </div>

            <div className="change-trans-mobile__buttons-wrapper">
              {dirty && (
                <button
                  type="submit"
                  title="Save"
                  className="change-trans-mobile__button"
                >
                  <SaveIcon />
                </button>
              )}

              <button
                type="button"
                title="Delete"
                className="change-trans-mobile__button"
                onClick={() => onDelete(_id)}
              >
                <DeleteIcon />
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div
        className="change-trans-mobile__backdrop"
        onClick={() => setSelectedTransaction(null)}
      ></div>
    </li>
  );
};

export default ChangeTransactionFormMobile;
