import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Logo from "../../Unknown/Logo";
import Button from "../../Unknown/Button";
import { EyeIcon, EmailIcon, LockIcon } from "../../Unknown/Icons";

import validate from "./validation";
import { LoginFormValues } from "../../../types";
import "./styles.scss";

interface RegistrationFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

const LoginForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
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
            className="login-form__field__hidden-icon"
          />
        </div>

        <Button variant="main" type="submit">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
