import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, refreshCurrentUser, signOut } from "./auth-operations";
import { UserData } from "../../types";

type AuthState = {
  userData: UserData;
  isloading: boolean;
  token: string | null;
};

const initialState: AuthState = {
  userData: {
    email: null,
    name: null,
    subscription: null,
  },
  isloading: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signUp
    builder.addCase(signUp.pending, (state, { payload }) => {
      state.isloading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isloading = false;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.isloading = false;
    });
    // signIn
    builder.addCase(signIn.pending, (state, { payload }) => {
      state.isloading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.userData = payload.user;
      state.token = payload.token;
      state.isloading = false;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.isloading = false;
    });
    // refresh current user
    builder.addCase(refreshCurrentUser.pending, (state, { payload }) => {
      state.isloading = true;
    });
    builder.addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      state.userData = payload.user;
      state.isloading = false;
    });
    builder.addCase(refreshCurrentUser.rejected, (state, { payload }) => {
      state.isloading = false;
    });
    // signOut
    builder.addCase(signOut.pending, (state, { payload }) => {
      state.isloading = true;
    });
    builder.addCase(signOut.fulfilled, (state, { payload }) => {
      state.userData = initialState.userData;
      state.token = null;
      state.isloading = false;
    });
    builder.addCase(signOut.rejected, (state, { payload }) => {
      state.isloading = false;
    });
  },
});

export default authSlice.reducer;
