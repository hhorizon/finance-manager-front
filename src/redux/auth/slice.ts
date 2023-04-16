import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, refreshCurrentUser, signOut } from "./operations";
import { UserData } from "../../types";

type AuthState = {
  userData: UserData;
  isAuthLoading: boolean;
  token: string | null;
};

const initialState: AuthState = {
  userData: {
    email: null,
    name: null,
    subscription: null,
  },
  isAuthLoading: false,
  token: null,
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
      state.userData = payload.user;
      state.token = payload.token;
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
      state.userData = payload.user;
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
      state.userData = initialState.userData;
      state.token = null;
      state.isAuthLoading = false;
    });
    builder.addCase(signOut.rejected, (state, { payload }) => {
      state.isAuthLoading = false;
    });
  },
});

export default authSlice.reducer;
