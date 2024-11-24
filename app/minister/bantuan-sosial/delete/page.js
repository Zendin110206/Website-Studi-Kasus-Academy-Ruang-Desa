// frontend/app/minister/bantuan-sosial/delete/page.js

"use client";

import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa"; // Pastikan untuk menginstal react-icons

const HapusBantuanSosialPage = () => {
  const [selectedBansos, setSelectedBansos] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const bantuanOptions = ["BLT", "PKH", "BPNT", "BSU"];

  const handleSelectChange = (e) => {
    setSelectedBansos(e.target.value);
  };

  const handleDelete = async () => {
    if (!selectedBansos) return;
    setIsDeleting(true);
    setDeleteSuccess(false);

    // Implementasikan logika penghapusan di sini
    // Misalnya, panggil API untuk menghapus bantuan sosial yang dipilih

    // Simulasi permintaan penghapusan dengan delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Setelah berhasil
    setIsDeleting(false);
    setDeleteSuccess(true);
    setSelectedBansos("");

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
          <h4 className="mt-40 sm:mt-60 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Hapus
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Bantuan Sosial
          </h2>
        </div>

        {/* Form Hapus Bantuan Sosial */}
        <div className="bg-[#0C1E28] rounded-2xl p-4 sm:p-8">
          {/* Pilih Bantuan Sosial */}
          <div className="mb-6 relative">
            <select
              value={selectedBansos}
              onChange={handleSelectChange}
              className="w-full px-4 sm:px-6 py-2 sm:py-4 pr-16 rounded-full bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none appearance-none"
              required
            >
              <option value="" disabled>
                Pilih Bantuan Sosial untuk Dihapus
              </option>
              {bantuanOptions.map((bansos) => (
                <option key={bansos} value={bansos}>
                  {bansos}
                </option>
              ))}
            </select>
            {/* Panah Kustom */}
            <svg
              className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none w-6 h-6 text-[#0C1E28]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Tombol Hapus */}
          <div className="flex justify-end">
            <button
              onClick={handleDelete}
              className={`bg-[#DC673D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
                isDeleting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isDeleting || !selectedBansos}
            >
              {isDeleting ? (
                <FaSpinner className="animate-spin h-6 w-6 mr-2" />
              ) : deleteSuccess ? (
                <CheckIcon className="h-6 w-6 mr-2" />
              ) : null}
              {isDeleting
                ? "Menghapus..."
                : deleteSuccess
                ? "Berhasil Dihapus"
                : "Hapus"}
            </button>
          </div>

          {/* Notifikasi Sukses */}
          {deleteSuccess && (
            <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
              <CheckIcon className="h-6 w-6 mr-2" />
              <span className="block sm:inline">Bantuan Sosial telah dihapus.</span>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default HapusBantuanSosialPage;
