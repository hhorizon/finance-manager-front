import React from "react";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";

import "./styles.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container withBlur>
        <div className="home-page"></div>
      </Container>
    </>
  );
};

export default HomePage;
