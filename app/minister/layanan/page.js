"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../components/MinisterHeader2";
import Footer2 from "../../../components/Footer2";

const LayananPage = () => {
  const services = [
    { id: 1, title: "Surat Keterangan Domisili" },
    { id: 2, title: "Surat Pindah" },
    { id: 3, title: "Surat Keterangan Kematian" },
    { id: 4, title: "Surat Keterangan Lahir" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h4 className="mt-12 text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">
            Layanan
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Link href="/minister/layanan/add">
            <button className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Layanan
            </button>
          </Link>
          <Link href="/minister/layanan/edit">
            <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Layanan
            </button>
          </Link>
          <Link href="/minister/layanan/delete">
            <button className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Layanan
            </button>
          </Link>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#0C1E28] rounded-2xl p-6 flex items-center"
            >
              <div className="w-24 h-24 bg-[#D6CF35] rounded-l-2xl"></div>
              <h3 className="text-3xl font-bold text-white ml-6">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default LayananPage;
