import React from "react";

import { normalizeAmount } from "../../../utils";
import { currency } from "./mockData";
import "./styles.scss";

const CurrencyTab: React.FC = () => {
  return (
    <div className="currency">
      <div className="currency__head">
        <p className="currency__head__title">Currency</p>
        <p className="currency__head__title">Buy</p>
        <p className="currency__head__title">Sale</p>
      </div>

      <ul className="currency__body">
        {currency ? (
          currency.map((curr) => (
            <li key={curr.ccy} className="currency__body__row">
              <p className="currency__body__item">{curr.ccy}</p>
              <p className="currency__body__item">
                {normalizeAmount(Number(curr.buy))}
              </p>
              <p className="currency__body__item">
                {normalizeAmount(Number(curr.sale))}
              </p>
            </li>
          ))
        ) : (
          <p>Oops... Something goes wrong, try later</p>
        )}
      </ul>
    </div>
  );
};

export default CurrencyTab;
