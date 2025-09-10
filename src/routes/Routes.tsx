import Layout from "@/layout/Layout";
import About from "@/pages/About/About";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Contact from "@/pages/Contact/Contact";
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
      {
        Component: About,
        path: "about",
      },
      {
        Component: Contact,
        path: "contact",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);
