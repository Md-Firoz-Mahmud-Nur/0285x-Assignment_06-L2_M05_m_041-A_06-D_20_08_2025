/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  History,
  Home,
  MapPin,
  Package,
  Send,
  Settings,
  Truck,
  Users,
} from "lucide-react";
import type * as React from "react";
import { NavLink } from "react-router";

const iconMap: Record<string, React.ComponentType<any>> = {
  dashboard: Home,
  parcels: Package,
  tracking: MapPin,
  delivery: Truck,
  users: Users,
  analytics: BarChart3,
  settings: Settings,
  send: Send,
  history: History,
  notifications: Bell,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  return (
    <Sidebar
      {...props}
      className="border-r-0 bg-linear-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900"
    >
      <SidebarHeader className="border-b border-blue-100 pb-4 dark:border-blue-800">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 px-4 py-3"
        >
          <NavLink to="/">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-600 shadow-lg"
            >
              <Package className="h-5 w-5 text-white" />
            </motion.div>
          </NavLink>
          <div className="flex flex-col">
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-lg font-bold text-transparent">
              NextParcel
            </span>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Delivery Management
            </span>
          </div>
        </motion.div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {data.navMain.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <SidebarGroup className="mb-6">
              <SidebarGroupLabel className="mb-3 px-3 text-xs font-semibold tracking-wider text-blue-700 uppercase dark:text-blue-300">
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {group.items.map((item, itemIndex) => {
                    const IconComponent =
                      iconMap[item.title.toLowerCase()] || Package;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: groupIndex * 0.1 + itemIndex * 0.05,
                        }}
                      >
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            asChild
                            className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:bg-linear-to-r hover:from-blue-100 hover:to-cyan-50 hover:shadow-md dark:hover:from-blue-900/50 dark:hover:to-cyan-800/30"
                          >
                            <NavLink
                              to={item.url}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${
                                  isActive
                                    ? "bg-linear-to-r from-blue-100 to-cyan-50 text-blue-700 shadow-sm dark:from-blue-900/50 dark:to-cyan-800/30 dark:text-blue-300"
                                    : "text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
                                }`
                              }
                            >
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="shrink-0"
                              >
                                <IconComponent className="h-4 w-4" />
                              </motion.div>
                              <span className="truncate">{item.title}</span>

                              <motion.div
                                className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                layoutId="sidebar-indicator"
                              />
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </motion.div>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </motion.div>
        ))}
      </SidebarContent>

      <SidebarRail className="bg-linear-to-b from-blue-200 to-cyan-200 dark:from-blue-800 dark:to-cyan-800" />
    </Sidebar>
  );
}
