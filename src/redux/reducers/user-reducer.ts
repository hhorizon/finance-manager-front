import { createSlice } from "@reduxjs/toolkit";

import {
  signIn,
  refreshCurrentUser,
  signOut,
} from "../actions/auth-operations";
import { updateBalance } from "../actions/user-operations";
import { fetchAllTransactions } from "../actions/transactions-operations";
import { User } from "../../types";

type UserState = {
  user: User;
  isUserLoading: boolean;
};

const initialState: UserState = {
  user: {
    email: null,
    name: null,
    balance: null,
    subscription: null,
  },
  isUserLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.user = initialState.user;
    });

    builder.addCase(updateBalance.pending, (state) => {
      state.isUserLoading = true;
    });
    builder.addCase(updateBalance.fulfilled, (state, { payload }) => {
      state.user.balance = payload.balance;
      state.isUserLoading = false;
    });
    builder.addCase(updateBalance.rejected, (state) => {
      state.isUserLoading = false;
    });

    builder.addCase(fetchAllTransactions.fulfilled, (state, { payload }) => {
      state.user.balance = payload.balance;
    });
  },
});

export default userSlice.reducer;
