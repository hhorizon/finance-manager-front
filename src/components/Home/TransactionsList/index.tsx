import React from "react";
import moment from "moment";
import { useMediaQuery } from "react-responsive";

import TransactionsListItemMobile from "../TransactionsListItemMobile";

import { Transaction } from "../../../types";
import "./styles.scss";

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile)
    return (
      <ul className="trans-list__mobile">
        {transactions.map((transaction) => (
          <TransactionsListItemMobile
            transaction={transaction}
            key={transaction._id}
          />
        ))}
      </ul>
    );

  return (
    <div className="trans-list">
      <div className="trans-list__head">
        <div className="trans-list__head__name">Date</div>
        <div className="trans-list__head__name">Category</div>
        <div className="trans-list__head__name">Comment</div>
        <div className="trans-list__head__name">Amount</div>
        <div className="trans-list__head__name">Balance</div>
      </div>

      <ul className="trans-list__table">
        {transactions.map((transaction) => (
          <li key={transaction._id} className="trans-list__table__item">
            <div className="trans-list__table__value trans-list__table__value--center">
              {moment(transaction.date).format("DD.MM.YYYY")}
            </div>
            <div className="trans-list__table__value trans-list__table__value--start">
              {transaction.category}
            </div>
            <div className="trans-list__table__value trans-list__table__value--start trans-list__table__value--limit">
              {transaction.comment}
            </div>
            <div
              className={`trans-list__table__value 
            trans-list__table__value--${transaction.type} trans-list__table__value--end`}
            >
              {transaction.sum}
            </div>
            <div className="trans-list__table__value trans-list__table__value--end">
              18 000
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
