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
  }),
});

export const { useLoginMutation } = authAPi;
