"use client";

import { Calendar, Stethoscope } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderProps {
  showDashboardNav: boolean;
}

interface NavigationItem {
  label: string;
  icon?: React.ComponentType<any>;
  href: string;
  active: boolean;
}
const Header: React.FC<HeaderProps> = ({ showDashboardNav = false }) => {
  const user = {
    type: "patient",
  };

  //  const { user, isAuthenticated, logout } = userAuthStore();

  // const router = useRouter();

  const pathname = usePathname();
  const getDashboardNavigation = (): NavigationItem[] => {
    // if (!user || showDashboardNav) return [];
    if (user?.type === "doctor") {
      return [
        {
          label: "Dashboard",
          icon: Calendar,
          href: "/doctor/dashboard",
          active: pathname?.includes("/doctor/dashboard") || false,
        },
        {
          label: "Appointments",
          icon: Calendar,
          href: "/doctor/appointments",
          active: pathname?.includes("/doctor/appointments") || false,
        },
      ];
    } else if (user?.type === "patient") {
      return [
        {
          label: "appointments",
          icon: Calendar,
          href: "/patient/dashboard",
          active: pathname?.includes("/patient/dashboard") || false,
        },
      ];
    }
    return [];
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-2xl px-4 sm:px-[7%]">
      <div
        className="
            navbar rounded-2xl mt-4
            shadow-2xl shadow-black/10
            backdrop-blur-md
            bg-[hsla(var(--b1)/0.3)]
            border border-base-300
            animate__animated animate__fadeInDown
            flex flex-wrap items-center justify-between
          "
      >
        {/* Left side -> logo  + navigation */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>

            <div className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-blue-800  bg-clip-text text-transparent">
              MediCare+
            </div>
          </Link>

          {/* Dashboard navigation */}
          {isAuthenticated && showDashboardNav && (
            <nav className="hidden md:flex items-center space-x-6">
              {getDashboardNavigation().map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 transition-colors ${
                    item.active
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
