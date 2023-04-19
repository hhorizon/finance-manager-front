import React, { useEffect, useCallback } from "react";
import { Formik, Form, Field } from "formik";
import Datetime from "react-datetime";
import moment from "moment";

import { SelectField } from "../../Unknown/SelectField";
import { SaveIcon, DeleteIcon } from "../../Unknown/Icons";

import { mapCategoriesForSelect } from "../../../utils";
import {
  Transaction,
  AddTransactionRequestBody,
  Categories,
} from "../../../types";
import "./styles.scss";

type FormValues = {
  category: string;
  sum: number;
  date: Date;
  comment: string;
};

interface ChangeTransactionFormDesktopProps {
  transaction: Transaction;
  categories: Categories;
  onUpdate: (id: string, body: AddTransactionRequestBody) => void;
  onDelete: (id: string) => void;
  setSelectedTransaction: (transaction: Transaction | null) => void;
}

const ChangeTransactionFormDesktop: React.FC<
  ChangeTransactionFormDesktopProps
> = ({
  transaction,
  categories,
  onUpdate,
  onDelete,
  setSelectedTransaction,
}) => {
  const { category, sum, date, comment, type, _id } = transaction;

  const categoriesForSelect = mapCategoriesForSelect(categories[type]);

  const initialValues: FormValues = {
    category: category.name,
    sum,
    date: new Date(date),
    comment,
  };

  const onSubmit = (values: FormValues) => {
    onUpdate(_id, {
      type,
      ...values,
      category: { name: values.category, color: "qweqwe" },
    });
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setSelectedTransaction(null);
      }
    },
    [setSelectedTransaction],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <li className="change-trans-desktop__item">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, dirty, setFieldValue }) => (
          <Form className="change-trans-desktop__form">
            <div className="change-trans-desktop__field change-trans-desktop__field--center">
              <Field name="date">
                {() => (
                  <Datetime
                    value={values.date}
                    closeOnSelect
                    timeFormat={false}
                    dateFormat="DD.MM.YYYY"
                    inputProps={{ className: "change-trans-desktop__input" }}
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

            <div className="change-trans-desktop__field change-trans-desktop__field--left">
              <SelectField
                required
                name="category"
                options={categoriesForSelect}
                className="change-trans-desktop__field__select__container"
                classNamePrefix="change-trans-desktop__field__select"
                openMenuOnFocus
              />
            </div>

            <div className="change-trans-desktop__field change-trans-desktop__field--left">
              <Field
                as="textarea"
                name="comment"
                className="change-trans-desktop__input change-trans-desktop__input--textarea"
              />
            </div>

            <div className="change-trans-desktop__field change-trans-desktop__field--right">
              <Field
                required
                min="0.5"
                step="0.5"
                type="number"
                name="sum"
                className={`change-trans-desktop__input change-trans-desktop__input--${type}`}
              />
            </div>

            <div className="change-trans-desktop__buttons-wrapper">
              {dirty && (
                <button
                  type="submit"
                  title="Save"
                  className="change-trans-desktop__button"
                >
                  <SaveIcon />
                </button>
              )}

              <button
                type="button"
                title="Delete"
                className="change-trans-desktop__button"
                onClick={() => onDelete(_id)}
              >
                <DeleteIcon />
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div
        className="change-trans-desktop__backdrop"
        onClick={() => setSelectedTransaction(null)}
      ></div>
    </li>
  );
};

export default ChangeTransactionFormDesktop;
