import React from "react";
import { useMediaQuery } from "react-responsive";

import CurrencyTab from "../CurrencyTab";
import Navigation from "../Navigation";
import Balance from "../Balance";

import "./styles.scss";

interface SidebarProps {
  balance: string;
}

const Sidebar: React.FC<SidebarProps> = ({ balance }) => {
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  return (
    <div className="sidebar">
      <div className="sidebar__navigation-wrapper">
        <Navigation />

        <Balance balance={balance} />
      </div>

      {!isMobile && <CurrencyTab />}
    </div>
  );
};

export default Sidebar;
