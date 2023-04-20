import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { HomeIcon, StatisticsIcon, CurrencyIcon } from "../Icons";

import "./styles.scss";

const Navigation: React.FC = () => {
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link--active"
            : "navigation__link"
        }
      >
        {isMobile ? (
          <HomeIcon className="navigation__link__icon" />
        ) : (
          <>
            <HomeIcon
              width={22}
              height={22}
              className="navigation__link__icon"
            />
            <p className="navigation__link__name">Home</p>
          </>
        )}
      </NavLink>

      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link--active"
            : "navigation__link"
        }
      >
        {isMobile ? (
          <StatisticsIcon className="navigation__link__icon" />
        ) : (
          <>
            <StatisticsIcon
              width={22}
              height={22}
              className="navigation__link__icon"
            />
            <p className="navigation__link__name">Statistics</p>
          </>
        )}
      </NavLink>

      {isMobile && (
        <NavLink
          to="/currency"
          className={({ isActive }) =>
            isActive
              ? "navigation__link navigation__link--active"
              : "navigation__link"
          }
        >
          <CurrencyIcon className="navigation__link__icon" />
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
