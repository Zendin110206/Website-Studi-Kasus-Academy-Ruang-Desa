// frontend/app/minister/program/edit/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EditProgramPage = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const programs = ["Bantuan Sosial", "Hiking", "Vaksinasi"];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    if (!selectedProgram) {
      alert("Silakan pilih program terlebih dahulu.");
      return;
    }
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setIsLoading(true);

    // TODO: Replace this with actual upload logic
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setSelectedProgram("");
      setSelectedFile(null);

      // Hide success notification after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <MinisterHeader2 />

      {/* Notifikasi Sukses */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed top-5 right-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              className="h-6 w-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-semibold">Program berhasil diunggah!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-12">
        {/* Judul */}
        <div className="text-center mb-8">
          <h4 className="mt-28 sm:mt-28 text-4xl sm:text-6xl font-bold text-[#0C1E28]">
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
              aria-label="Pilih Program untuk Diedit"
            >
              <option value="" disabled>
                Pilih Program untuk Diedit
              </option>
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
              aria-hidden="true"
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
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full px-4 sm:px-6 py-2 sm:py-4 rounded-full bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none"
              aria-label="Judul Program"
            />
          </div>

          {/* Upload Gambar */}
          <div className="mb-6">
            <label
              htmlFor="file-upload"
              className="w-full flex flex-col items-center justify-center border-4 border-dashed border-gray-300 rounded-2xl bg-white py-20 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
            >
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
                aria-label="Upload Gambar Program"
              />
              <div className="flex flex-col items-center">
                <svg
                  className="w-24 h-24 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 30V42H42V30"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 6V33"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33 15L24 6L15 15"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
              className={`bg-[#DCCC3D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:bg-[#c0b834] transition-colors duration-300 flex items-center justify-center ${
                isLoading ? "cursor-not-allowed opacity-70" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading && (
                <svg
                  className="animate-spin h-6 w-6 mr-3 text-[#0C1E28]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
              )}
              {isLoading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </div>
      </main>

      {/* Modal Konfirmasi */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 sm:p-8 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold text-[#0C1E28] mb-4">
                Konfirmasi
              </h3>
              <p className="text-gray-700 mb-6">
                Apakah Anda yakin ingin menyimpan perubahan ini?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Tidak
                </button>
                <button
                  onClick={handleConfirm}
                  className="bg-[#DCCC3D] text-[#0C1E28] font-semibold py-2 px-4 rounded-lg hover:bg-[#c0b834] transition duration-200 flex items-center"
                >
                  Ya
                  <svg
                    className="ml-2 h-5 w-5 text-[#0C1E28]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <MinisterFooter2 />
    </div>
  );
};

export default EditProgramPage;
