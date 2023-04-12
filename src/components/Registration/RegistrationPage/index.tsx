import React from "react";

import Container from "../../Unknown/Container";
import RegistrationForm from "../RegistrationForm";
import registretionImage from "../../../assets/img/registretion-page-img.png";

import { RegistrationFormValues } from "../RegistrationForm/validation";
import "./styles.scss";

const RegistrationPage: React.FC = () => {
  const onRegistrationSubmit = (values: RegistrationFormValues) => {
    // TODO send credentials
    console.log(values);
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
          <RegistrationForm onSubmit={onRegistrationSubmit} />
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
