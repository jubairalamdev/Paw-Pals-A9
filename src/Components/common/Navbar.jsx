"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Header with full width and Primary Blue Background
    <header className="w-full sticky top-10 z-50">
      {/* Boxed Nav Container */}
      <nav className="container mx-auto max-w-300 px-6 py-4 flex justify-between items-center bg-white/30 backdrop-blur-md border border-white/20 shadow-lg  rounded-full">

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
        <ul className="hidden md:flex items-center gap-8 font-open-sans font-medium text-[#F0AA38]">
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
          <Link href="/my-requests" className="hover:opacity-100 transition-opacity">
            My Requests
          </Link>
        </ul>

        {/* --- Right Side: Actions --- */}
        <div className="flex items-center gap-4">

          {/* Login Button (Desktop) */}
          <Link
            href="/login"
            className="hidden md:block bg-[#F0AA38] hover:bg-[#d9921f] text-white font-bold font-open-sans py-2 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Login
          </Link>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#F0AA38] hover:text-black transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Dropdown --- */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-4xl mt-2 border-t border-white/10 absolute w-full shadow-xl animate-fadeIn">
          <ul className="flex flex-col p-6 gap-4 font-open-sans font-medium text-[#F0AA38]">
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
              <Link href="/my-requests" className="hover:opacity-100 transition-opacity">
                My Requests
              </Link>
            </li>
            <div className="h-px bg-white/20 my-2"></div> {/* Divider */}
            <li>
              <Link
                href="/login"
                className="block text-center bg-[#F0AA38] text-white font-bold py-3 rounded-lg mt-2 hover:bg-[#d9921f] transition-colors"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;