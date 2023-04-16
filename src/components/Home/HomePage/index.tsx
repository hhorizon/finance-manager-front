import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";
import Sidebar from "../../Unknown/Sidebar";
import AddTransactionModal from "../../Unknown/AddTransactionModal";
import ModalContainer from "../../Unknown/ModalContainer";
import TransactionListMobile from "../TransactionListMobile";
import TransactionListDesktop from "../TransactionListDesktop";

import { PlusIcon } from "../../../icons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  openAddModal,
  closeAddModal,
} from "../../../redux/actions/common-actions";
import { isAddModalOpenSelector } from "../../../redux/selectors/common-selectors";
import {
  fetchAllTransactions,
  fetchNextPage,
} from "../../../redux/actions/transactions-operations";
import { allTransactionsSelector } from "../../../redux/selectors/transactions-selectors";
import { userSelector } from "../../../redux/selectors/user-selectors";
import "./styles.scss";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAddModalOpen = useAppSelector(isAddModalOpenSelector);
  const user = useAppSelector(userSelector);

  const { transactions, page, totalPages, nextPage } = useAppSelector(
    allTransactionsSelector,
  );
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const fetchNextPageOnScroll = () => {
    if (nextPage) {
      dispatch(fetchNextPage(nextPage));
    }
  };

  const fetchNextPageOnPaginationChange = (page: number) => {
    dispatch(fetchAllTransactions(page));
  };

  useEffect(() => {
    dispatch(fetchAllTransactions(1));
  }, [dispatch]);

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
                  onBottomScroll={fetchNextPageOnScroll}
                />
              ) : (
                <TransactionListDesktop
                  transactions={transactions}
                  currentPage={page}
                  totalPages={totalPages}
                  onPaginationChange={fetchNextPageOnPaginationChange}
                />
              )}
            </div>
          )}
        </div>
      </Container>

      {user.balance && (
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
    </>
  );
};

export default HomePage;
