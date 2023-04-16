import React from "react";
import moment from "moment";

import { Transaction } from "../../../types";
import "./styles.scss";

interface TransactionsListItemMobileProps {
  transaction: Transaction;
}

const TransactionsListItemMobile: React.FC<TransactionsListItemMobileProps> = ({
  transaction,
}) => {
  const itemColor = `trans-list-item-mobile--${transaction.type}`;

  const amountColor = `trans-list-item-mobile__field__value--${transaction.type}`;

  return (
    <li className={`trans-list-item-mobile ${itemColor}`}>
      <div className="trans-list-item-mobile__field">
        <p className="trans-list-item-mobile__field__name">Date</p>
        <p className="trans-list-item-mobile__field__value">
          {moment(transaction.date).format("DD.MM.YYYY")}
        </p>
      </div>
      <div className="trans-list-item-mobile__field">
        <p className="trans-list-item-mobile__field__name">Category</p>
        <p className="trans-list-item-mobile__field__value">
          {transaction.category}
        </p>
      </div>
      <div className="trans-list-item-mobile__field">
        <p className="trans-list-item-mobile__field__name">Comment</p>
        <p className="trans-list-item-mobile__field__value trans-list-item-mobile__field__value--limit">
          {transaction.comment}
        </p>
      </div>
      <div className="trans-list-item-mobile__field">
        <p className="trans-list-item-mobile__field__name">Amount</p>
        <p className={`trans-list-item-mobile__field__value ${amountColor}`}>
          {transaction.sum}
        </p>
      </div>
      <div className="trans-list-item-mobile__field">
        <p className="trans-list-item-mobile__field__name">Balance</p>
        <p className="trans-list-item-mobile__field__value"></p>
      </div>
    </li>
  );
};

export default TransactionsListItemMobile;
