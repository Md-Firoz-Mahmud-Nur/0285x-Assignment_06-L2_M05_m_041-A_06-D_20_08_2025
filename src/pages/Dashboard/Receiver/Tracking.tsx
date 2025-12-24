"use client";

import { ParcelTracking } from "@/components/ParcelTracking";
import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import { useGetDeliveryHistoryQuery } from "@/redux/Parcel/parcel.api";

export default function ReceiverTrackingPage() {
  const { data: userData } = useUserInfoQuery(undefined);
  const receiverId = userData?.data?.email;

  const { data, isLoading } = useGetDeliveryHistoryQuery(receiverId, {
    skip: !receiverId,
  });

  const parcels = data?.data?.data; // based on your `deliveryData.data.data`

  return <ParcelTracking parcels={parcels} isLoading={isLoading} />;
}
