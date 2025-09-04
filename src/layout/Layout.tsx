import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <div className="grow">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
