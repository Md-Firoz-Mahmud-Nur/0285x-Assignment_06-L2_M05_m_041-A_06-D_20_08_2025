import Profile from "@/pages/Dashboard/Profile";
import IncomingParcel from "@/pages/Dashboard/Receiver/IncomingParcel";
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
        title: "Incoming Parcel",
        url: "/receiver/incoming-parcel",
        icon: IconListDetails,
        component: IncomingParcel,
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
