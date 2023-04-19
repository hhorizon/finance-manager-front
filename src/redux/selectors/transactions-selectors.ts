import { RootState } from "../store";

export const allTransactionsSelector = (state: RootState) =>
  state.transactions.allTransition;

export const categoriesSelector = (state: RootState) =>
  state.transactions.categories;

export const statisticsSelector = (state: RootState) =>
  state.transactions.statistics;

export const isTransactionsLoadingSelector = (state: RootState) =>
  state.transactions.isTransactionsLoading;
