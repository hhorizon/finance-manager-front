import React from "react";

import "./styles.scss";

interface BalanceProps {
  balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <div className="balance">
      <p className="balance__title">Balance</p>
      <p className="balance__quantity">₴ {balance}</p>
    </div>
  );
};

export default Balance;
