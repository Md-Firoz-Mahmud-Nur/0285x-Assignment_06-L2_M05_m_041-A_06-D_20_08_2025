"use client";

import Loader from "@/components/Loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import { motion } from "framer-motion";
import { CheckCircle, Crown, Mail, Shield, User, XCircle } from "lucide-react";

const Profile = () => {
  const { data: users, isLoading } = useUserInfoQuery(undefined);

  const user = users?.data;
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-cyan-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-white/80 shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

          <CardHeader className="relative z-10 rounded-t-2xl bg-linear-to-b from-blue-50 via-white to-cyan-50 pt-14 pb-10 shadow-sm">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <div className="group relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-cyan-600 p-1 transition group-hover:animate-none" />
                <div className="rounded-full bg-white p-1 shadow-lg">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <AvatarImage
                      src={
                        // eslint-disable-next-line no-constant-binary-expression
                        user.picture ||
                        "https://i.ibb.co.com/J6gJWwZ/pexels-samad-ismayilov-231721-1270076.jpg" ||
                        "/placeholder.svg"
                      }
                      alt={user.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-linear-to-br from-blue-500 to-cyan-500 text-3xl font-bold text-white">
                      {user.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent"
                >
                  {user.name}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex items-center justify-center gap-2 text-gray-600 transition-colors hover:text-cyan-600"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-lg">{user.email}</span>
                </motion.div>
              </div>
            </motion.div>
          </CardHeader>

          <CardContent className="relative z-10 space-y-8 px-8 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                <Shield className="h-5 w-5 text-blue-600" />
                Account Status
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {user.role && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-linear-to-r from-blue-500/10 to-blue-600/10 p-4"
                  >
                    <Crown className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Role</p>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 capitalize hover:bg-blue-200"
                      >
                        {user.role}
                      </Badge>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 rounded-2xl border p-4 ${
                    user.isVerified
                      ? "border-green-200 bg-linear-to-r from-green-500/10 to-green-600/10"
                      : "border-yellow-200 bg-linear-to-r from-yellow-500/10 to-yellow-600/10"
                  }`}
                >
                  {user.isVerified ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <XCircle className="h-6 w-6 text-yellow-600" />
                  )}
                  <div>
                    <p className="text-sm text-gray-600">Verification</p>
                    <Badge
                      variant={user.isVerified ? "default" : "secondary"}
                      className={
                        user.isVerified
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      }
                    >
                      {user.isVerified ? "Verified" : "Unverified"}
                    </Badge>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 rounded-2xl border p-4 ${
                    !user.isDeleted
                      ? "border-cyan-200 bg-linear-to-r from-cyan-500/10 to-cyan-600/10"
                      : "border-red-200 bg-linear-to-r from-red-500/10 to-red-600/10"
                  }`}
                >
                  <User
                    className={`h-6 w-6 ${
                      !user.isDeleted ? "text-cyan-600" : "text-red-600"
                    }`}
                  />
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <Badge
                      variant={!user.isDeleted ? "default" : "destructive"}
                      className={
                        !user.isDeleted
                          ? "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
                          : "bg-red-100 text-red-800 hover:bg-red-200"
                      }
                    >
                      {!user.isDeleted ? "Active" : "Deleted"}
                    </Badge>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="border-t border-gray-200 pt-6"
            >
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="w-full sm:w-auto"> EditPassword</div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Profile;
