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
import { AlertTriangle, DeleteIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ParcelDeleteModal({ singleParcel, onSuccess }: any) {
  const [editParcel, { isLoading }] = useUpdateParcelStatusMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const handleCancelParcel = async () => {
    try {
      await editParcel({
        parcelTrkId: singleParcel.trackingId,
        data: { status: "Cancelled" },
      }).unwrap();
      toast.success("Parcel cancelled successfully!");
      setModalOpen(false);
      if (onSuccess) onSuccess();
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <AlertDialog open={modalOpen} onOpenChange={setModalOpen}>
        <AlertDialogTrigger asChild>
          <Button
            disabled={singleParcel.currentStatus === "Dispatched"}
            className={
              singleParcel.currentStatus === "Dispatched" ||
              singleParcel.currentStatus === "Cancelled"
                ? "cursor-not-allowed bg-gray-300 text-gray-600"
                : "bg-orange-400 text-white hover:bg-orange-300"
            }
          >
            <DeleteIcon className="h-5 w-5" />
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="enhanced-alert-content">
          <AlertDialogHeader className="enhanced-alert-header">
            <AlertDialogTitle className="enhanced-alert-title">
              <div className="warning-icon-container">
                <AlertTriangle className="h-6 w-6 text-cyan-600" />
              </div>
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="enhanced-alert-description">
              This action cannot be undone. This will cancel your parcel.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="enhanced-alert-footer">
            <AlertDialogCancel className="cancel-button-enhanced">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="continue-button-enhanced"
              onClick={handleCancelParcel}
              disabled={isLoading}
            >
              {isLoading ? "Cancelling..." : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
