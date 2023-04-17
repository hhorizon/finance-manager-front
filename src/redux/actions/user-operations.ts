import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { notification } from "../../utils/createNotification";
import { UpdateBalanceResponse, UpdateBalanceData } from "../../types";

export const updateBalance = createAsyncThunk<UpdateBalanceData, number>(
  "user/registration",
  async (newBalance, thunkAPI) => {
    try {
      const { data } = await axios.patch<UpdateBalanceResponse>(
        "/user/balance",
        {
          balance: newBalance,
        },
      );

      return data.payload;
    } catch (error) {
      if (error instanceof AxiosError)
        notification(error.response?.data.message, "error");

      return thunkAPI.rejectWithValue(null);
    }
  },
);
