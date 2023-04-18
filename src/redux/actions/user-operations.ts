import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { createNotification } from "../../utils";
import { UpdateBalanceResponse, UpdateBalanceData } from "../../types";

export const updateBalance = createAsyncThunk<UpdateBalanceData, number>(
  "user/updateBalance",
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
        createNotification(error.response?.data.message, "error");

      return thunkAPI.rejectWithValue(null);
    }
  },
);
