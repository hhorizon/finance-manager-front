import React from "react";
import { WalletIcon } from "../../../icons";
import "./styles.scss";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <WalletIcon />
      <p className="logo__title">Fin.Manager</p>
    </div>
  );
};

export default Logo;
