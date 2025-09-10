"use client";

import type React from "react";

import Password from "@/components/Password";
import PrimaryButton from "@/components/PrimaryButton";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRegisterMutation } from "@/redux/Auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z
  .object({
    name: z.string().min(3, { message: "Name is too short" }).max(50),
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(8, { message: "Password is too short" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function RegisterForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      await register({
        name: data.name,
        email: data.email,
        password: data.password,
      }).unwrap();
      toast.success("User created successfully ✅");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed ❌");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="bg-linear-to-r from-blue-600 via-cyan-500 to-sky-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl dark:from-blue-400 dark:via-cyan-300 dark:to-sky-400">
          Create Account
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Join NextParcel and start shipping today
        </p>
      </div>

      <div className="rounded-3xl border border-blue-200 bg-white/40 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/20 dark:bg-slate-900/40">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700 dark:text-gray-300">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="border-cyan-200 bg-white/50 transition-all duration-300 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-cyan-700/30 dark:bg-slate-800/50 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@company.com"
                      type="email"
                      className="border-cyan-200 bg-white/50 transition-all duration-300 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-cyan-700/30 dark:bg-slate-800/50 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700 dark:text-gray-300">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Password
                      className="border-cyan-200 bg-white/50 transition-all duration-300 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-cyan-700/30 dark:bg-slate-800/50 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Password
                      className="border-cyan-200 bg-white/50 transition-all duration-300 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-cyan-700/30 dark:bg-slate-800/50 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PrimaryButton text="Create Account" type="submit" />
          </form>
        </Form>
      </div>

      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-cyan-600 underline underline-offset-4 transition-colors duration-300 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
        >
          Login here
        </Link>
      </div>
    </div>
  );
}
