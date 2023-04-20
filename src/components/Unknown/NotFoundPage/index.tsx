import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "../Container";
import Button from "../Button";

import "./styles.scss";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container withBlur>
      <div className="not-found-page">
        <div className="not-found-page__content-wrapper">
          <h3 className="not-found-page__title">Not found</h3>
          <p className="not-found-page__sub-title">
            Oops, something wrong... Please, return to the main page
          </p>
          <Button onClick={() => navigate("/")}>Main</Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
