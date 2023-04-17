import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import PasswordStrengthEstimator from "../../Unknown/PasswordStrengthEstimator";
import Logo from "../../Unknown/Logo";
import Button from "../../Unknown/Button";
import { EyeIcon, EmailIcon, LockIcon, AccountIcon } from "../../Unknown/Icons";

import validate from "./validation";
import { RegistrationFormValues } from "../../../types";
import "./styles.scss";

interface RegistrationFormProps {
  onSubmit: (values: RegistrationFormValues) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
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
      <Form className="registration-form">
        <div className="registration-form__logo-box">
          <Logo />
        </div>

        <div className="registration-form__field">
          <EmailIcon className="registration-form__field__icon" />

          <Field
            type="email"
            name="email"
            placeholder="E-mail"
            className="registration-form__field__input"
          />

          <ErrorMessage
            name="email"
            render={(errorMes) => (
              <p className="registration-form__field__error-message">
                {errorMes}
              </p>
            )}
          />
        </div>

        <div className="registration-form__field password-field">
          <LockIcon className="registration-form__field__icon " />

          <Field
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="registration-form__field__input"
            onInput={(event: FormEvent<HTMLInputElement>) =>
              setPassword(event.currentTarget.value)
            }
          />

          <ErrorMessage
            name="password"
            render={(errorMes) => (
              <p className="registration-form__field__error-message password-field__error-message">
                {errorMes}
              </p>
            )}
          />

          <EyeIcon
            onClick={() => setShowPassword(!showPassword)}
            className="registration-form__field__hidden-icon"
          />

          <div className="password-field__strength-estimator">
            <PasswordStrengthEstimator password={password} />
          </div>
        </div>

        <div className="registration-form__field">
          <LockIcon className="registration-form__field__icon" />

          <Field
            type={showPassword ? "text" : "password"}
            name="repeatedPassword"
            placeholder="Confirm password"
            className="registration-form__field__input"
          />

          <ErrorMessage
            name="repeatedPassword"
            render={(errorMes) => (
              <p className="registration-form__field__error-message">
                {errorMes}
              </p>
            )}
          />
        </div>

        <div className="registration-form__field">
          <AccountIcon className="registration-form__field__icon" />

          <Field
            type="text"
            name="name"
            placeholder="Your name"
            className="registration-form__field__input"
          />

          <ErrorMessage
            name="name"
            render={(errorMes) => (
              <p className="registration-form__field__error-message">
                {errorMes}
              </p>
            )}
          />
        </div>

        <Button variant="main" type="submit">
          Registration
        </Button>

        <Button type="button" onClick={() => toLoginPage()}>
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
