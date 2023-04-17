import React from "react";

import Container from "../../Unknown/Container";
import LoginForm from "../LoginForm";
import loginImage from "../../../assets/img/login-page-img.png";

import { useAppDispatch } from "../../../redux/hooks";
import { signIn } from "../../../redux/actions/auth-operations";
import { LoginFormValues } from "../../../types";
import "./styles.scss";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: LoginFormValues) => {
    const { email, password } = values;
    dispatch(signIn({ email, password }));
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
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
