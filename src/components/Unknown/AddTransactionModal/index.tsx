import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import Toggle from "../Toggle";
import Button from "../Button";
import { SelectField } from "../SelectField";
import { CloseIcon, CalendarIcon } from "../../../icons";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  addTransaction,
  fetchAllTransactions,
} from "../../../redux/actions/transactions-operations";
import { categoriesSelector } from "../../../redux/selectors/transactions-selectors";
import { mapCategoriesForSelect } from "../../../services/common/mapCategoriesForSelect";
import "./styles.scss";

interface AddTransactionModalProps {
  closeModal: () => void;
}

type FormValues = {
  category: string;
  sum: number;
  date: Date;
  comment: string;
};
const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  closeModal,
}) => {
  const [type, setType] = useState<"incoming" | "spending">("spending");
  const dispatch = useAppDispatch();
  const categories = useAppSelector(categoriesSelector);

  const categoriesForSelect = mapCategoriesForSelect(categories[type]);

  const initialValues: FormValues = {
    category: "",
    sum: 0,
    date: new Date(),
    comment: " ",
  };

  const onSubmit = async (values: FormValues) => {
    await dispatch(addTransaction({ type, ...values }));
    await dispatch(fetchAllTransactions(1));
    closeModal();
  };

  const handlerTypeChange = (checked: boolean) => {
    setType(checked ? "incoming" : "spending");
  };

  const setActiveTypeNameClass = (typeName: string) => {
    return type === typeName
      ? `add-modal__type-name active-type-name-${typeName}`
      : "add-modal__type-name";
  };

  return (
    <div className="add-modal">
      <button className="add-modal__close-btn" onClick={closeModal}>
        <CloseIcon />
      </button>

      <p className="add-modal__title">Add transaction</p>

      <div className="add-modal__toggle-container">
        <p className={setActiveTypeNameClass("incoming")}>Incoming</p>

        <Toggle onInputChange={handlerTypeChange} />

        <p className={setActiveTypeNameClass("spending")}>Spending</p>
      </div>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form className="add-modal__form">
            <div className="add-modal__field">
              <SelectField
                required
                name="category"
                options={categoriesForSelect}
                placeholder="Select category"
                classNamePrefix="add-modal__field__select"
                openMenuOnFocus
              />
            </div>

            <div className="add-modal__sum-date-container">
              <div className="add-modal__field">
                <Field
                  required
                  min="0.5"
                  step="0.5"
                  type="number"
                  name="sum"
                  placeholder="0.00"
                  className="add-modal__field__input"
                />
              </div>
              <div className="add-modal__field">
                <Field name="date">
                  {() => (
                    <Datetime
                      value={values.date}
                      closeOnSelect
                      timeFormat={false}
                      dateFormat="DD.MM.YYYY"
                      inputProps={{ className: "add-modal__field__input" }}
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
              </div>
            </div>

            <div className="add-modal__field">
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className="add-modal__field__input add-modal__field__input-comment"
              />
            </div>

            <Button type="submit" variant="main">
              Submit
            </Button>

            <Button type="button" onClick={closeModal}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionModal;
