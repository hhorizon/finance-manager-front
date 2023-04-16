import React from "react";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";
import Sidebar from "../../Unknown/Sidebar";

import "./styles.scss";

const StatisticsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container withBlur>
        <div className="home-page">
          <div className="home-page__sidebar-wrapper">
            <Sidebar />
          </div>
        </div>
      </Container>
    </>
  );
};

export default StatisticsPage;
