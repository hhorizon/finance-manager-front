import { RootState } from "../store";

export const userSelector = (state: RootState) => state.user.user;

export const isUserLoadingSelector = (state: RootState) =>
  state.user.isUserLoading;
