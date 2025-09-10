import { baseApi } from "@/redux/baseApi";

export const authAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
        withCredentials: true,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authAPi;
