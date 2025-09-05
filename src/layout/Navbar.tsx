"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";


const menuItems = [
  { title: "Home", url: "/", role: "PUBLIC" },
  { title: "About", url: "/about", role: "PUBLIC" },
  { title: "Contact", url: "/contact", role: "PUBLIC" },
];

const Navbar = () => {
  const isLoggedIn = false; // mock login status

  return (
    <section className="dark:via-background fixed top-0 right-0 left-0 z-50 border-b border-blue-100 bg-linear-to-r from-blue-100 via-cyan-100 to-sky-50 py-4 backdrop-blur-sm dark:border-blue-800/30 dark:from-blue-950 dark:to-cyan-950/50">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          {/* Logo */}
          <div className="mx-4 flex items-center gap-8">
            <NavLink to="/">
              <div className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-200 dark:group-hover:shadow-blue-900/50">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
                  NextParcel
                </span>
              </div>
            </NavLink>
          </div>

          {/* Center Menu */}
          <div className="flex w-full items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link
                      to={item.url}
                      className="group bg-background relative inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
                    >
                      {item.title}
                      <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-blue-500 to-blue-600 transition-all duration-200 group-hover:left-0 group-hover:w-full"></div>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 bg-transparent transition-all duration-200 hover:scale-105 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/50"
              >
                Logout
              </Button>
            ) : (
              <div className="flex gap-2">
                <NavLink to="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 bg-transparent transition-all duration-200 hover:scale-105 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/50"
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/register">
                  <Button
                    size="sm"
                    className="border-0 bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-900/50"
                  >
                    Register
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block px-2 lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/">
              <div className="group flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-600 shadow-md transition-all duration-300 group-hover:shadow-blue-200 dark:group-hover:shadow-blue-900/50">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent dark:from-blue-400 dark:to-cyan-300">
                  NextParcel
                </span>
              </div>
            </NavLink>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-200 bg-transparent transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/50"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>

              <SheetContent className="dark:from-background overflow-y-auto bg-linear-to-b from-white via-blue-50/30 to-cyan-50/30 dark:via-blue-950/10 dark:to-cyan-950/10">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-600 shadow-md">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-lg font-bold text-transparent dark:from-blue-400 dark:to-cyan-300">
                        NextParcel
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menuItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className="text-md group flex items-center gap-3 rounded-lg p-3 font-semibold transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                        {item.title}
                      </Link>
                    ))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {isLoggedIn ? (
                      <Button
                        variant="outline"
                        className="border-blue-200 bg-transparent transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/50"
                      >
                        Logout
                      </Button>
                    ) : (
                      <>
                        <NavLink to="/login">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-blue-200 bg-transparent transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/50"
                          >
                            Login
                          </Button>
                        </NavLink>
                        <NavLink to="/register">
                          <Button
                            size="sm"
                            className="w-full bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-blue-700"
                          >
                            Register
                          </Button>
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
