"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/reports", label: "Reports" }, // Added Reports Link
  // Add more admin-specific links here
];

const AdminHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    // Remove authentication token from localStorage
    localStorage.removeItem("authToken"); // Adjust key if necessary

    // Redirect to login page
    router.push("/signin"); // Adjust path if necessary
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

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
          <Link href="/admin" aria-label="Admin Dashboard">
            <Image
              src="/assets/admin/Logo.png" // Adjust the logo path
              alt="Logo"
              width={80}
              height={80}
              priority
              className="w-20 h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-8 items-center"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-[#0C1E28] hover:text-blue-600 transition-colors duration-300"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logout (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Logout Button (Desktop) */}
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
            aria-label="Logout"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Logout Button (Mobile) */}
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition-colors duration-300"
            aria-label="Logout"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
          </button>
          {/* Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            ref={mobileMenuRef}
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col space-y-4 p-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xl font-semibold text-[#0C1E28] hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu after click
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default React.memo(AdminHeader);
