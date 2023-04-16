import React from "react";
import { useMediaQuery } from "react-responsive";

import CurrencyTab from "../CurrencyTab";
import Navigation from "../Navigation";
import Balance from "../Balance";

import "./styles.scss";

const Sidebar: React.FC = () => {
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  return (
    <div className="sidebar">
      <div className="sidebar__navigation-wrapper">
        <Navigation />

        <Balance />
      </div>

      {!isMobile && <CurrencyTab />}
    </div>
  );
};

export default Sidebar;
