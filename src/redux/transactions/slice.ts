import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllTransactions,
  addTransaction,
  fetchNextPage,
} from "./operations";
import { AllTransactionsData } from "../../types";

type TransactionsState = {
  allTransition: AllTransactionsData;
  isAllTransactionsLoading: boolean;
  isAddTransactionLoading: boolean;
};

const initialState: TransactionsState = {
  allTransition: {
    hasNextPage: false,
    hasPrevPage: false,
    limit: 0,
    page: 1,
    totalPages: 0,
    totalTransaction: 0,
    transaction: [],
    nextPage: null,
  },
  isAllTransactionsLoading: false,
  isAddTransactionLoading: false,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAll
    builder.addCase(fetchAllTransactions.pending, (state) => {
      state.isAllTransactionsLoading = true;
    });
    builder.addCase(fetchAllTransactions.fulfilled, (state, { payload }) => {
      state.allTransition = payload;
      state.isAllTransactionsLoading = false;
    });
    builder.addCase(fetchAllTransactions.rejected, (state) => {
      state.isAllTransactionsLoading = false;
    });

    // add
    builder.addCase(addTransaction.pending, (state) => {
      state.isAddTransactionLoading = true;
    });
    builder.addCase(addTransaction.fulfilled, (state) => {
      state.isAddTransactionLoading = false;
    });
    builder.addCase(addTransaction.rejected, (state) => {
      state.isAddTransactionLoading = false;
    });

    // nextPage
    builder.addCase(fetchNextPage.pending, (state) => {
      state.isAddTransactionLoading = true;
    });
    builder.addCase(fetchNextPage.fulfilled, (state, { payload }) => {
      state.allTransition = {
        ...payload,
        transaction: [
          ...state.allTransition.transaction,
          ...payload.transaction,
        ],
      };
    });
    builder.addCase(fetchNextPage.rejected, (state) => {
      state.isAddTransactionLoading = false;
    });
  },
});

export default transactionsSlice.reducer;
