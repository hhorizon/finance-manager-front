import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
  signIn,
  refreshCurrentUser,
  signOut,
} from "../actions/auth-operations";

type AuthState = {
  token: string | null;
  isUserloggedIn: boolean;
  isAuthLoading: boolean;
};

const initialState: AuthState = {
  token: null,
  isUserloggedIn: false,
  isAuthLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signUp
    builder.addCase(signUp.pending, (state, { payload }) => {
      state.isAuthLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isAuthLoading = false;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.isAuthLoading = false;
    });

    // signIn
    builder.addCase(signIn.pending, (state, { payload }) => {
      state.isAuthLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.isUserloggedIn = true;
      state.isAuthLoading = false;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.isAuthLoading = false;
    });

    // refresh current user
    builder.addCase(refreshCurrentUser.pending, (state, { payload }) => {
      state.isAuthLoading = true;
    });
    builder.addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      state.isUserloggedIn = true;
      state.isAuthLoading = false;
    });
    builder.addCase(refreshCurrentUser.rejected, (state, { payload }) => {
      state.isAuthLoading = false;
    });

    // signOut
    builder.addCase(signOut.pending, (state, { payload }) => {
      state.isAuthLoading = true;
    });
    builder.addCase(signOut.fulfilled, (state, { payload }) => {
      state.isUserloggedIn = false;
      state.token = null;
      state.isAuthLoading = false;
    });
    builder.addCase(signOut.rejected, (state, { payload }) => {
      state.isAuthLoading = false;
    });
  },
});

export default authSlice.reducer;
