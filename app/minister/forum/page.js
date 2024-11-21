"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../components/MinisterHeader2"; // Adjust the path as necessary
import Footer2 from "../../../components/Footer2"; // Assuming you have a Footer2 component

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
    <div className="bg-white min-h-screen ">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h4 className="mt-12 text-3xl font-bold text-[#0C1E28]">Cireundeu</h4>
          <h2 className="text-8xl font-extrabold text-[#0C1E28] mt-2">Forum</h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Link href="/minister/forum/add">
            <button className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Tambah Forum
            </button>
          </Link>
          <Link href="/minister/forum/edit">
            <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Edit Forum
            </button>
          </Link>
          <Link href="/minister/forum/delete">
            <button className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Hapus Forum
            </button>
          </Link>
        </div>

        {/* Forum List */}
        <div className="space-y-12">
          {forums.map((forum) => (
            <div
              key={forum.id}
              className="bg-[#F2F2F2] rounded-2xl p-6 shadow-lg"
            >
              {/* Title */}
              <div className="flex items-center">
                <div className="w-24 h-20 bg-[#D6CF35] rounded-l-2xl"></div>
                <div className="flex-1 bg-[#0C1E28] rounded-r-2xl py-4 px-6">
                  <h3 className="text-4xl font-bold text-white">
                    {forum.title}
                  </h3>
                </div>
              </div>
              {/* Description */}
              <p className="text-[#0C1E28] text-2xl font-medium my-6">
                {forum.description}
              </p>
              {/* Buttons */}
              <div className="flex space-x-4">
                <Link href={`/minister/forum/${forum.id}/add`}>
                  <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-[#CBBE36]">
                    Tambah
                  </button>
                </Link>
                <Link href={`/minister/forum/${forum.id}/view`}>
                  <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-[#CBBE36]">
                    Lihat
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer2 */}
      <Footer2 />
    </div>
  );
};

export default ForumPage;
