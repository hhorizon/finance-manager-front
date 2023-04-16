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
import { openAddModal, closeAddModal } from "../../../redux/common/actions";
import { isAddModalOpenSelector } from "../../../redux/common/selectors";
import {
  fetchAllTransactions,
  fetchNextPage,
} from "../../../redux/transactions/operations";
import { allTransactionsSelector } from "../../../redux/transactions/selectors";
import "./styles.scss";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAddModalOpen = useAppSelector(isAddModalOpenSelector);
  const allTransactions = useAppSelector(allTransactionsSelector);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const fetchNextPageOnScroll = () => {
    if (allTransactions.nextPage) {
      dispatch(fetchNextPage(allTransactions.nextPage));
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
            <Sidebar balance="24000" />
          </div>

          {allTransactions.transaction.length !== 0 && (
            <div className="home-page__trasactions-list-wrapper">
              {isMobile ? (
                <TransactionListMobile
                  transactions={allTransactions.transaction}
                  onBottomScroll={fetchNextPageOnScroll}
                />
              ) : (
                <TransactionListDesktop
                  transactions={allTransactions.transaction}
                  totalPages={allTransactions.totalPages}
                  onPaginationChange={fetchNextPageOnPaginationChange}
                />
              )}
            </div>
          )}
        </div>
      </Container>

      <button
        className="add-transaction-button"
        onClick={() => dispatch(openAddModal())}
      >
        <PlusIcon />
      </button>

      {isAddModalOpen && (
        <ModalContainer closeModal={() => dispatch(closeAddModal())}>
          <AddTransactionModal closeModal={() => dispatch(closeAddModal())} />
        </ModalContainer>
      )}
    </>
  );
};

export default HomePage;
