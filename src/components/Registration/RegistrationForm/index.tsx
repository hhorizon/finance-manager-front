import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Logo from "../../Unknown/Logo";
import { EyeIcon, EmailIcon, LockIcon, AccountIcon } from "../../../icons";

import validate, { RegistrationFormValues } from "./validation";
import "./styles.scss";

interface RegistrationFormProps {
  onSubmit: (values: RegistrationFormValues) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues: RegistrationFormValues = {
    email: "",
    password: "",
    repeatedPassword: "",
    name: "",
  };

  const toLoginPage = () => {
    navigate("/login");
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <Form className="sign-up-form">
        <div className="sign-up-form__logo-box">
          <Logo />
        </div>

        <div className="sign-up-form__field-box">
          <EmailIcon className="sign-up-form__field-icon" />

          <Field
            type="email"
            name="email"
            placeholder="E-mail"
            className="sign-up-form__field-input"
          />

          <ErrorMessage
            name="email"
            render={(errorMes) => (
              <p className="sign-up-form__field-error">{errorMes}</p>
            )}
          />
        </div>

        <div className="sign-up-form__field-box">
          <LockIcon className="sign-up-form__field-icon" />

          <Field
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="sign-up-form__field-input"
          />

          <ErrorMessage
            name="password"
            render={(errorMes) => (
              <p className="sign-up-form__field-error">{errorMes}</p>
            )}
          />

          <EyeIcon
            onClick={() => setShowPassword(!showPassword)}
            className="sign-up-form__password-icon"
          />
        </div>

        <div className="sign-up-form__field-box">
          <LockIcon className="sign-up-form__field-icon" />

          <Field
            type={showPassword ? "text" : "password"}
            name="repeatedPassword"
            placeholder="Confirm password"
            className="sign-up-form__field-input"
          />

          <ErrorMessage
            name="repeatedPassword"
            render={(errorMes) => (
              <p className="sign-up-form__field-error">{errorMes}</p>
            )}
          />
        </div>

        <div className="sign-up-form__field-box">
          <AccountIcon className="sign-up-form__field-icon" />

          <Field
            type="text"
            name="name"
            placeholder="Your name"
            className="sign-up-form__field-input"
          />

          <ErrorMessage
            name="name"
            render={(errorMes) => (
              <p className="sign-up-form__field-error">{errorMes}</p>
            )}
          />
        </div>

        <button type="submit" className="sign-up-form__button main-button">
          Registration
        </button>

        <button
          type="button"
          className="sign-up-form__button secondary-button"
          onClick={() => toLoginPage()}
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
