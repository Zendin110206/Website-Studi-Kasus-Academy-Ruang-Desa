// frontend/app/minister/bantuan-sosial/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../components/MinisterHeader2";
import Footer2 from "../../../components/Footer2";

const BantuanSosialPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-28 sm:mt-60 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Bantuan
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Sosial
          </h2>
        </div>

        {/* Tombol Tambah, Edit, Hapus */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          <Link href="/minister/bantuan-sosial/add">
            <button className="w-full bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Bansos
            </button>
          </Link>
          <Link href="/minister/bantuan-sosial/edit">
            <button className="w-full bg-[#DCCC3D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Bansos
            </button>
          </Link>
          <Link href="/minister/bantuan-sosial/delete">
            <button className="w-full bg-[#DC673D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Bansos
            </button>
          </Link>
        </div>

        {/* Daftar Bantuan Sosial */}
        <div className="bg-[#0C1E28] rounded-2xl p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-xl sm:text-3xl font-bold text-white">Bantuan</h4>
            <h2 className="text-2xl sm:text-6xl font-extrabold text-white mt-2">
              Sosial
            </h2>
            <div className="w-3/4 sm:w-full border-t border-white my-2 sm:my-4 mx-auto"></div>
          </div>

          {/* Bantuan Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-[#DCCC3D] rounded-xl p-4 sm:p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-xl sm:text-3xl font-bold">BLT</h4>
            </div>
            <div className="bg-[#DCCC3D] rounded-xl p-4 sm:p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-xl sm:text-3xl font-bold">PKH</h4>
            </div>
            <div className="bg-[#DCCC3D] rounded-xl p-4 sm:p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-xl sm:text-3xl font-bold">BPNT</h4>
            </div>
            <div className="bg-[#DCCC3D] rounded-xl p-4 sm:p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-xl sm:text-3xl font-bold">BSU</h4>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default BantuanSosialPage;
