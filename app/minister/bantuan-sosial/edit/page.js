"use client";

import Link from "next/link";
import Image from "next/image";
import MinisterHeader2 from "../../../../components/MinisterHeader2"; 
import Footer2 from "../../../../components/Footer2";

const EditBantuanSosialPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold text-[#0C1E28]">Edit</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
            Bantuan Sosial
          </h2>
        </div>

        {/* Form Edit Bantuan Sosial */}
        <div className="bg-[#0C1E28] rounded-2xl p-8">
          {/* Pilih Bantuan Sosial */}
          <div className="mb-6 relative">
            <select
              className="w-full px-6 py-4 pr-16 rounded-full bg-white text-[#0C1E28] text-2xl font-bold shadow-lg focus:outline-none appearance-none"
            >
              <option>Pilih Bantuan Sosial untuk Diedit</option>
              <option>BLT</option>
              <option>PKH</option>
              <option>BPNT</option>
              <option>BSU</option>
            </select>
            {/* Panah Kustom */}
            <svg
              className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none w-6 h-6 text-[#0C1E28]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Nama Bantuan Sosial */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Nama Bantuan Sosial"
              className="w-full px-6 py-4 rounded-full bg-white text-[#0C1E28] text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none"
              value="BLT" // Contoh nilai awal
            />
          </div>

          {/* Deskripsi Bantuan Sosial */}
          <div className="mb-6">
            <textarea
              placeholder="Deskripsi Bantuan Sosial"
              className="w-full px-6 py-4 rounded-2xl bg-white text-[#0C1E28] text-2xl font-bold placeholder-gray-500 shadow-lg h-64 focus:outline-none"
            >
              Program ini bertujuan untuk...
            </textarea>
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
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

export default EditBantuanSosialPage;
