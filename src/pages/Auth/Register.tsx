import { Link } from "react-router";
import { RegisterForm } from "./RegisterForm";

export default function Register() {
  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50">
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-linear-to-br from-cyan-500/10 to-sky-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 animate-pulse rounded-full bg-linear-to-br from-sky-500/10 to-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-linear-to-br from-blue-500/5 to-cyan-500/5 blur-3xl delay-1000" />

      <div className="relative flex min-h-svh flex-col">
        <div className="flex justify-center px-4 pt-6 md:pt-10">
          <Link to="/" className="flex items-center">
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
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent lg:text-3xl dark:from-blue-400 dark:to-cyan-300">
                NextParcel
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 py-8 md:py-0">
          <div className="w-full max-w-md">
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
}
