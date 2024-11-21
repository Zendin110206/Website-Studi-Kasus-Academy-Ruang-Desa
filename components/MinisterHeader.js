// components/MinisterHeader.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const MinisterHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Hapus token autentikasi dari localStorage
    localStorage.removeItem('authToken'); // Ganti 'authToken' dengan kunci yang Anda gunakan

    // Arahkan pengguna ke halaman login atau halaman lainnya
    router.push('/signin'); // Ganti '/login' dengan rute yang sesuai
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-white shadow-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/minister">
            <Image
              src="/assets/minister/logo.png"
              alt="Logo"
              width={354}
              height={342}
              className="w-20 h-auto"
            />
          </Link>
          {/* Tombol Logout Desktop */}
          <button
            onClick={handleLogout}
            className="hidden md:flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="#program"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Program
          </Link>
          <Link
            href="#agenda"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Agenda
          </Link>
          <Link
            href="#forum"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Forum
          </Link>
          <Link
            href="#layanan"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Layanan
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Tombol Logout Mobile */}
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
            Logout
          </button>
          {/* Tombol Menu */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.nav
        className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              href="#program"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)} // Tutup menu setelah klik
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              href="#agenda"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              href="#forum"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              href="#layanan"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Layanan
            </Link>
          </li>
          {/* Tombol Logout di Mobile */}
          <li>
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false); // Tutup menu setelah logout
              }}
              className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
              Logout
            </button>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default MinisterHeader;
