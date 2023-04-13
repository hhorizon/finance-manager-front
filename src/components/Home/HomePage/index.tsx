import React from "react";
import { useMediaQuery } from "react-responsive";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";
import CurrencyTab from "../../Unknown/CurrencyTab";
import NavigationBar from "../../Unknown/NavigationBar";
import Balance from "../../Unknown/Balance";

import "./styles.scss";

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });
  return (
    <>
      <Header />
      <Container withBlur>
        <div className="home-page">
          <div className="home-page__side-bar">
            <div className="home-page__side-bar__navigation-wrapper">
              <NavigationBar />

              <Balance balance={24000} />
            </div>

            {!isMobile && <CurrencyTab />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
