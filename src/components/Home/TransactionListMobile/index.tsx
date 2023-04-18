import React, { useEffect, useCallback } from "react";
import moment from "moment";

import ChangeTransactionFormMobile from "../ChangeTransactionFormMobile";

import { normalizeAmount } from "../../../utils";
import {
  Transaction,
  AddTransactionRequestBody,
  Categories,
} from "../../../types";
import "./styles.scss";

interface TransactionListMobileProps {
  transactions: Transaction[];
  categories: Categories;
  selectedTransaction: Transaction | null;
  setSelectedTransaction: (transaction: Transaction | null) => void;
  onBottomScroll: () => void;
  onUpdate: (id: string, body: AddTransactionRequestBody) => void;
  onDelete: (id: string) => void;
}

const TransactionListMobile: React.FC<TransactionListMobileProps> = ({
  transactions,
  categories,
  selectedTransaction,
  setSelectedTransaction,
  onBottomScroll,
  onUpdate,
  onDelete,
}) => {
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

  if (transactions.length === 0)
    return (
      <div className="trans-list-mobile__empty-message">
        The transaction list is empty
      </div>
    );

  return (
    <ul className="trans-list-mobile">
      {transactions.map((transaction) =>
        transaction._id === selectedTransaction?._id ? (
          <ChangeTransactionFormMobile
            key={transaction._id}
            transaction={transaction}
            categories={categories}
            onUpdate={onUpdate}
            onDelete={onDelete}
            setSelectedTransaction={setSelectedTransaction}
          />
        ) : (
          <li
            key={transaction._id}
            className={`trans-list-mobile__item trans-list-mobile__item--${transaction.type}`}
            onClick={() => setSelectedTransaction(transaction)}
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
                className={`trans-list-mobile__item__field__value trans-list-mobile__item__field__value--${transaction.type}`}
              >
                {normalizeAmount(transaction.sum)}
              </p>
            </div>
            <div className="trans-list-mobile__item__field">
              <p className="trans-list-mobile__item__field__name">Balance</p>
              <p className="trans-list-mobile__item__field__value">
                {normalizeAmount(transaction.balance)}
              </p>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

export default TransactionListMobile;
