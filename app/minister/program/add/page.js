// frontend/app/minister/program/add/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";

const TambahProgramPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    // Logika untuk mengunggah file
    if (selectedFile) {
      alert(`File "${selectedFile.name}" berhasil diunggah.`);
      // Reset setelah upload
      setSelectedFile(null);
    } else {
      alert("Silakan pilih file terlebih dahulu.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MinisterHeader2 />

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-28 sm:mt-60 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
            Cireundeu
          </h4>
          <h2 className="text-6xl sm:text-8xl font-extrabold text-[#0C1E28] mt-2">
            Tambah Program
          </h2>
        </div>

        {/* Form Tambah Program */}
        <div className="bg-[#F2F2F2] rounded-2xl p-4 sm:p-8">
          {/* Judul Program */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Judul"
              className="w-full px-4 sm:px-6 py-2 sm:py-4 rounded-full bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none"
            />
          </div>

          {/* Upload Gambar */}
          <div className="mb-6">
            <label className="w-full flex flex-col items-center justify-center border-4 border-dashed border-gray-300 rounded-2xl bg-white py-20 cursor-pointer hover:bg-gray-100 transition-colors duration-300">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <div className="flex flex-col items-center">
                <svg
                  className="w-24 h-24 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 30V42H42V30"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M24 6V33"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M33 15L24 6L15 15"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-gray-500 text-xl font-bold">
                  Klik atau Seret dan Lepaskan foto program di sini
                </p>
              </div>
            </label>
            {selectedFile && (
              <div className="mt-4 text-center">
                <p className="text-gray-700 font-semibold">
                  File yang dipilih: {selectedFile.name}
                </p>
              </div>
            )}
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button
              onClick={handleUploadClick}
              className="bg-[#B7DC3D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:bg-[#a6c837] transition-colors duration-300"
            >
              Simpan
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default TambahProgramPage;
