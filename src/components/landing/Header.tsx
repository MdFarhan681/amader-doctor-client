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
const Header: React.FC<HeaderProps> = ({ showDashboardNav }) => {

    const user={
        type:"patient"

    }
    
  return (
    <div>
      
    </div>
  )
}

export default Header
