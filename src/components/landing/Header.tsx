import { Calendar } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react'


interface HeaderProps {
  showDashboardNav: boolean;
}

interface NavigationItem {
  label: string;
icon?: React.ComponentType<any>;
    href: string;
    active: boolean;
}
const Header: React.FC<HeaderProps> = ({ showDashboardNav= false }) => {

    const user={
        type:"patient"

    }

    const pathname = usePathname();
    const getDashboardNavigation = (): NavigationItem[] => {
        if (!user || showDashboardNav) return []
        if (user?.type === "doctor") {
            return [
                 {
                    label: "Dashboard",
                    icon:Calendar,
                    href: "/doctor/dashboard",
                    active: pathname?.includes("/doctor/dashboard") || false,
                },
                 {
                    label: "Appointments",
                    icon:Calendar,
                    href: "/doctor/appointments",
                    active: pathname?.includes("/doctor/appointments") || false,
                }
            ];

        } else if (user?.type === "patient") {
            return [
                {
                    label: "appointments",
                    icon:Calendar,
                    href: "/patient/dashboard",
                    active: pathname?.includes("/patient/dashboard") || false,
                }
            ];
        }
        return [];
    }

  return (
    <div>
        <h1>
            Header Component
        </h1>
      
    </div>
  )
}

export default Header
