// frontend/app/minister/layanan/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../components/MinisterFooter2";

const LayananPage = () => {
  const services = [
    { id: 1, title: "Surat Keterangan Domisili" },
    { id: 2, title: "Surat Pindah" },
    { id: 3, title: "Surat Keterangan Kematian" },
    { id: 4, title: "Surat Keterangan Lahir" },
  ];

  return (
    <div className="relative bg-white overflow-x-hidden">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h4 className="mt-16 text-2xl md:text-3xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Layanan
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          {/* Tombol Tambah Layanan */}
          <Link href="/minister/layanan/add">
            <button className="w-full bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg md:text-2xl px-4 md:px-6 py-3 h-16 md:h-20 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center">
              Tambah Layanan
            </button>
          </Link>
          {/* Tombol Edit Layanan */}
          <Link href="/minister/layanan/edit">
            <button className="w-full bg-[#DCCC3D] text-[#0C1E28] font-bold text-lg md:text-2xl px-4 md:px-6 py-3 h-16 md:h-20 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center">
              Edit Layanan
            </button>
          </Link>
          {/* Tombol Hapus Layanan */}
          <Link href="/minister/layanan/delete">
            <button className="w-full bg-[#DC673D] text-[#0C1E28] font-bold text-lg md:text-2xl px-4 md:px-6 py-3 h-16 md:h-20 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center">
              Hapus Layanan
            </button>
          </Link>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#0C1E28] rounded-2xl p-4 sm:p-6 flex items-center"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#D6CF35] rounded-l-2xl flex-shrink-0"></div>
              <h3 className="text-lg sm:text-2xl font-bold text-white ml-4 sm:ml-6">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </main>

      {/* MinisterFooter2 */}
      <MinisterFooter2 />
    </div>
  );
};

export default LayananPage;
