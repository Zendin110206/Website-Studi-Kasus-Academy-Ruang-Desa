"use client";

import Link from "next/link";
import Image from "next/image";
import MinisterHeader2 from "../../../components/MinisterHeader2"; 
import Footer2 from "../../../components/Footer2"; 
const BantuanSosialPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold text-[#0C1E28]">Bantuan</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">Sosial</h2>
        </div>

        {/* Tombol Tambah, Edit, Hapus */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Link href="/minister/bantuan-sosial/add">
            <button className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-6 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Bansos
            </button>
          </Link>
          <Link href="/minister/bantuan-sosial/edit">
            <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-6 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Bansos
            </button>
          </Link>
          <Link href="/minister/bantuan-sosial/delete">
            <button className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-6 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Bansos
            </button>
          </Link>
        </div>

        {/* Daftar Bantuan Sosial */}
        <div className="bg-[#0C1E28] rounded-2xl p-8">
          <div className="text-center mb-8">
            <h4 className="text-3xl font-bold text-white">Bantuan</h4>
            <h2 className="text-6xl font-extrabold text-white mt-2">Sosial</h2>
            <div className="w-full border-t border-white my-4"></div>
          </div>

          {/* Bantuan Items */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#DCCC3D] rounded-xl p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-3xl font-bold">BLT</h4>
            </div>
            <div className="bg-[#DCCC3D] rounded-xl p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-3xl font-bold">PKH</h4>
            </div>
            <div className="bg-[#DCCC3D] rounded-xl p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-3xl font-bold">BPNT</h4>
            </div>
            <div className="bg-[#DCCC3D] rounded-xl p-8 text-center shadow-lg">
              <h4 className="text-[#0C1E28] text-3xl font-bold">BSU</h4>
            </div>
          </div>
        </div>
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default BantuanSosialPage;
