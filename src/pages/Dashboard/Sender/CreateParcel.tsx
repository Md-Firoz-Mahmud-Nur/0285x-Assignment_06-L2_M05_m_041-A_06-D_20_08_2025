"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  FileText,
  Gift,
  MapPin,
  Package,
  User,
  Weight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import { useCreateParcelMutation } from "@/redux/Parcel/parcel.api";
import { useGetAllReceiverQuery } from "@/redux/User/user.api";
import { useEffect } from "react";
import { toast } from "sonner";

const parcelSchema = z.object({
  type: z.string().min(1, "Type is required"),
  weight: z.number().min(0.1, "Weight must be positive"),

  pickupAddress: z.string().min(1, "Pickup address is required"),

  deliveryAddress: z.string().min(1, "Delivery address is required"),

  sender: z.string(),
  receiver: z.string(),

  deliveryDate: z.string().refine(
    (val) => {
      if (!val) return false;
      const selectedDate = new Date(val);
      const now = new Date();
      return selectedDate > now;
    },
    { message: " This field is required  Delivery date must be in the future" },
  ),

  parcelFee: z.number().min(1, "Parcel fee is required"),
  couponCode: z.string().optional(),
});

const CreateParcel = () => {
  const [createParcel] = useCreateParcelMutation();
  useUserInfoQuery(undefined);
  const { data: receiver } = useGetAllReceiverQuery(undefined);
  const { data: user } = useUserInfoQuery(undefined);

  useEffect(() => {
    if (user?.data?._id) {
      console.log(user.data._id);
      form.setValue("sender", user.data._id);
    }
  }, [user]);

  const form = useForm<z.infer<typeof parcelSchema>>({
    resolver: zodResolver(parcelSchema),
    defaultValues: {
      type: "",
      weight: 0,
      pickupAddress: "",
      deliveryAddress: "",
      receiver: "",
      parcelFee: 0,
      deliveryDate: "",
      couponCode: "50",
    },
  });

  const allReceiver = receiver?.data?.data;

  const onSubmit = async (data: any) => {
    console.log("hit");
    data.deliveryDate = new Date(data.deliveryDate).toISOString();
    const toastId = toast.loading("Parcel creating...");

    try {
      const res = await createParcel(data).unwrap();
      console.log(res);
      toast.success("Parcel created successfully", { id: toastId });
    } catch (error) {
      toast.error("Parcel creation failed", { id: toastId });
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50 p-4 text-black md:p-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 h-32 w-32 rounded-full bg-linear-to-r from-cyan-400/30 to-sky-400/30 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-60 right-20 h-40 w-40 rounded-full bg-linear-to-r from-sky-400/30 to-blue-400/30 blur-xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 h-48 w-48 rounded-full bg-linear-to-r from-cyan-300/20 to-sky-300/20 blur-2xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-sky-100/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl md:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-center"
          >
            <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl bg-linear-to-br from-sky-500 via-cyan-500 to-sky-600 p-4 shadow-lg shadow-sky-500/50"
              >
                <Package className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="bg-linear-to-r from-sky-600 via-cyan-600 to-sky-700 bg-clip-text text-3xl font-black text-transparent md:text-5xl">
                Create New Parcel
              </h2>
            </div>
            <p className="text-base text-gray-600 md:text-lg">
              Fill in the details to create your parcel shipment
            </p>
          </motion.div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <FileText className="h-4 w-4 text-sky-600" />
                          Parcel Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500">
                              <SelectValue placeholder="Select parcel type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Document">
                              📄 Document
                            </SelectItem>
                            <SelectItem value="Package">📦 Package</SelectItem>
                            <SelectItem value="Fragile">⚠️ Fragile</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <FormField
                    control={form.control}
                    name="receiver"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <User className="h-4 w-4 text-sky-600" />
                          Receiver
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="w-full">
                            <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500">
                              <SelectValue placeholder="Select receiver" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {allReceiver?.map((r: any) => (
                              <SelectItem key={r?._id} value={r?._id}>
                                {r?.email}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FormField
                    control={form.control}
                    name="pickupAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <MapPin className="h-4 w-4 text-sky-600" />
                          Pickup Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter full pickup address"
                            className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <FormField
                    control={form.control}
                    name="deliveryAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <MapPin className="h-4 w-4 text-sky-600" />
                          Delivery Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter full delivery address"
                            className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <Weight className="h-4 w-4 text-sky-600" />
                          Weight (kg)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="0.0"
                            className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number.parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <FormField
                    control={form.control}
                    name="deliveryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <Calendar className="h-4 w-4 text-sky-600" />
                          Delivery Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <FormField
                    control={form.control}
                    name="parcelFee"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <DollarSign className="h-4 w-4 text-sky-600" />
                          Parcel Fee
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0.00"
                            className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number.parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <FormField
                    control={form.control}
                    name="couponCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <Gift className="h-4 w-4 text-orange-600" />
                          Coupon Code
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter coupon code (optional)"
                            className="h-12 rounded-xl border-2 border-gray-200 bg-white/50 transition-colors hover:border-sky-400 focus:border-sky-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button
                  type="submit"
                  className="h-14 w-full rounded-xl bg-linear-to-r from-sky-500 via-cyan-500 to-sky-600 text-lg font-bold text-white shadow-lg shadow-sky-500/50 transition-all duration-300 hover:scale-[1.02] hover:from-sky-600 hover:via-cyan-600 hover:to-sky-700 hover:shadow-xl hover:shadow-sky-600/50"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Create Parcel
                </Button>
              </motion.div>
            </form>
          </Form>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 rounded-2xl border-2 border-blue-200/50 bg-linear-to-r from-blue-50 via-cyan-50 to-blue-50 p-6 shadow-inner"
          >
            <div className="mb-2 flex items-center justify-center gap-2 text-blue-700">
              <Package className="h-5 w-5" />
              <span className="text-lg font-bold">
                Secure & Fast Delivery Guaranteed
              </span>
            </div>
            <p className="text-center text-sm text-blue-600">
              Your parcel will be handled with care and delivered safely to the
              destination.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateParcel;
