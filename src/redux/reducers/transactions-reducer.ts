import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllTransactions,
  addTransaction,
  updateTransaction,
  fetchNextPage,
  fetchStatistics,
} from "../actions/transactions-operations";
import { AllTransactions, CategoriesList, Statistics } from "../../types";

type TransactionsState = {
  allTransition: AllTransactions;
  categories: CategoriesList;
  statistics: Statistics;
  isTransactionsLoading: boolean;
};

const initialState: TransactionsState = {
  allTransition: {
    hasNextPage: false,
    hasPrevPage: false,
    limit: 0,
    page: 1,
    totalPages: 0,
    totalTransaction: 0,
    transactions: [],
    nextPage: null,
  },
  categories: { incoming: [], spending: [] },
  statistics: {
    incomingStatistics: {
      categories: [],
      totalSum: 0,
    },
    spendingStatistics: {
      categories: [],
      totalSum: 0,
    },
  },
  isTransactionsLoading: false,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAll
    builder.addCase(fetchAllTransactions.pending, (state) => {
      state.isTransactionsLoading = true;
    });
    builder.addCase(fetchAllTransactions.fulfilled, (state, { payload }) => {
      state.allTransition = payload.transactions;
      state.categories = payload.categories;
      state.isTransactionsLoading = false;
    });
    builder.addCase(fetchAllTransactions.rejected, (state) => {
      state.isTransactionsLoading = false;
    });

    // add
    builder.addCase(addTransaction.pending, (state) => {
      state.isTransactionsLoading = true;
    });
    builder.addCase(addTransaction.fulfilled, (state) => {
      state.isTransactionsLoading = false;
    });
    builder.addCase(addTransaction.rejected, (state) => {
      state.isTransactionsLoading = false;
    });

    // update
    builder.addCase(updateTransaction.pending, (state) => {
      state.isTransactionsLoading = true;
    });
    builder.addCase(updateTransaction.fulfilled, (state) => {
      state.isTransactionsLoading = false;
    });
    builder.addCase(updateTransaction.rejected, (state) => {
      state.isTransactionsLoading = false;
    });

    // nextPage
    builder.addCase(fetchNextPage.pending, (state) => {
      state.isTransactionsLoading = true;
    });
    builder.addCase(fetchNextPage.fulfilled, (state, { payload }) => {
      state.allTransition = {
        ...payload.transactions,
        transactions: [
          ...state.allTransition.transactions,
          ...payload.transactions.transactions,
        ],
      };
    });
    builder.addCase(fetchNextPage.rejected, (state) => {
      state.isTransactionsLoading = false;
    });

    // statistics
    builder.addCase(fetchStatistics.pending, (state) => {
      state.isTransactionsLoading = true;
    });
    builder.addCase(fetchStatistics.fulfilled, (state, { payload }) => {
      state.statistics = payload.statistics;
      state.isTransactionsLoading = false;
    });
    builder.addCase(fetchStatistics.rejected, (state) => {
      state.isTransactionsLoading = false;
    });
  },
});

export default transactionsSlice.reducer;
