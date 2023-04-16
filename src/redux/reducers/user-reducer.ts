import { createSlice } from "@reduxjs/toolkit";
import {
  signIn,
  refreshCurrentUser,
  signOut,
} from "../actions/auth-operations";
import { UserData } from "../../types";

type UserState = {
  user: UserData;
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
    // signIn
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    // refresh current user
    builder.addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    // signOut
    builder.addCase(signOut.fulfilled, (state, { payload }) => {
      state.user = initialState.user;
    });
  },
});

export default userSlice.reducer;
