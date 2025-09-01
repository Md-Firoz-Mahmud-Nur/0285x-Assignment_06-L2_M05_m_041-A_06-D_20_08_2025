import Home from "@/pages/HomePage/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
