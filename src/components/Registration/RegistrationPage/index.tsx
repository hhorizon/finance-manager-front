import React from "react";

import Container from "../../Unknown/Container";
import RegistrationForm from "../RegistrationForm";
import registretionImage from "../../../assets/img/registretion-page-img.png";

import { RegistrationFormValues } from "../RegistrationForm/validation";
import { useAppDispatch } from "../../../redux/hooks";
import { signUp } from "../../../redux/actions/auth-operations";
import "./styles.scss";

const RegistrationPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (values: RegistrationFormValues) => {
    const { email, password, name } = values;

    try {
      dispatch(signUp({ email, password, name }));
    } catch (error) {
      // TODO add notification
      console.log(error);
    }
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
          <RegistrationForm onSubmit={onSubmit} />
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
