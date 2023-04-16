import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";
import Navigation from "../../Unknown/Navigation";
import CurrencyTab from "../../Unknown/CurrencyTab";

import "./styles.scss";

const CurrencyPage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!isMobile) {
      navigate("/");
    }
  }, [isMobile, navigate]);

  return (
    <>
      <Header />
      <Container withBlur>
        <div className="currency-page">
          <Navigation />
          <CurrencyTab />
        </div>
      </Container>
    </>
  );
};

export default CurrencyPage;
