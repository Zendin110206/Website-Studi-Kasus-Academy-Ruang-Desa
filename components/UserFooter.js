// components/Footer.js
"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6">
            <Link href="#program" className="text-[#0C1E28] text-2xl font-bold">
              Program
            </Link>
            <Link href="#agenda" className="text-[#0C1E28] text-2xl font-bold">
              Agenda
            </Link>
            <Link href="#forum" className="text-[#0C1E28] text-2xl font-bold">
              Forum
            </Link>
            <Link href="#layanan" className="text-[#0C1E28] text-2xl font-bold">
              Layanan
            </Link>
          </div>

          {/* Line */}
          <div className="w-full border-t border-[#0C1E28] mb-6"></div>

          {/* Copyright */}
          <p className="text-[#0C1E28] text-center text-2xl font-bold">
            2024. Hak Cipta Dilindungi | © Ruang Desa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
