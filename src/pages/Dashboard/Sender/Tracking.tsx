"use client";

import { ParcelTracking } from "@/components/ParcelTracking";
import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import { useGetMyParcelQuery } from "@/redux/Parcel/parcel.api";

export default function SenderTrackingPage() {
  const { data: userData } = useUserInfoQuery(undefined);
  const senderEmail = userData?.data?.email;

  const { data, isLoading } = useGetMyParcelQuery(senderEmail, {
    skip: !senderEmail,
  });

  // your endpoint shape: deliveryData?.data?.data
  const parcels = data?.data?.data;

  return <ParcelTracking parcels={parcels} isLoading={isLoading} />;
}
