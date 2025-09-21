import Profile from "@/pages/Dashboard/Profile";
import Tracking from "@/pages/Dashboard/Receiver/Tracking";
import { IconListDetails } from "@tabler/icons-react";
import { User } from "lucide-react";

export const receiverSidebarItems = [
  {
    title: "Receiver",
    items: [
      {
        title: "Profile",
        url: "/receiver/my-profile",
        component: Profile,
        icon: User,
      },
      {
        title: "Overview",
        url: "/receiver/overview",
        icon: IconListDetails,
        component: Tracking,
      },
    ],
  },
];
