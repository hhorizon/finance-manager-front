import React from "react";
import { Link } from "react-router-dom";

import { WalletIcon } from "../Icons";
import "./styles.scss";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo">
      <WalletIcon />

      <p className="logo__title">Fin.Manager</p>
    </Link>
  );
};

export default Logo;
