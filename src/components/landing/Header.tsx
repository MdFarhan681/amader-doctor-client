"use client";

import {
  Bell,
  Calendar,
  LogOut,
  Settings,
  Stethoscope,
  User,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";





interface HeaderProps {
  showDashboardNav: boolean;
}

interface NavigationItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  active: boolean;
}

const middleNav = [
  { label: "Home", href: "/" },
  { label: "Doctors", href: "/doctors" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About Us", href: "/about" },
];

const Header: React.FC<HeaderProps> = ({ showDashboardNav = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = {
    type: "patient",
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage: "logo.png",
  };

  const isAuthenticated = false;
  const pathname = usePathname();

  const isActive = (href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname.startsWith(href);

  const getDashboardNavigation = (): NavigationItem[] => {
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
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-2xl py-6 px-[7%]">
      <div className="navbar rounded-2xl py-4 px-3 mt-4 shadow-2xl shadow-black/10 backdrop-blur-xl bg-[hsla(var(--b1)/0.3)] border border-base-300 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center space-x-3">
          {/* Mobile menu button */}
          <button
            className="md:hidden btn btn-ghost"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block text-2xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Amader Doctor
            </div>
          </Link>
        </div>

        {/* CENTER (desktop only) */}
      <nav className="hidden md:flex items-center ">
  {middleNav.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`nav-link  transition-all duration-200 active:scale-95 px-4 rounded-2xl py-1  hover:shadow-md  hover:text-white ${
        isActive(item.href) ? "active  " : ""
      }`}
    >
      {item.label}
    </Link>
  ))}
</nav>


        {/* RIGHT (unchanged logic) */}
        <div className="flex items-center space-x-4">
          {isAuthenticated && showDashboardNav ? (
            <>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500">
                  4
                </Badge>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 px-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user.profileImage} />
                      <AvatarFallback>
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={`/${user.type}/profile`}>
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/${user.type}/settings`}>
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="ghost"
                className="my-btn"
              >
                Log in
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileOpen && (
       <div className="navbar rounded-2xl py-4 px-3 mt-4
 shadow-2xl shadow-black/10
 bg-gray-100/25 backdrop-blur-2xl 

 border border-base-300">
          <nav className="flex flex-col p-4 space-y-3 ">
            {middleNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                 onClick={() => setMobileOpen(false)}
        className={`nav-link px-3 py-2 rounded-lg hover:bg-blue-500 transition-all active:scale-97 duration-200 ${
          isActive(item.href) ? "active bg-blue-500 " : ""
        }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
