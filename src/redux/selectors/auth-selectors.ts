import { RootState } from "../store";

export const tokenSelector = (state: RootState) => state.auth.token;

export const isUserloggedInSelector = (state: RootState) =>
  state.auth.isUserloggedIn;

export const isAuthLoadingSelector = (state: RootState) =>
  state.auth.isAuthLoading;
