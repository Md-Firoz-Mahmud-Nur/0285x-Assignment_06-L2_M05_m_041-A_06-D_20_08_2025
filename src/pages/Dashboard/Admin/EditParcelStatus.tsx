/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateParcelStatusMutation } from "@/redux/Parcel/parcel.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const parcelSchema = z.object({
  status: z.string().min(1, "Select any status"),
});

export function EditParcelStatus({ singleParcel, disabled = false }: any) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editParcel] = useUpdateParcelStatusMutation();
  const form = useForm<z.infer<typeof parcelSchema>>({
    resolver: zodResolver(parcelSchema),
    defaultValues: {
      status: singleParcel?.currentStatus || "",
    },
  });


  const onSubmit = async (data: any) => {
    if (!singleParcel?.trackingId) return toast.error("Parcel ID missing");
    setLoading(true);
    const toastId = toast.loading("Parcel status updating...");
    const parcelTrkId = singleParcel.trackingId;
    try {
      await editParcel({ parcelTrkId, data }).unwrap();
      console.log("data", data);
      toast.success("Parcel status updated", { id: toastId });
      setOpen(false);
    } catch (error: any) {
      const message =
        error?.data?.message ||
        error?.message ||
        "Parcel status updating failed";
      toast.error(message, { id: toastId });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild disabled={disabled}>
        <Button
          className="rounded-full bg-linear-to-r from-emerald-500 to-teal-400 p-3 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-emerald-400/50 disabled:cursor-not-allowed disabled:from-red-400 disabled:to-red-500 disabled:opacity-40"
          disabled={disabled} 
          title={
            disabled
              ? "Cannot edit when status is Delivered/Cancelled"
              : "Edit parcel status"
          }
        >
          <Settings className="h-6 w-6 text-white" />
        </Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden sm:max-w-[425px]">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Edit Parcel Status
            </DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              id="update-parcel"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Requested">Requested</SelectItem>
                        <SelectItem value="Approved">Approved</SelectItem>
                        <SelectItem value="Dispatched">Dispatched</SelectItem>
                        <SelectItem value="In Transit">In Transit</SelectItem>
                        <SelectItem value="Delivered">Delivered</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="transition-transform duration-200 hover:scale-105"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              form="update-parcel"
              disabled={loading}
              className="rounded-lg bg-linear-to-r from-emerald-600 via-emerald-500 to-orange-400 font-semibold text-white shadow-md transition-all duration-300 hover:from-emerald-500 hover:via-emerald-400 hover:to-orange-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
