"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { LoginResponse } from "../../../../types.d.ts";

const initialState: LoginResponse = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: () => initialState,
    setToken: (state, action: PayloadAction<LoginResponse>) => {
      return action.payload;
    },
  },
});

export const { reset, setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
