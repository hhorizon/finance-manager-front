import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllTransactions,
  addTransaction,
  fetchNextPage,
} from "../actions/transactions-operations";
import { signIn, refreshCurrentUser } from "../actions/auth-operations";
import { AllTransactionsData, Categories } from "../../types";

type TransactionsState = {
  allTransition: Omit<AllTransactionsData, "balance">;
  categories: Categories;
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
    transactions: [],
    nextPage: null,
  },
  categories: { incoming: [], spending: [] },
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
        transactions: [
          ...state.allTransition.transactions,
          ...payload.transactions,
        ],
      };
    });
    builder.addCase(fetchNextPage.rejected, (state) => {
      state.isAddTransactionLoading = false;
    });

    // signIn
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.categories = payload.user.categories;
    });

    // refreshCurrentUser
    builder.addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      state.categories = payload.user.categories;
    });
  },
});

export default transactionsSlice.reducer;
