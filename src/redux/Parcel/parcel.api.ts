import { baseApi } from "@/redux/baseApi";

export const parcelAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllParcel: builder.query({
      query: (params) => ({
        url: "/parcel/all-parcel",
        method: "GET",
        params: params,
        credentials: "include",
      }),
      providesTags: ["PARCELS"],
    }),

    updateParcelStatus: builder.mutation({
      query: ({ parcelTrkId, data }) => ({
        url: `/parcel/${parcelTrkId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["PARCEL", "PARCELS"],
    }),
    getMyParcel: builder.query({
      query: () => ({
        url: "/parcel/mine",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),
  }),
});

export const {
  useGetAllParcelQuery,
  useUpdateParcelStatusMutation,
  useGetMyParcelQuery,
} = parcelAPi;
