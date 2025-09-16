import Profile from "@/pages/Dashboard/Profile";
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
    ],
  },
];
