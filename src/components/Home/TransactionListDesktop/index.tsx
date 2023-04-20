import React from "react";
import moment from "moment";

import ChangeTransactionFormDesktop from "../ChangeTransactionFormDesktop";
import Pagination from "../../Unknown/Pagination";

import { normalizeAmount } from "../../../utils";
import {
  Transaction,
  AddTransactionRequestBody,
  CategoriesList,
} from "../../../types";
import "./styles.scss";

interface TransactionListDesktopProps {
  transactions: Transaction[];
  currentPage: number;
  totalPages: number;
  categories: CategoriesList;
  selectedTransaction: Transaction | null;
  setSelectedTransaction: (transaction: Transaction | null) => void;
  onPaginationChange: (page: number) => void;
  onUpdate: (id: string, body: AddTransactionRequestBody) => void;
  onDelete: (id: string) => void;
}

const TransactionListDesktop: React.FC<TransactionListDesktopProps> = ({
  transactions,
  currentPage,
  totalPages,
  categories,
  selectedTransaction,
  setSelectedTransaction,
  onPaginationChange,
  onUpdate,
  onDelete,
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

      {transactions.length === 0 && (
        <div className="trans-list-desktop__empty-message">
          The transaction list is empty
        </div>
      )}

      <ul className="trans-list-desktop__body">
        {transactions.map((transaction) =>
          transaction._id === selectedTransaction?._id ? (
            <ChangeTransactionFormDesktop
              key={transaction._id}
              transaction={selectedTransaction}
              categories={categories}
              onUpdate={onUpdate}
              onDelete={onDelete}
              setSelectedTransaction={setSelectedTransaction}
            />
          ) : (
            <li
              key={transaction._id}
              className="trans-list-desktop__body__item"
              onClick={() => setSelectedTransaction(transaction)}
            >
              <p className="trans-list-desktop__body__value trans-list-desktop__body__value--center">
                {moment(transaction.date).format("DD.MM.YYYY")}
              </p>
              <p className="trans-list-desktop__body__value trans-list-desktop__body__value--start">
                {transaction.category.name}
              </p>
              <p className="trans-list-desktop__body__value trans-list-desktop__body__value--start ">
                <span className="trans-list-desktop__body__value--limit">
                  {transaction.comment}
                </span>
              </p>
              <p
                className={`trans-list-desktop__body__value trans-list-desktop__body__value--${transaction.type} trans-list-desktop__body__value--end`}
              >
                {normalizeAmount(transaction.sum)}
              </p>
              <p className="trans-list-desktop__body__value trans-list-desktop__body__value--end">
                {normalizeAmount(transaction.balance)}
              </p>
            </li>
          ),
        )}
      </ul>

      {totalPages !== 1 && (
        <div className="trans-list-desktop__pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPaginationChange={onPaginationChange}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionListDesktop;
