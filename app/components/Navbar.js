"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";

// SSR with getServerSideProps
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-[#2C6821DE] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-10 lg:px-20">
        {/* Left: Logo with white square background and hover effect */}
        <div className="flex items-center gap-2 flex-shrink-0 bg-white p-2 rounded-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/logo.png" // Make sure the logo has a transparent background
            alt="Shravani Logo"
            width={60} // Smaller logo size
            height={60} // Maintain square size for the logo
            className="object-contain" // Ensure logo maintains its aspect ratio
          />
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-[500px] mx-4">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full bg-white text-black border border-gray-300 p-2 rounded-l-md focus:outline-none hover:border-green-500 transition duration-300"
          />
          <button className="bg-[#4A752C] hover:bg-[#3b5c24] text-white px-4 rounded-r-md transition-colors duration-200 hover:scale-110">
            <FaSearch />
          </button>
        </div>

        {/* Right: Links + Cart + Login (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:underline font-bold hover:text-green-500 transition duration-300">
            Home
          </Link>
          <Link href="/products" className="hover:underline font-bold hover:text-green-500 transition duration-300">
            Products
          </Link>
          <Link href="/about" className="hover:underline font-bold hover:text-green-500 transition duration-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline font-bold hover:text-green-500 transition duration-300">
            Contact
          </Link>

          <div className="relative">
            <FaShoppingCart className="text-xl hover:text-yellow-400 transition duration-300" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          <button className="bg-[#A6CE39] hover:bg-green-700 text-black font-bold px-4 py-2 rounded transition-colors duration-200 hover:scale-110">
            Login
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="hover:scale-110 transition-transform duration-300">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2C6821DE] text-white border-t">
          <div className="flex flex-col gap-6 px-4 py-3"> {/* Increased gap for mobile items */}
            <input
              type="text"
              placeholder="Search product..."
              className="w-full border border-green-300 p-2 rounded text-black focus:outline-none"
            />
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline font-bold hover:text-green-500 transition duration-300">
              Home
            </Link>
            <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:underline font-bold hover:text-green-500 transition duration-300">
              Products
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline font-bold hover:text-green-500 transition duration-300">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline font-bold hover:text-green-500 transition duration-300">
              Contact
            </Link>
            <button
              className="bg-[#A6CE39] hover:bg-green-700 text-black font-bold px-4 py-2 rounded transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
