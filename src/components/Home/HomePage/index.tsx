import React, { useState, useEffect } from "react";
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
import { isUserloggedInSelector } from "../../../redux/selectors/auth-selectors";
import { AddTransactionRequestBody, Transaction } from "../../../types";
import "./styles.scss";

const HomePage: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const isUserloggedIn = useAppSelector(isUserloggedInSelector);
  const categories = useAppSelector(categoriesSelector);
  const { transactions, totalPages, nextPage } = useAppSelector(
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
    setShowDeleteModal(false);
  };

  useEffect(() => {
    isUserloggedIn && dispatch(fetchAllTransactions(1));
  }, [dispatch, isUserloggedIn]);

  return (
    <>
      <Header />
      <Container withBlur>
        <div className="home-page">
          <div className="home-page__sidebar-wrapper">
            <Sidebar />
          </div>

          <div className="home-page__trasactions-list-wrapper">
            {isMobile ? (
              <TransactionListMobile
                transactions={transactions}
                categories={categories}
                selectedTransaction={selectedTransaction}
                setSelectedTransaction={setSelectedTransaction}
                onBottomScroll={fetchNextPageOnScroll}
                onUpdate={handleUpdateTransaction}
                onDelete={() => setShowDeleteModal(true)}
              />
            ) : (
              <TransactionListDesktop
                transactions={transactions}
                totalPages={totalPages}
                categories={categories}
                selectedTransaction={selectedTransaction}
                setSelectedTransaction={setSelectedTransaction}
                onPaginationChange={fetchNextPageOnPaginationChange}
                onUpdate={handleUpdateTransaction}
                onDelete={() => setShowDeleteModal(true)}
              />
            )}
          </div>
        </div>
      </Container>

      {showAddModalButton && (
        <button
          className="add-transaction-button"
          onClick={() => setShowAddModal(true)}
        >
          <PlusIcon />
        </button>
      )}

      {showAddModal && (
        <ModalContainer closeModal={() => setShowAddModal(false)}>
          <AddTransactionModal closeModal={() => setShowAddModal(false)} />
        </ModalContainer>
      )}

      {showDeleteModal && selectedTransaction && (
        <ModalContainer closeModal={() => setShowDeleteModal(false)}>
          <DeleteTransactionModal
            text="Do you want to delete this transaction?"
            closeModal={() => setShowDeleteModal(false)}
            onSubmit={() => handleDeleteTransaction(selectedTransaction._id)}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default HomePage;
