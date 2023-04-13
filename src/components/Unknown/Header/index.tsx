import React from "react";

import Logo from "../Logo";
import { ExitIcon } from "../../../icons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { signOut } from "../../../redux/auth/auth-operations";
import { getUser } from "../../../redux/auth/auth-selectors";

import "./styles.scss";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  const onExit = () => {
    try {
      dispatch(signOut());
    } catch (error) {
      // TODO add notification
      console.log(error);
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <Logo />

        <div className="header__user-menu">
          {/* TODO add user name */}
          <p className="header__user-menu__name">{user.name}</p>

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
