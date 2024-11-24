// frontend/components/Footer.js
"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
            <Link href="#program" className="text-[#0C1E28] text-base sm:text-lg md:text-2xl font-bold">
              Program
            </Link>
            <Link href="#agenda" className="text-[#0C1E28] text-base sm:text-lg md:text-2xl font-bold">
              Agenda
            </Link>
            <Link href="#forum" className="text-[#0C1E28] text-base sm:text-lg md:text-2xl font-bold">
              Forum
            </Link>
            <Link href="#layanan" className="text-[#0C1E28] text-base sm:text-lg md:text-2xl font-bold">
              Layanan
            </Link>
          </div>

          {/* Line */}
          <div className="w-full border-t border-[#0C1E28] mb-6"></div>

          {/* Copyright */}
          <p className="text-[#0C1E28] text-center text-sm sm:text-base md:text-2xl font-bold">
            2024. Hak Cipta Dilindungi | © Ruang Desa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
