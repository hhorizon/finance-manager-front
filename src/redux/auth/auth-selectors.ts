import { RootState } from "../store";

export const getUser = (state: RootState) => state.auth.userData;

export const getIsUserLoading = (state: RootState) => state.auth.isloading;

export const getToken = (state: RootState) => state.auth.token;
