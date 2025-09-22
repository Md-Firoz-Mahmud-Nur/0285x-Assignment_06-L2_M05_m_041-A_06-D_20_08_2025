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
    createParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcel/create-parcel",
        method: "POST",
        data: parcelInfo,
      }),
    }),
    getDeliveryHistory: builder.query({
      query: () => ({
        url: `/parcel/incoming`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["PARCELS"],
    }),
    userDetails: builder.query({
      query: (id: string) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
    getIncomingParcel: builder.query({
      query: (params) => ({
        url: "/parcel/incoming",
        method: "GET",
        params: params,
      }),
      providesTags: ["PARCEL"],
    }),
  }),
});

export const {
  useGetAllParcelQuery,
  useUpdateParcelStatusMutation,
  useGetMyParcelQuery,
  useCreateParcelMutation,
  useGetDeliveryHistoryQuery,
  useUserDetailsQuery,
  useGetIncomingParcelQuery,
} = parcelAPi;
