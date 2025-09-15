import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
