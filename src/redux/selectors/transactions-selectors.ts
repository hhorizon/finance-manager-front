import { RootState } from "../store";

export const allTransactionsSelector = (state: RootState) =>
  state.transactions.allTransition;

export const categoriesSelector = (state: RootState) =>
  state.transactions.categories;

export const isAllTransactionsLoadingSelector = (state: RootState) =>
  state.transactions.isAllTransactionsLoading;

export const isAddTransactionLoadingSelector = (state: RootState) =>
  state.transactions.isAddTransactionLoading;
