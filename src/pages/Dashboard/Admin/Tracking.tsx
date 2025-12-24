"use client";

import { ParcelTracking } from "@/components/ParcelTracking";
import { useGetAllParcelQuery } from "@/redux/Parcel/parcel.api";

export default function AllParcelsTrackingPage() {
  const { data, isLoading } = useGetAllParcelQuery({});
  const parcels = data?.data; // adjust if your shape differs

  return <ParcelTracking parcels={parcels} isLoading={isLoading} />;
}
