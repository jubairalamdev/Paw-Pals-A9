"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Home, PlusSquare, List, FileText, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { logoutUser } from "@/utils/authentication/logoutUser";

const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Track if the component has mounted to prevent hydration mismatches
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
  }, []);

  const menuItems = [
    {
      title: "Add Pet",
      icon: <PlusSquare size={20} />,
      path: "/dashboard/add-pet",
    },
    {
      title: "My Listings",
      icon: <List size={20} />,
      path: "/dashboard/my-listings",
    },
    {
      title: "My Requests",
      icon: <FileText size={20} />,
      path: "/dashboard/my-requests",
    },
  ];

  return (
    <aside className="w-full h-fit bg-white border-r border-gray-200 flex flex-col justify-between sticky top-40 transition-all duration-300 rounded-3xl mb-10">
      
      {/* --- User Profile Section --- */}
      <div className="p-6 border-b border-gray-100 bg-gray-50/50 rounded-3xl">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full p-1 bg-linear-to-tr from-[#193EAC] to-[#F0AA38]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                // Fall back to placeholder cleanly on server-side pre-render
                src={(hasMounted && user?.image) ? user.image : "/images/logo.png"}
                alt="User Avatar"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font font-(family-name:--font-lilita) text-[#193EAC] truncate">
              {(hasMounted && user?.name) ? user.name : "Loading User..."}
            </h3>
            <p className="text-xs text-gray-500 font-(family-name:--font-open-sans) truncate">
              {(hasMounted && user?.email) ? user.email : "..."}
            </p>
          </div>
        </div>
      </div>

      {/* --- Navigation Menu --- */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-(family-name:--font-open-sans) font-medium ${
                isActive
                  ? "bg-[#193EAC] text-white shadow-md shadow-blue-200"
                  : "text-gray-600 hover:bg-blue-50 hover:text-[#193EAC]"
              }`}
            >
              {isActive ? (
                <span className="bg-white/20 p-1 rounded-md">{item.icon}</span>
              ) : (
                <span className="text-gray-400">{item.icon}</span>
              )}
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* --- Logout Section --- */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={logoutUser}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-(family-name:--font-open-sans) font-medium"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;