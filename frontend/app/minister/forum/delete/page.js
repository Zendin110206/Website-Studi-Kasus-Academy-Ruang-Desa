"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";

const DeleteForumPage = () => {
  const [selectedForums, setSelectedForums] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

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

  const handleDelete = async () => {
    setIsDeleting(true);
    setDeleteSuccess(false);

    // Implementasi penghapusan forum ke backend

    // Simulasi permintaan penghapusan dengan delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    setIsDeleting(false);
    setDeleteSuccess(true);
    setSelectedForums([]);

    // Sembunyikan pesan sukses setelah beberapa detik
    setTimeout(() => setDeleteSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-28 sm:mt-28 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Hapus Forum
          </h2>
        </div>

        {/* Tombol Hapus */}
        {selectedForums.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleDelete}
              className={`bg-[#DC673D] text-white font-bold text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-transform duration-300 flex items-center justify-center ${
                isDeleting ? "cursor-not-allowed opacity-50" : "hover:scale-105"
              }`}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Menghapus...
                </>
              ) : deleteSuccess ? (
                <>
                  <CheckIcon className="h-6 w-6 mr-2" />
                  Berhasil Dihapus
                </>
              ) : (
                "Hapus"
              )}
            </button>
          </div>
        )}

        {/* Notifikasi Sukses */}
        {deleteSuccess && (
          <div
            className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <CheckIcon className="h-6 w-6 mr-2" />
            <span className="block sm:inline">
              Forum yang dipilih telah dihapus.
            </span>
          </div>
        )}

        {/* Forum List */}
        <div className="space-y-12">
          {forums.map((forum) => (
            <div
              key={forum.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg relative cursor-pointer ${
                selectedForums.includes(forum.id)
                  ? "border-4 border-green-500"
                  : "border border-gray-300"
              }`}
              onClick={() => toggleSelectForum(forum.id)}
            >
              {/* Checkbox */}
              <div className="absolute top-4 right-4">
                <div
                  className={`w-8 h-8 rounded-full border-4 ${
                    selectedForums.includes(forum.id)
                      ? "bg-green-500 border-green-500"
                      : "bg-white border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedForums.includes(forum.id) && (
                    <CheckIcon className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
              {/* Title */}
              <div className="flex items-stretch mb-4">
                <div className="w-2 sm:w-4 bg-[#D6CF35] rounded-l-full flex-shrink-0"></div>
                <div className="flex-1 bg-[#0C1E28] rounded-r-full py-2 sm:py-4 px-4 sm:px-6 flex items-center">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white">
                    {forum.title}
                  </h3>
                </div>
              </div>
              {/* Description */}
              <p className="text-[#0C1E28] text-lg sm:text-2xl font-medium mb-6">
                {forum.description}
              </p>
              {/* Buttons */}
              <div className="flex flex-wrap space-x-4">
                <button className="bg-[#D6CF35] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 py-3 rounded-full shadow-lg cursor-default">
                  Tambah
                </button>
                <button className="bg-[#D6CF35] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 py-3 rounded-full shadow-lg cursor-default">
                  Lihat
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default DeleteForumPage;
