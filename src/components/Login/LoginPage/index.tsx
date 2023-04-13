import React from "react";

import Container from "../../Unknown/Container";
import LoginForm from "../LoginForm";
import loginImage from "../../../assets/img/login-page-img.png";

import { LoginFormValues } from "../LoginForm/validation";
import "./styles.scss";

const LoginPage: React.FC = () => {
  const onLoginSubmit = (values: LoginFormValues) => {
    // TODO send credentials
    console.log(values);
  };

  return (
    <Container>
      <div className="login-page">
        <div className="login-page__image-wrapper">
          <img
            src={loginImage}
            alt="registretionImage"
            className="login-page__image"
          />

          <p className="login-page__title">Your Finance App</p>
        </div>

        <div className="login-page__form-wrapper">
          <LoginForm onSubmit={onLoginSubmit} />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
