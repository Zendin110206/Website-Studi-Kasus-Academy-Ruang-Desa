// frontend/app/minister/program/edit/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../../components/MinisterHeader2";
import Footer2 from "../../../../components/Footer2";
import { useState } from "react";

const EditProgramPage = () => {
  const [selectedProgram, setSelectedProgram] = useState("Pilih Program");
  const [selectedFile, setSelectedFile] = useState(null);

  const programs = ["Bantuan Sosial", "Hiking", "Vaksinasi"];

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
            Edit Program
          </h2>
        </div>

        {/* Form Edit Program */}
        <div className="bg-[#F2F2F2] rounded-2xl p-4 sm:p-8">
          {/* Pilih Program */}
          <div className="mb-6 relative">
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full px-4 sm:px-6 py-2 sm:py-4 pr-16 rounded-full bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold shadow-lg focus:outline-none appearance-none"
            >
              <option disabled>Pilih Program untuk Diedit</option>
              {programs.map((program, index) => (
                <option key={index} value={program}>
                  {program}
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

          {/* Judul Program */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Judul"
              value={selectedProgram !== "Pilih Program" ? selectedProgram : ""}
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
              className="bg-[#DCCC3D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:bg-[#c0b834] transition-colors duration-300"
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

export default EditProgramPage;
