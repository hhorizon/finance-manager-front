import { RootState } from "../store";

export const userSelector = (state: RootState) => state.auth.userData;

export const isAuthLoadingSelector = (state: RootState) =>
  state.auth.isAuthLoading;

export const tokenSelector = (state: RootState) => state.auth.token;
