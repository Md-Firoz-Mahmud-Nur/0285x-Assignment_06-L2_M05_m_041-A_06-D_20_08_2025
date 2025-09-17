import Profile from "@/pages/Dashboard/Profile";
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
    ],
  },
];
