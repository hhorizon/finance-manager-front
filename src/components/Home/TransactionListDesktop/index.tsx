import React from "react";
import moment from "moment";

import Pagination from "../../Unknown/Pagination";

import { Transaction } from "../../../types";
import "./styles.scss";

interface TransactionListDesktopProps {
  transactions: Transaction[];
  totalPages: number;
  onPaginationChange: (page: number) => void;
}

const TransactionListDesktop: React.FC<TransactionListDesktopProps> = ({
  transactions,
  totalPages,
  onPaginationChange,
}) => {
  return (
    <div className="trans-list-desktop">
      <div className="trans-list-desktop__head">
        <div className="trans-list-desktop__head__name">Date</div>
        <div className="trans-list-desktop__head__name">Category</div>
        <div className="trans-list-desktop__head__name">Comment</div>
        <div className="trans-list-desktop__head__name">Amount</div>
        <div className="trans-list-desktop__head__name">Balance</div>
      </div>

      <ul className="trans-list-desktop__body">
        {transactions.map((transaction) => (
          <li key={transaction._id} className="trans-list-desktop__body__item">
            <div className="trans-list-desktop__body__value trans-list-desktop__body__value--center">
              {moment(transaction.date).format("DD.MM.YYYY")}
            </div>
            <div className="trans-list-desktop__body__value trans-list-desktop__body__value--start">
              {transaction.category}
            </div>
            <div className="trans-list-desktop__body__value trans-list-desktop__body__value--start trans-list-desktop__body__value--limit">
              {transaction.comment}
            </div>
            <div
              className={`trans-list-desktop__body__value 
        trans-list-desktop__body__value--${transaction.type} trans-list-desktop__body__value--end`}
            >
              {transaction.sum}
            </div>
            <div className="trans-list-desktop__body__value trans-list-desktop__body__value--end">
              18 000
            </div>
          </li>
        ))}
      </ul>

      {totalPages !== 1 && (
        <div className="trans-list-desktop__pagination">
          <Pagination
            totalPages={totalPages}
            onPaginationChange={onPaginationChange}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionListDesktop;
