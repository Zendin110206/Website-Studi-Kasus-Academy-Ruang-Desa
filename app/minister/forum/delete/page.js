"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const DeleteForumPage = () => {
  const [selectedForums, setSelectedForums] = useState([]);

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

  const toggleSelectForum = (id) => {
    setSelectedForums((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((forumId) => forumId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    // Implement delete logic here
    alert("Forum yang dipilih telah dihapus.");
    // Reset selected forums
    setSelectedForums([]);
  };

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
            Hapus Forum
          </h2>
        </div>

        {/* Delete Button */}
        {selectedForums.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleDelete}
              className="bg-[#DC673D] text-[#0C1E28] font-bold text-2xl px-8 py-3 rounded-full shadow-lg hover:bg-[#C85F36] transition duration-300"
            >
              Hapus
            </button>
          </div>
        )}

        {/* Forum List */}
        <div className="space-y-12">
          {forums.map((forum) => (
            <div
              key={forum.id}
              className="bg-[#F2F2F2] rounded-2xl p-6 shadow-lg relative cursor-pointer"
              onClick={() => toggleSelectForum(forum.id)}
            >
              {/* Checkbox */}
              <div className="absolute top-4 right-4">
                <div
                  className={`w-8 h-8 rounded-full border-4 ${
                    selectedForums.includes(forum.id)
                      ? "bg-[#0C1E28] border-[#0C1E28]"
                      : "bg-white border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedForums.includes(forum.id) && (
                    <CheckIcon className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
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
                <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg cursor-default">
                  Tambah
                </button>
                <button className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-2xl px-6 py-3 rounded-full shadow-lg cursor-default">
                  Lihat
                </button>
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

export default DeleteForumPage;
