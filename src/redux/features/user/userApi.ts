import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UserState, LoginResponse, onOpenChatResponse, Chat } from "../../../../types";
import { setUser, changeOpenChat } from "./userSlice";
import { setToken } from "./tokenSlice";

// Debugging log
console.log(
  "NEXT_PUBLIC_CHAT_API_SERVER:",
  process.env.NEXT_PUBLIC_CHAT_API_SERVER
);

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_CHAT_API_SERVER,
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<UserState, string>({
      query: (_id) => `user/entire/${_id}`,
      async onQueryStarted(_id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      },
    }),

    openChat: builder.mutation<onOpenChatResponse, {conversationId: string, _id: string}>({
      query: ({ conversationId, _id }) => ({
        url: "user/open-chat",
        method: "PATCH",
        body: { conversationId, _id },
      }),
      async onQueryStarted({ conversationId, _id }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("data:", data.data);
          dispatch(changeOpenChat(data.data as string));
        } catch (error) {
          console.error("Failed to open chat:", error, { conversationId, _id });
        }
      },
    }),


    loginUser: builder.mutation<
      LoginResponse,
      {email: string; password: string}
    >({
      query: ({ email, password }) => ({
        url: "user/login",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted({ email, password }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("data:", data);
          dispatch(setToken(data));
        } catch (error) {
          console.error("Failed to login user:", error);
     }
      },
    }),
  }),
});

export const { useGetUserByIdQuery, useLoginUserMutation, useOpenChatMutation } = userApi;
export default userApi;
