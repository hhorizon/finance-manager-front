import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { RootState } from "../store";
import { notification } from "../../utils/createNotification";
import {
  AllTransactionsResponse,
  AllTransactionsData,
  AddTransactionRequestBody,
  AddTransactionResponse,
  UpdateTransactionResponse,
  DeleteTransactionResponse,
} from "../../types";

export const fetchAllTransactions = createAsyncThunk<
  AllTransactionsData,
  number
>("transactions/fetchAllTransactions", async (page: number, thunkAPI) => {
  try {
    const { data } = await axios.get<AllTransactionsResponse>(
      `/transactions?page=${page}`,
    );

    return data.payload;
  } catch (error) {
    if (error instanceof AxiosError)
      notification(error.response?.data.message, "error");

    return thunkAPI.rejectWithValue(null);
  }
});

export const fetchNextPage = createAsyncThunk<AllTransactionsData, number>(
  "transactions/fetchNextPage",
  async (page: number, thunkAPI) => {
    try {
      const { data } = await axios.get<AllTransactionsResponse>(
        `/transactions?page=${page}`,
      );

      return data.payload;
    } catch (error) {
      if (error instanceof AxiosError)
        notification(error.response?.data.message, "error");

      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const addTransaction = createAsyncThunk<void, AddTransactionRequestBody>(
  "transactions/addTransaction",
  async (body, thunkAPI) => {
    try {
      await axios.post<AddTransactionResponse>("/transactions", body);

      notification("Transaction added", "success", 1000);
    } catch (error) {
      if (error instanceof AxiosError)
        notification(error.response?.data.message, "error");

      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const updateTransaction = createAsyncThunk<
  void,
  { transactionId: string; body: AddTransactionRequestBody },
  { state: RootState }
>(
  "transactions/updateTransaction",
  async ({ transactionId, body }, thunkAPI) => {
    try {
      await axios.put<UpdateTransactionResponse>(
        `/transactions/${transactionId}`,
        body,
      );

      notification("Saved", "info", 1000);
    } catch (error) {
      if (error instanceof AxiosError)
        notification(error.response?.data.message, "error");

      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const deleteTransaction = createAsyncThunk<
  void,
  string,
  { state: RootState }
>("transactions/deleteTransaction", async (transactionId, thunkAPI) => {
  try {
    await axios.delete<DeleteTransactionResponse>(
      `/transactions/${transactionId}`,
    );

    notification("Transaction deleted", "info", 1000);
  } catch (error) {
    if (error instanceof AxiosError)
      notification(error.response?.data.message, "error");

    return thunkAPI.rejectWithValue(null);
  }
});
