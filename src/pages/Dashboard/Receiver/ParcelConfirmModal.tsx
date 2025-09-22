"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useUpdateParcelStatusMutation } from "@/redux/Parcel/parcel.api";
import { CheckCircle, Package } from "lucide-react";
import { toast } from "sonner";

export function ParcelConfirmModal({ singleParcel }: any) {
  const [editParcel] = useUpdateParcelStatusMutation();

  const handleConfirmDelivery = async () => {
    const toastId = toast.loading("Parcel status updating...");
    try {
      await editParcel({
        parcelTrkId: singleParcel.trackingId,
        data: { status: "Delivered" },
      }).unwrap();
      toast.success("Parcel status updated", { id: toastId });
    } catch (error: any) {
      console.error(error);
      const message: string =
        error?.data?.message || "Parcel status updating failed";
      toast.error(message, { id: toastId });
    }
  };

  const isConfirmDisabled = singleParcel.status !== "In Transit";

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="default"
            disabled={isConfirmDisabled}
            className={`cursor-pointer transition-all duration-300 ${
              isConfirmDisabled
                ? "bg-linear-to-r from-blue-500 to-cyan-600 text-white/70 hover:from-blue-600 hover:to-cyan-700"
                : "bg-linear-to-r from-blue-500 to-cyan-600 shadow-lg hover:from-blue-600 hover:to-cyan-700 hover:shadow-xl"
            } `}
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            {singleParcel.status === "Delivered"
              ? "Delivered"
              : isConfirmDisabled
                ? "Not Ready for Delivery"
                : "Confirm Delivery"}
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="border-2 border-blue-200 bg-linear-to-br from-blue-50 via-white to-cyan-50 shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-bold text-transparent">
              <div className="rounded-full bg-linear-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              Confirm Parcel Delivery
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-2 text-base leading-relaxed text-slate-600">
              You are about to mark this parcel as successfully delivered. Once
              confirmed, the recipient will be notified and this action cannot
              be reversed.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-6">
            <AlertDialogCancel className="border-slate-300 bg-slate-100 text-slate-700 transition-all duration-200 hover:bg-slate-200">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-linear-to-r from-blue-500 to-cyan-600 text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-700 hover:shadow-xl"
              onClick={handleConfirmDelivery}
            >
              Confirm Delivery
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
