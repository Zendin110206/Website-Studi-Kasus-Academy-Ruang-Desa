"use client";

import Link from "next/link";
import Image from "next/image";
import MinisterHeader2 from "../../../../components/MinisterHeader2"; 
import Footer2 from "../../../../components/Footer2"; 
const TambahBantuanSosialPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold text-[#0C1E28]">Tambah</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
            Bantuan Sosial
          </h2>
        </div>

        {/* Form Tambah Bantuan Sosial */}
        <div className="bg-[#0C1E28] rounded-2xl p-8">
          {/* Nama Bantuan Sosial */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Nama Bantuan Sosial"
              className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none"
            />
          </div>

          {/* Deskripsi Bantuan Sosial */}
          <div className="mb-6">
            <textarea
              placeholder="Deskripsi Bantuan Sosial (Tujuan, Persyaratan, dan Pendaftaran)"
              className="w-full px-6 py-4 rounded-2xl bg-white text-[#0C1E28] text-2xl font-bold placeholder-gray-500 shadow-lg h-64 focus:outline-none"
            ></textarea>
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Simpan
            </button>
          </div>
        </div>
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default TambahBantuanSosialPage;
