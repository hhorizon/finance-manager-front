import React from "react";

import Logo from "../Logo";
import { ExitIcon } from "../../../icons";

import "./styles.scss";

const Header: React.FC = () => {
  const onExit = () => {
    // TODO log out user
    console.log("user log out");
  };

  return (
    <div className="header">
      <div className="header__container">
        <Logo />

        <div className="header__user-menu">
          {/* TODO add user name */}
          <p className="header__user-menu__name">Name</p>

          <button
            className="header__user-menu__exit-button"
            onClick={() => onExit()}
          >
            <ExitIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
