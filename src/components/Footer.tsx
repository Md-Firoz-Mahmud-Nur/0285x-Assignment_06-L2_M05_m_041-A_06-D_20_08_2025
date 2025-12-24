import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/Auth/auth.api";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Package,
  Phone,
  Shield,
  Truck,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const { data: user } = useUserInfoQuery(undefined);
  type Role = "ADMIN" | "RECEIVER" | "SENDER";
  const role = (user?.data?.role as Role) || undefined;

  const roleRoutes: Record<Role, string> = {
    ADMIN: "/admin",
    RECEIVER: "/receiver",
    SENDER: "/sender",
  };

  const overviewPath =
    role && roleRoutes[role] ? `${roleRoutes[role]}/overview` : "/login";

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-slate-100 via-blue-50/30 to-blue-100/50">
      <div className="absolute -top-16 right-0 left-0 h-24 overflow-hidden">
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-cyan-400/20 blur-3xl delay-1000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center space-x-3">
            <div className="rounded-2xl bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 p-3 shadow-xl shadow-blue-500/30">
              <Package className="h-8 w-8 text-white" />
            </div>
            <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent">
              NextParcel
            </span>
          </div>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-balance">
            Fast, reliable, and secure parcel delivery service connecting you
            worldwide with cutting-edge logistics technology.
          </p>
          <Link to={overviewPath}>
            <Button className="group bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:from-blue-700 hover:to-cyan-600">
              Track Your Package
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-2xl border-2 border-blue-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-linear-to-br from-blue-500 to-blue-600 p-2">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-foreground text-lg font-semibold">
                  Our Services
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <div className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-blue-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" />
                    Express Delivery
                  </div>
                </li>
                <li>
                  <div className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-blue-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" />
                    Same Day Shipping
                  </div>
                </li>
                <li>
                  <div className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-blue-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 transition-transform group-hover/link:scale-150" />
                    International Delivery
                  </div>
                </li>
                <li>
                  <a className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-blue-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 transition-transform group-hover/link:scale-150" />
                    Bulk Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative rounded-2xl border-2 border-blue-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-linear-to-br from-cyan-500 to-cyan-600 p-2">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-foreground text-lg font-semibold">
                  Support
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link to={overviewPath}>
                    <div className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-cyan-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 transition-transform group-hover/link:scale-150" />
                      Track Package
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-cyan-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 transition-transform group-hover/link:scale-150" />
                    Help Center
                  </div>
                </li>
                <li>
                  <div className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-cyan-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" />
                    Contact Us
                  </div>
                </li>
                <li>
                  <div className="text-muted-foreground group/link flex items-center gap-2 text-sm transition-colors hover:text-cyan-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform group-hover/link:scale-150" />
                    Claims & Returns
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative rounded-2xl border-2 border-blue-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/20 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 p-2 shadow-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-foreground text-lg font-semibold">
                  Get in Touch
                </h3>
              </div>
              <div className="space-y-4">
                <div className="group/item flex items-center gap-3 text-sm">
                  <div className="rounded-lg bg-blue-500/10 p-2 transition-colors group-hover/item:bg-blue-500/20">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-muted-foreground">
                    +880 1797-626050
                  </span>
                </div>
                <div className="group/item flex items-center gap-3 text-sm">
                  <div className="rounded-lg bg-cyan-500/10 p-2 transition-colors group-hover/item:bg-cyan-500/20">
                    <Mail className="h-4 w-4 text-cyan-600" />
                  </div>
                  <span className="text-muted-foreground">
                    firoznur5@gmail.com
                  </span>
                </div>
                <div className="group/item flex items-start gap-3 text-sm">
                  <div className="rounded-lg bg-blue-500/10 p-2 transition-colors group-hover/item:bg-blue-500/20">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">
                    Rangpur, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex justify-center gap-3">
          <Link to="https://www.facebook.com/firoz.nur" target="_blank">
            <Button
              size="sm"
              variant="outline"
              className="h-10 w-10 rounded-full border-2 border-blue-200 bg-white/50 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-4 w-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Button>
          </Link>
          <Link to="https://x.com/FirozNur0" target="_blank">
            <Button
              size="sm"
              variant="outline"
              className="h-10 w-10 rounded-full border-2 border-cyan-200 bg-white/50 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-4 w-4 text-cyan-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Button>
          </Link>
          <Link
            to="https://www.linkedin.com/in/md-firoz-mahmud-nur/"
            target="_blank"
          >
            <Button
              size="sm"
              variant="outline"
              className="h-10 w-10 rounded-full border-2 border-blue-200 bg-white/50 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-4 w-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Button>
          </Link>
        </div>

        <div className="border-t border-blue-200/50 pt-8">
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-2 text-xs sm:gap-4">
            <span className="font-medium">
              © 2025 NextParcel. All rights reserved.
            </span>
            <span className="hidden text-blue-300 sm:inline">•</span>
            <a className="underline-offset-4 transition-colors duration-200 hover:text-blue-600 hover:underline">
              Privacy Policy
            </a>
            <span className="text-blue-300">•</span>
            <a className="underline-offset-4 transition-colors duration-200 hover:text-blue-600 hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
