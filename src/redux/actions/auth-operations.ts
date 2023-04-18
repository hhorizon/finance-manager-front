import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { RootState } from "../store";
import { notification } from "../../utils/createNotification";
import {
  RegistrationCredential,
  LoginCredential,
  LoginResponse,
  LoginResponseData,
  RefreshCurrentResponse,
  RefreshCurrentResponsData,
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
  async (credentials, thunkAPI) => {
    try {
      await axios.post("/auth/signup", credentials);

      notification(
        "Successful registration. Confirm your email to join",
        "success",
      );
    } catch (error) {
      if (error instanceof AxiosError)
        notification(error.response?.data.message, "error");

      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const signIn = createAsyncThunk<LoginResponseData, LoginCredential>(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post<LoginResponse>(
        "/auth/signin",
        credentials,
      );

      token.set(data.payload.token);

      return data.payload;
    } catch (error) {
      if (error instanceof AxiosError)
        notification(error.response?.data.message, "error");

      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const refreshCurrentUser = createAsyncThunk<
  RefreshCurrentResponsData,
  void,
  { state: RootState }
>("auth/refreshCurrentUser", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken !== null) {
      token.set(persistedToken);
    }

    const { data } = await axios.get<RefreshCurrentResponse>("/auth/current");

    return data.payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(null);
  }
});

export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  try {
    await axios.get("/auth/signout");

    token.unSet();
  } catch (error) {
    if (error instanceof AxiosError)
      notification(error.response?.data.message, "error");

    return thunkAPI.rejectWithValue(null);
  }
});
