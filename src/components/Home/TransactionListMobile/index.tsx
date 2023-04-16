import React, { useEffect, useCallback } from "react";
import moment from "moment";
import { Transaction } from "../../../types";
import "./styles.scss";

interface TransactionListMobileProps {
  transactions: Transaction[];
  onBottomScroll: () => void;
}

const TransactionListMobile: React.FC<TransactionListMobileProps> = ({
  transactions,
  onBottomScroll,
}) => {
  const getItemColorClass = (transaction: Transaction) =>
    `trans-list-mobile__item--${transaction.type}`;

  const getAmountColorClass = (transaction: Transaction) =>
    `trans-list-mobile__item__field__value--${transaction.type}`;

  const onScroll = useCallback(() => {
    const isBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (isBottom) {
      onBottomScroll();
    }
  }, [onBottomScroll]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <ul className="trans-list-mobile">
      {transactions.map((transaction) => (
        <li
          key={transaction._id}
          className={`trans-list-mobile__item ${getItemColorClass(
            transaction,
          )}`}
        >
          <div className="trans-list-mobile__item__field">
            <p className="trans-list-mobile__item__field__name">Date</p>
            <p className="trans-list-mobile__item__field__value">
              {moment(transaction.date).format("DD.MM.YYYY")}
            </p>
          </div>
          <div className="trans-list-mobile__item__field">
            <p className="trans-list-mobile__item__field__name">Category</p>
            <p className="trans-list-mobile__item__field__value">
              {transaction.category}
            </p>
          </div>
          <div className="trans-list-mobile__item__field">
            <p className="trans-list-mobile__item__field__name">Comment</p>
            <p className="trans-list-mobile__item__field__value trans-list-mobile__item__field__value--limit">
              {transaction.comment}
            </p>
          </div>
          <div className="trans-list-mobile__item__field">
            <p className="trans-list-mobile__item__field__name">Amount</p>
            <p
              className={`trans-list-mobile__item__field__value ${getAmountColorClass(
                transaction,
              )}`}
            >
              {transaction.sum}
            </p>
          </div>
          <div className="trans-list-mobile__item__field">
            <p className="trans-list-mobile__item__field__name">Balance</p>
            <p className="trans-list-mobile__item__field__value"></p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionListMobile;
