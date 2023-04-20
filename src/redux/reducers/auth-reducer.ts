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
    builder.addCase(signUp.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.isAuthLoading = false;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isAuthLoading = false;
    });

    builder.addCase(signIn.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.isUserloggedIn = true;
      state.isAuthLoading = false;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isAuthLoading = false;
    });

    builder.addCase(refreshCurrentUser.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(refreshCurrentUser.fulfilled, (state) => {
      state.isUserloggedIn = true;
      state.isAuthLoading = false;
    });
    builder.addCase(refreshCurrentUser.rejected, (state) => {
      state.isAuthLoading = false;
    });

    builder.addCase(signOut.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.isUserloggedIn = false;
      state.token = null;
      state.isAuthLoading = false;
    });
    builder.addCase(signOut.rejected, (state) => {
      state.isAuthLoading = false;
    });
  },
});

export default authSlice.reducer;
