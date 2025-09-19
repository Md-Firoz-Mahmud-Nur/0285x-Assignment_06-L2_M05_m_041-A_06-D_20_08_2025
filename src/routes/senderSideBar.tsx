import Profile from "@/pages/Dashboard/Profile";
import CreateParcel from "@/pages/Dashboard/Sender/CreateParcel";
import MyParcel from "@/pages/Dashboard/Sender/MyParcel";
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
        title: "Create Parcel",
        url: "/sender/create-parcel",
        component: CreateParcel,
        icon: IconListDetails,
      },
      {
        title: "My Parcel",
        url: "/sender/my-parcel",
        component: MyParcel,
        icon: IconListDetails,
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
