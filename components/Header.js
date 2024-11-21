// components/Header.js
"use client"; // Ensure this is at the very top

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const Header = ({ openContactModal }) => { // Receive openContactModal as prop
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Define navigation links
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Kontak", href: "/kontak", isModal: true }, // Assuming Kontak opens a modal
    // Add other navigation links here if needed
  ];

  // Common classes for navigation links
  const navLinkClasses = (active) =>
    `text-base font-medium ${
      active ? "text-custom-yellow" : "text-white hover:text-custom-yellow"
    } transition-colors duration-300 px-3 py-2`;

  const mobileNavLinkClasses = (active) =>
    `text-lg font-medium ${
      active ? "text-custom-yellow" : "text-white hover:text-custom-yellow"
    } transition-colors duration-300 px-3 py-2`;

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="w-full flex justify-between items-center py-3 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logoputih.png"
              alt="Logo"
              width={180}
              height={180}
              className="w-32 h-auto md:w-28" // Responsive width
              priority
            />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex justify-center">
          <nav className="flex space-x-6">
            {navigation.map((item) => (
              item.isModal ? (
                <button
                  key={item.name}
                  onClick={openContactModal}
                  className={navLinkClasses(false)}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={navLinkClasses(pathname === item.href)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* "Masuk" as a Link with consistent padding */}
          <Link
            href="/signin"
            className={`text-base font-medium ${
              pathname === "/signin"
                ? "text-custom-yellow"
                : "text-white hover:text-custom-yellow"
            } transition-colors duration-300 px-3 py-2`}
          >
            Masuk
          </Link>
          {/* "Daftar" as a Link with background and padding */}
          <Link
            href="/signup"
            className="bg-custom-yellow hover:bg-yellow-500 text-base font-medium px-4 py-2 rounded-md text-white transition-colors duration-300"
          >
            Daftar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="text-white focus:outline-none focus:ring-2 focus:ring-custom-yellow rounded"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm shadow-lg"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col space-y-4 p-4">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.isModal ? (
                  <button
                    onClick={openContactModal}
                    className={mobileNavLinkClasses(false)}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={mobileNavLinkClasses(pathname === item.href)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            {/* "Masuk" as a Link with consistent padding */}
            <li>
              <Link
                href="/signin"
                className={`text-lg font-medium ${
                  pathname === "/signin"
                    ? "text-custom-yellow"
                    : "text-white hover:text-custom-yellow"
                } transition-colors duration-300 px-3 py-2`}
              >
                Masuk
              </Link>
            </li>
            {/* "Daftar" as a Link with background and padding */}
            <li>
              <Link
                href="/signup"
                className="bg-custom-yellow hover:bg-yellow-500 text-lg font-medium px-4 py-2 rounded-md text-white transition-colors duration-300"
              >
                Daftar
              </Link>
            </li>
            {/* "Kontak" as a Button */}
            {/* If "Kontak" is already handled above, you can remove this redundant button */}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
