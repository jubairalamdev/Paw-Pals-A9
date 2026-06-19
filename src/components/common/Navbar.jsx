"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown, LogOut, LayoutDashboard } from "lucide-react";
import { authClient } from "@/lib/auth-client"; // Ensure this path matches your setup
import { logoutUser } from "@/utils/authentication/logoutUser";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  // console.log(session)
  const user = session?.user;
  // console.log(user)

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Header with full width and Primary Blue Background
    <header className="w-full sticky top-10 z-50">
      {/* Boxed Nav Container */}
      <nav className="container mx-auto max-w-300 px-6 py-4 flex justify-between items-center bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-full">
        
        {/* --- Left Side: Logo --- */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-40 h-12">
            <Image
              src="/images/logo.png"
              alt="Paw Pals Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* --- Center Side: Links (Desktop) --- */}
        <ul className="hidden md:flex items-center gap-8 font-open-sans font-medium text-[#193EAC]">
          <li>
            <Link
              href="/"
              className="hover:text-black hover:scale-105 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-pets"
              className="hover:text-black hover:scale-105 transition-all duration-300"
            >
              All Pets
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/my-requests" 
              className="hover:text-black hover:scale-105 transition-all duration-300"
            >
              My Requests
            </Link>
          </li>
        </ul>

        {/* --- Right Side: Actions --- */}
        <div className="flex items-center gap-4">

          {/* Auth Logic (Desktop) */}
          {isPending ? (
            <div className="flex gap-2">
              <span className="skeleton skeleton-text">Authenticating</span>
            <span className="loading loading-infinity loading-3xl text-gray-800 "></span>
            </div>
          ) : user ? (
            /* --- Logged In: Profile Dropdown --- */
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 bg-[#193EAC]/10 hover:bg-[#193EAC]/20 px-4 py-2 rounded-full transition-all border border-[#193EAC]/20"
              >
                <span className="font-bold text-[#193EAC] font-open-sans text-sm">
                  {user.name}
                </span>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#193EAC]">
                  <Image
                    src={user.image || "/images/logo.png"} 
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <ChevronDown size={16} className="text-[#193EAC]" />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                  <Link
                    href="/dashboard/my-requests"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#193EAC] font-open-sans font-medium transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logoutUser()
                      setIsProfileOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 font-open-sans font-medium transition-colors text-left"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* --- Logged Out: Login Button --- */
            <Link
              href="/login"
              className="hidden md:block bg-[#F0AA38] hover:bg-[#d9921f] text-white font-bold font-open-sans py-2 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Login
            </Link>
          )}

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#193EAC] hover:text-black transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Dropdown --- */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-2xl mt-2 border-t border-white/10 absolute w-full shadow-xl animate-fadeIn overflow-hidden">
          <ul className="flex flex-col p-6 gap-4 font-open-sans font-medium text-[#193EAC]">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-black hover:pl-2 transition-all"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-pets"
                className="block py-2 hover:text-black hover:pl-2 transition-all"
                onClick={toggleMenu}
              >
                All Pets
              </Link>
            </li>
            <li>
              <Link href="/dashboard/my-requests" className="block py-2 hover:text-black hover:pl-2 transition-all">
                My Requests
              </Link>
            </li>
            
            <div className="h-px bg-gray-200 my-2"></div>

            {/* Mobile Auth Logic */}
            {user ? (
              <>
                <li className="flex items-center gap-3 px-2 py-2 bg-gray-50 rounded-lg">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={user.image || "/images/logo.png"} alt="Avatar" fill className="object-cover" />
                  </div>
                  <span className="font-bold text-[#193EAC]">{user.name}</span>
                </li>
                <li>
                  <Link
                    href="/dashboard/add-pet"
                    className="block py-2 hover:text-black hover:pl-2 transition-all"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      authClient.signOut();
                      toggleMenu();
                    }}
                    className="block w-full text-left py-2 text-red-600 hover:text-red-700 hover:pl-2 transition-all font-bold"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="block text-center bg-[#F0AA38] text-white font-bold py-3 rounded-lg mt-2 hover:bg-[#d9921f] transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;