"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "../components/logo";

type User = {
  type: "patient" | "doctor" | "admin";
  displayName?: string;
  photoURL?: string;
};

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  active: boolean;
};

interface HeaderProps {
  showDashboardNav?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showDashboardNav = false }) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔴 prevent hydration mismatch
  if (!mounted) return null;

  const user: User | null = {
    type: "patient",
    displayName: "John Doe",
    photoURL: "/avatar.png",
  };

  const navigation: NavItem[] =
    user?.type === "patient"
      ? [
          {
            label: "Appointments",
            icon: Calendar,
            href: "/patient/dashboard",
            active: pathname.includes("/patient/dashboard"),
          },
        ]
      : [];

  return (
    <header>
   
      <div className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-2xl px-[7%]">
        <div
          className="
            navbar rounded-2xl mt-4
            shadow-2xl shadow-black/10
            backdrop-blur-md
            bg-[hsla(var(--b1)/0.3)]
            border border-base-300
            animate__animated animate__fadeInDown flex items-center justify-between
          "
        >
          {/* LEFT */}
          <div className="navbar-start">
            <Logo />
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 ${
                      item.active ? "text-primary font-semibold" : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end flex items-center gap-3">
            {user ? (
              <>
                <img
                  src={user.photoURL ?? "/avatar.png"}
                  alt="user"
                  className="w-12 h-12 mx-2 rounded-full border border-blue-300 p-1"
                />

                <button
                  onClick={() => console.log("logout")}
                  className="
                    w-20 bg-gradient-to-r from-cyan-500 to-blue-600
                    hover:from-cyan-600 hover:to-blue-700
                    text-white font-semibold text-sm py-3
                    rounded-xl shadow-md hover:shadow-lg
                    transition-all duration-200 active:scale-95
                    px-4 mr-4
                  "
                >
                  LogOut
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="
                  w-20 bg-gradient-to-r from-cyan-500 to-blue-600
                  hover:from-cyan-600 hover:to-blue-700
                  text-white font-semibold text-sm py-3
                  rounded-xl shadow-md hover:shadow-lg
                  transition-all duration-200 active:scale-95
                  px-4 mr-4 text-center
                "
              >
                Login
              </Link>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
