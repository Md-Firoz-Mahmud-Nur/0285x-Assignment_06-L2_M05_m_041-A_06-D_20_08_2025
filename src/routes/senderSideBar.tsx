import Profile from "@/pages/Dashboard/Profile";
import Tracking from "@/pages/Dashboard/Sender/Tracking";
import { IconListDetails } from "@tabler/icons-react";
import { User } from "lucide-react";
export const senderSidebarItems = [
  {
    title: "Sender",
    items: [
      {
        title: "Profile",
        url: "/sender/my-profile",
        component: Profile,
        icon: User,
      },
      {
        title: "Overview",
        url: "/sender/overview",
        icon: IconListDetails,
        component: Tracking,
      },
    ],
  },
];
