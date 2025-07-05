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
  return (
    <nav className="w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-6 md:px-32">
        {/* Left: Logo with white square background and hover effect */}
        <div className="flex items-center gap-3 flex-shrink-0 bg-white p-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md">
          <Image
            src="/logo.png" // Make sure the logo has a transparent background
            alt="Shravani Logo"
            width={60} // Smaller logo size
            height={60} // Maintain square size for the logo
            className="object-contain" // Ensure logo maintains its aspect ratio
          />
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-[600px] mx-6">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full bg-white text-black border border-gray-300 p-3 rounded-l-xl focus:outline-none hover:border-[#2C6821DE] transition duration-300 font-semibold placeholder-gray-500"
          />
          <button className="bg-[#2C6821DE] hover:bg-[#245017] text-white px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
            <FaSearch className="text-lg" />
          </button>
        </div>

        {/* Right: Links + Cart + Login (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            Home
          </Link>
          <Link href="/products" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            Products
          </Link>
          <Link href="/about" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            Contact
          </Link>

          <div className="relative">
            <FaShoppingCart className="text-2xl hover:text-yellow-400 transition duration-300 text-white" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold">
              3
            </span>
          </div>

          <button className="bg-[#2C6821DE] hover:bg-[#245017] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-md">
            Login
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button className="hover:scale-110 transition-transform duration-300 text-white">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Static version for SSR */}
      <div className="md:hidden bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-black border-t border-gray-500 hidden">
        <div className="flex flex-col gap-6 px-6 py-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search product..."
              className="w-full border border-gray-300 p-3 rounded-l-xl text-black focus:outline-none font-semibold placeholder-gray-500"
            />
            <button className="bg-[#2C6821DE] hover:bg-[#245017] text-white px-4 rounded-r-xl transition-all duration-200">
              <FaSearch />
            </button>
          </div>
          <Link href="/" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            Home
          </Link>
          <Link href="/products" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            Products
          </Link>
          <Link href="/about" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline font-bold hover:text-[#A6CE39] transition duration-300 text-white text-lg">
            Contact
          </Link>
          <button className="bg-[#2C6821DE] hover:bg-[#245017] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}