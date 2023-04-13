import React, { useEffect, useState } from "react";

import { getCurrency } from "../../../services/common/privateBankService";
import { PrivateBankCurrency } from "../../../types";
import "./styles.scss";

import { testData } from "./testData";

const CurrencyTab: React.FC = () => {
  const [currency, setCurrensy] = useState<PrivateBankCurrency[] | null>(null);

  // useEffect(() => {
  //   getCurrency()
  //     .then((result) => setCurrensy(result))
  //     .catch((error) => {
  //       // TODO add notofocation
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="currency">
      <div className="currency__head">
        <div className="currency__head__title">Currency</div>
        <div className="currency__head__title">Buy</div>
        <div className="currency__head__title">Sale</div>
      </div>
      <div className="currency__body">
        {testData ? (
          testData.map((curr) => (
            <ul key={curr.ccy} className="currency__body__row">
              <li className="currency__body__item">{curr.ccy}</li>
              <li className="currency__body__item">{curr.buy}</li>
              <li className="currency__body__item">{curr.sale}</li>
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
