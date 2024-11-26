// frontend/app/minister/program/page.js

"use client";

import Link from "next/link";
import Image from "next/image";
import MinisterHeader2 from "../../../components/MinisterHeader2"; // Pastikan path sesuai
import MinisterFooter2 from "../../../components/MinisterFooter2"; // Pastikan path sesuai

const ProgramPage = () => {
  return (
    <div className="relative bg-white w-full overflow-x-hidden flex flex-col">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-24 flex-1 mt-12 md:mt-12">
        {/* Judul */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
          <h2 className="text-6xl md:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Program
          </h2>
        </div>

        {/* Tombol Tambah, Edit, Hapus */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          <Link href="/minister/program/add">
            <button className="w-full bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg md:text-2xl px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Program
            </button>
          </Link>
          <Link href="/minister/program/edit">
            <button className="w-full bg-[#DCCC3D] text-[#0C1E28] font-bold text-lg md:text-2xl px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Program
            </button>
          </Link>
          <Link href="/minister/program/delete">
            <button className="w-full bg-[#DC673D] text-[#0C1E28] font-bold text-lg md:text-2xl px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Program
            </button>
          </Link>
        </div>

        {/* Daftar Program */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
          {/* Program 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full max-w-sm">
            <div className="relative w-full h-64">
              <Image
                src="/assets/minister/bantuan sosial 1.png"
                alt="Bantuan Sosial"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 bg-[#0C1E28] bg-opacity-80 w-full py-2">
              <h3 className="text-white text-center text-2xl md:text-3xl font-bold">
                Bantuan Sosial
              </h3>
            </div>
          </div>

          {/* Program 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full max-w-sm">
            <div className="relative w-full h-64">
              <Image
                src="/assets/minister/program hiking 1.png"
                alt="Hiking"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 bg-[#0C1E28] bg-opacity-80 w-full py-2">
              <h3 className="text-white text-center text-2xl md:text-3xl font-bold">
                Hiking
              </h3>
            </div>
          </div>

          {/* Program 3 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full max-w-sm">
            <div className="relative w-full h-64">
              <Image
                src="/assets/minister/vaksinasi 2.png"
                alt="Vaksinasi"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 bg-[#0C1E28] bg-opacity-80 w-full py-2">
              <h3 className="text-white text-center text-2xl md:text-3xl font-bold">
                Vaksinasi
              </h3>
            </div>
          </div>
        </div>
      </main>

      {/* MinisterFooter2 */}
      <MinisterFooter2 />
    </div>
  );
};

export default ProgramPage;
