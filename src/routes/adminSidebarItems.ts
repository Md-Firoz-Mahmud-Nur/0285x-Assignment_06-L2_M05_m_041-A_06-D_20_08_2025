import AllUser from "@/pages/Dashboard/Admin/AllUser";
import Profile from "@/pages/Dashboard/Profile";
import { IconListDetails } from "@tabler/icons-react";
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
    ],
  },
];
