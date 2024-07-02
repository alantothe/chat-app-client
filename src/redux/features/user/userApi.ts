import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UserState } from "../../../../types";

//debuging log
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
    }),
    // add more end points here
  }),
});

export const { useGetUserByIdQuery } = userApi;
export default userApi;
