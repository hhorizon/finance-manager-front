import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../Unknown/Container";
import RegistrationForm from "../RegistrationForm";
import Button from "../../Unknown/Button";
import registretionImage from "../../../assets/img/registretion-page-img.png";

import { useAppDispatch } from "../../../redux/hooks";
import { signUp } from "../../../redux/actions/auth-operations";
import { RegistrationFormValues } from "../../../types";
import "./styles.scss";

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: RegistrationFormValues) => {
    const { email, password, name } = values;
    const { meta } = await dispatch(signUp({ email, password, name }));
    if (meta.requestStatus === "fulfilled") navigate("/login");
  };

  return (
    <Container>
      <div className="registration-page">
        <div className="registration-page__image-wrapper">
          <img
            src={registretionImage}
            alt="registretionImage"
            className="registration-page__image"
          />

          <p className="registration-page__title">Your Finance App</p>
        </div>

        <div className="registration-page__form-wrapper">
          <div className="registration-page__form-container">
            <RegistrationForm onSubmit={onSubmit} />

            <Button type="button" onClick={() => navigate("/")}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
