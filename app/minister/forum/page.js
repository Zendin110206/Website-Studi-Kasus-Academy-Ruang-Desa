// frontend/app/minister/forum/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../components/MinisterHeader2"; // Sesuaikan path jika diperlukan
import Footer2 from "../../../components/Footer2"; // Pastikan Anda memiliki komponen Footer2
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"; // Untuk notifikasi jika diperlukan

const ForumPage = () => {
  const forums = [
    {
      id: 1,
      title: "Pemilihan Ketua RT",
      description:
        "Forum diskusi ini dapat menjadi kesempatan bagi kita untuk saling mengenal dan mendukung calon Ketua RT baru yang siap memimpin dengan penuh tanggung jawab.",
    },
    {
      id: 2,
      title: "Fasilitas Umum",
      description:
        "Forum diskusi ini dapat menjadi momen bagi kita untuk bersama-sama mendukung perbaikan fasilitas umum yang akan meningkatkan kualitas hidup di lingkungan kita.",
    },
    {
      id: 3,
      title: "Keamanan Lingkungan",
      description:
        "Diskusi ini sekaligus menjadi momen bagi kita untuk bersama-sama mendukung perbaikan fasilitas umum yang akan meningkatkan kualitas hidup di lingkungan kita.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12 mt-8 sm:mt-16">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-20 text-3xl sm:text-5xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0C1E28] mt-2">
            Forum
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Link href="/minister/forum/add">
            <button className="w-full bg-[#B7DC3D] text-[#0C1E28] font-bold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Forum
            </button>
          </Link>
          <Link href="/minister/forum/edit">
            <button className="w-full bg-[#DCCC3D] text-[#0C1E28] font-bold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Forum
            </button>
          </Link>
          <Link href="/minister/forum/delete">
            <button className="w-full bg-[#DC673D] text-[#0C1E28] font-bold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Forum
            </button>
          </Link>
        </div>

        {/* Forum List */}
        <div className="space-y-8 sm:space-y-12">
          {forums.map((forum) => (
            <div
              key={forum.id}
              className="bg-[#F2F2F2] rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              {/* Title */}
              <div className="flex items-stretch mb-4">
                <div className="w-16 sm:w-24 bg-[#D6CF35] rounded-l-2xl flex-shrink-0"></div>
                <div className="flex-1 bg-[#0C1E28] rounded-r-2xl py-2 sm:py-4 px-4 sm:px-6 flex items-center">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {forum.title}
                  </h3>
                </div>
              </div>
              {/* Description */}
              <p className="text-[#0C1E28] text-base sm:text-lg font-medium mb-4 sm:mb-6">
                {forum.description}
              </p>
              {/* Buttons */}
              <div className="flex flex-wrap space-x-4">
                <Link href={`/minister/forum/${forum.id}/add`}>
                  <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-[#CBBE36] transition-colors duration-300">
                    Tambah
                  </button>
                </Link>
                <Link href={`/minister/forum/${forum.id}/view`}>
                  <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-[#CBBE36] transition-colors duration-300">
                    Lihat
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default ForumPage;
