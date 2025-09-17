import AllParcels from "@/pages/Dashboard/Admin/AllParcels";
import AllUser from "@/pages/Dashboard/Admin/AllUser";
import Tracking from "@/pages/Dashboard/Admin/Tracking";
import Profile from "@/pages/Dashboard/Profile";
import { IconFolder, IconListDetails } from "@tabler/icons-react";
import { User } from "lucide-react";
export const adminSidebarItems = [
  {
    title: "Admin",
    items: [
      {
        title: "Profile",
        url: "/admin/my-profile",
        icon: User,
        component: Profile,
      },
      {
        title: "All User",
        url: "/admin/all-users",
        component: AllUser,
        icon: IconListDetails,
      },
      {
        title: "All Parcel",
        url: "/admin/all-parcel",
        component: AllParcels,
        icon: IconFolder,
      },
      {
        title: "Overview",
        url: "/admin/overview",
        icon: IconListDetails,
        component: Tracking,
      },
    ],
  },
];
