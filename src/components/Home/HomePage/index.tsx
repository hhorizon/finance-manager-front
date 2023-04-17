import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";
import Sidebar from "../../Unknown/Sidebar";
import ModalContainer from "../../Unknown/ModalContainer";
import AddTransactionModal from "../../Unknown/AddTransactionModal";
import DeleteTransactionModal from "../../Unknown/InformationModal";
import TransactionListMobile from "../TransactionListMobile";
import TransactionListDesktop from "../TransactionListDesktop";

import { PlusIcon } from "../../Unknown/Icons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  openAddModal,
  closeAddModal,
  openDeleteModal,
  closeDeleteModal,
} from "../../../redux/actions/common-actions";
import {
  isAddModalOpenSelector,
  isDeleteModalOpenSelector,
} from "../../../redux/selectors/common-selectors";
import {
  fetchAllTransactions,
  fetchNextPage,
  updateTransaction,
  deleteTransaction,
} from "../../../redux/actions/transactions-operations";
import {
  allTransactionsSelector,
  categoriesSelector,
} from "../../../redux/selectors/transactions-selectors";
import { userSelector } from "../../../redux/selectors/user-selectors";
import { AddTransactionRequestBody, Transaction } from "../../../types";
import "./styles.scss";

const HomePage: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const dispatch = useAppDispatch();
  const isAddModalOpen = useAppSelector(isAddModalOpenSelector);
  const isDeleteModalOpen = useAppSelector(isDeleteModalOpenSelector);
  const user = useAppSelector(userSelector);
  const categories = useAppSelector(categoriesSelector);
  const { transactions, page, totalPages, nextPage } = useAppSelector(
    allTransactionsSelector,
  );
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const showAddModalButton = user.balance && selectedTransaction === null;

  const fetchNextPageOnScroll = () => {
    if (nextPage) {
      dispatch(fetchNextPage(nextPage));
    }
  };

  const fetchNextPageOnPaginationChange = (page: number) => {
    dispatch(fetchAllTransactions(page));
  };

  const handleUpdateTransaction = async (
    transactionId: string,
    body: AddTransactionRequestBody,
  ) => {
    await dispatch(updateTransaction({ transactionId, body }));
    await dispatch(fetchAllTransactions(1));
    setSelectedTransaction(null);
  };

  const handleDeleteTransaction = async (transactionId: string) => {
    await dispatch(deleteTransaction(transactionId));
    await dispatch(fetchAllTransactions(1));
    setSelectedTransaction(null);
  };

  return (
    <>
      <Header />
      <Container withBlur>
        <div className="home-page">
          <div className="home-page__sidebar-wrapper">
            <Sidebar />
          </div>

          {transactions.length !== 0 && (
            <div className="home-page__trasactions-list-wrapper">
              {isMobile ? (
                <TransactionListMobile
                  transactions={transactions}
                  categories={categories}
                  selectedTransaction={selectedTransaction}
                  setSelectedTransaction={setSelectedTransaction}
                  onBottomScroll={fetchNextPageOnScroll}
                  onUpdate={handleUpdateTransaction}
                  onDelete={() => dispatch(openDeleteModal())}
                />
              ) : (
                <TransactionListDesktop
                  transactions={transactions}
                  currentPage={page}
                  totalPages={totalPages}
                  categories={categories}
                  selectedTransaction={selectedTransaction}
                  setSelectedTransaction={setSelectedTransaction}
                  onPaginationChange={fetchNextPageOnPaginationChange}
                  onUpdate={handleUpdateTransaction}
                  onDelete={() => dispatch(openDeleteModal())}
                />
              )}
            </div>
          )}
        </div>
      </Container>

      {showAddModalButton && (
        <button
          className="add-transaction-button"
          onClick={() => dispatch(openAddModal())}
        >
          <PlusIcon />
        </button>
      )}

      {isAddModalOpen && (
        <ModalContainer closeModal={() => dispatch(closeAddModal())}>
          <AddTransactionModal closeModal={() => dispatch(closeAddModal())} />
        </ModalContainer>
      )}

      {isDeleteModalOpen && selectedTransaction && (
        <ModalContainer closeModal={() => dispatch(closeDeleteModal())}>
          <DeleteTransactionModal
            text="Do you want to delete this transaction?"
            closeModal={() => dispatch(closeDeleteModal())}
            onSubmit={() => handleDeleteTransaction(selectedTransaction._id)}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default HomePage;
