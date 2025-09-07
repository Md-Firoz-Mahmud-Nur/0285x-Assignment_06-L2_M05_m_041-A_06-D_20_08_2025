import { Link } from "react-router";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center">
            <div className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald-200 dark:group-hover:shadow-emerald-900/50">
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
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://i.ibb.co.com/6Rp49Z4s/pexels-tima-miroshnichenko-6169061.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]"
        />
      </div>
    </div>
  );
}
