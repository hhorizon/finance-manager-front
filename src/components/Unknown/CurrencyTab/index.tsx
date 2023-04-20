import React from "react";

import { normalizeAmount } from "../../../utils";
import "./styles.scss";

import { currency } from "./mockData";

const CurrencyTab: React.FC = () => {
  return (
    <div className="currency">
      <div className="currency__head">
        <div className="currency__head__title">Currency</div>
        <div className="currency__head__title">Buy</div>
        <div className="currency__head__title">Sale</div>
      </div>
      <div className="currency__body">
        {currency ? (
          currency.map((curr) => (
            <ul key={curr.ccy} className="currency__body__row">
              <li className="currency__body__item">{curr.ccy}</li>
              <li className="currency__body__item">
                {normalizeAmount(Number(curr.buy))}
              </li>
              <li className="currency__body__item">
                {normalizeAmount(Number(curr.sale))}
              </li>
            </ul>
          ))
        ) : (
          <p>Oops... Something goes wrong, try later</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyTab;
