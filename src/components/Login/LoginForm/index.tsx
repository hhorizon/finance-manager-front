import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Logo from "../../Unknown/Logo";
import { EyeIcon, EmailIcon, LockIcon } from "../../../icons";

import validate, { LoginFormValues } from "./validation";
import "./styles.scss";

interface RegistrationFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

const LoginForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const toRegistrationPage = () => {
    navigate("/registration");
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
      <Form className="login-form">
        <div className="login-form__logo-box">
          <Logo />
        </div>

        <div className="login-form__field">
          <EmailIcon className="login-form__field__icon" />

          <Field
            type="email"
            name="email"
            placeholder="E-mail"
            className="login-form__field__input"
          />

          <ErrorMessage
            name="email"
            render={(errorMes) => (
              <p className="login-form__field__error-message">{errorMes}</p>
            )}
          />
        </div>

        <div className="login-form__field password-field">
          <LockIcon className="login-form__field__icon" />

          <Field
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="login-form__field__input"
          />

          <ErrorMessage
            name="password"
            render={(errorMes) => (
              <p className="login-form__field__error-message">{errorMes}</p>
            )}
          />

          <EyeIcon
            onClick={() => setShowPassword(!showPassword)}
            className="password-field__hidden-icon"
          />
        </div>

        <button type="submit" className="login-form__button main-button">
          Login
        </button>

        <button
          type="button"
          className="login-form__button secondary-button"
          onClick={() => toRegistrationPage()}
        >
          Registration
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
