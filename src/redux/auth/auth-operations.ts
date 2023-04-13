import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";
import {
  RegistrationCredential,
  LoginCredential,
  LoginResponse,
  LoginResponsePayload,
  RefreshCurrentResponse,
  RefreshCurrentPayload,
} from "../../types";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk<void, RegistrationCredential>(
  "auth/registration",
  async (credentials) => {
    await axios.post("/auth/signup", credentials);
  },
);

export const signIn = createAsyncThunk<LoginResponsePayload, LoginCredential>(
  "auth/signIn",
  async (credentials) => {
    const { data } = await axios.post<LoginResponse>(
      "/auth/signin",
      credentials,
    );

    token.set(data.payload.token);

    return data.payload;
  },
);

export const refreshCurrentUser = createAsyncThunk<
  RefreshCurrentPayload,
  void,
  { state: RootState }
>("auth/refreshCurrentUser", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken !== null) {
    token.set(persistedToken);
  }

  const { data } = await axios.get<RefreshCurrentResponse>("/auth/current");
  return data.payload;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
  await axios.get("/auth/signout");

  token.unSet();
});
