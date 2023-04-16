import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { notification } from "../../services/common/notification";
import {
  AllTransactionsResponse,
  AllTransactionsData,
  AddTransactionRequestBody,
  AddTransactionResponse,
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
