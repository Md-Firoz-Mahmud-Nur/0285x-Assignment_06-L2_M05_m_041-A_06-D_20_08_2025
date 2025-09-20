import Profile from "@/pages/Dashboard/Profile";
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
    ],
  },
];
