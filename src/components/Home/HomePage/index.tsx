import React, { useEffect } from "react";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";
import Sidebar from "../../Unknown/Sidebar";
import TransactionsList from "../TransactionsList";
import AddTransactionModal from "../../Unknown/AddTransactionModal";
import ModalContainer from "../../Unknown/ModalContainer";
import Pagination from "../../Unknown/Pagination";
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      if (isBottom && allTransactions.nextPage) {
        dispatch(fetchNextPage(allTransactions.nextPage));
      }
    });
  }, [allTransactions, dispatch]);

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

          {allTransactions.transaction.length > 1 && (
            <div className="home-page__trasactions-list-wrapper">
              <TransactionsList transactions={allTransactions.transaction} />

              {/* <Pagination
                totalPages={allTransactions.totalPages}
                onPaginationChange={(page) =>
                  dispatch(fetchAllTransactions(page))
                }
              /> */}
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
