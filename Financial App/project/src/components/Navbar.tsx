import React from 'react';
import { LayoutDashboard, Users, FileText, Settings, Bell } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-indigo-600">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">FinanceReport</span>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink icon={<LayoutDashboard className="h-5 w-5" />} text="Dashboard" active />
                <NavLink icon={<Users className="h-5 w-5" />} text="Clients" />
                <NavLink icon={<FileText className="h-5 w-5" />} text="Reports" />
                <NavLink icon={<Settings className="h-5 w-5" />} text="Settings" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 text-gray-200 hover:text-white">
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-4 flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        active
          ? 'bg-indigo-700 text-white'
          : 'text-gray-200 hover:bg-indigo-500 hover:text-white'
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  );
}