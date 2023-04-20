import React from "react";

import Logo from "../Logo";
import { ExitIcon } from "../Icons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { signOut } from "../../../redux/actions/auth-operations";
import { userSelector } from "../../../redux/selectors/user-selectors";

import "./styles.scss";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  const onExit = () => {
    dispatch(signOut());
  };

  return (
    <header className="header">
      <div className="header__container">
        <Logo />

        <div className="header__user-menu">
          <p className="header__user-menu__name">{user.name}</p>

          <button
            title="Exit"
            className="header__user-menu__exit-button"
            onClick={() => onExit()}
          >
            <ExitIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
