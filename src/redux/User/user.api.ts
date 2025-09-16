import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updatePassword: builder.mutation({
      query: (updatedData) => ({
        url: "/auth/reset-password",
        method: "POST",
        data: updatedData,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useUpdatePasswordMutation } = userApi;
