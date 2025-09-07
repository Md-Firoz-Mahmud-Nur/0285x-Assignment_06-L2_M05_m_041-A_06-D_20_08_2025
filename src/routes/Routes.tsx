import Layout from "@/layout/Layout";
import Login from "@/pages/Auth/Login";
import Home from "@/pages/HomePage/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: Layout,
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
]);
