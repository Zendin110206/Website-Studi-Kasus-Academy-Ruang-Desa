// components/MinisterHeader2.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const MinisterHeader2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
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
        <div className="flex items-center">
          <Link href="/minister">
            <Image
              src="/assets/minister/logo.png"
              alt="Logo"
              width={354}
              height={342}
              className="w-20 h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/minister/program"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Program
          </Link>
          <Link
            href="/minister/agenda"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Agenda
          </Link>
          <Link
            href="/minister/forum"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Forum
          </Link>
          <Link
            href="/minister/layanan"
            className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
          >
            Layanan
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
        className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              href="/minister/program"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              href="/minister/agenda"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              href="/minister/forum"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              href="/minister/layanan"
              className="text-2xl font-bold text-[#0C1E28] hover:text-blue-600 transition duration-300"
            >
              Layanan
            </Link>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default MinisterHeader2;
