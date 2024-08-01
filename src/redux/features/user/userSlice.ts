"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "../../../../types.d.ts";

const initialState: UserState = {
  _id: null,
  firstName: null,
  lastName: null,
  avatar: null,
  email: null,
  password: null,
  status: null,
  bio: null,
  backgroundImage: null,
  friends: [],
  activeConversations: [],
  activeGroupConversations: [],
  openConversation: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

export const { reset, setUser } = counterSlice.actions;
export default counterSlice.reducer;
