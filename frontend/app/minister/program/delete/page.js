// frontend/app/minister/program/delete/page.js

"use client";

import Link from "next/link";
import MinisterHeader2 from "../../../../components/MinisterHeader2";
import MinisterFooter2 from "../../../../components/MinisterFooter2";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const HapusProgramPage = () => {
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const programs = [
    {
      id: 1,
      title: "Bantuan Sosial",
      image: "/assets/minister/bantuan sosial 1.png",
    },
    { id: 2, title: "Hiking", image: "/assets/minister/program hiking 1.png" },
    { id: 3, title: "Vaksinasi", image: "/assets/minister/vaksinasi 2.png" },
    // Tambahkan program lain jika ada
  ];

  const toggleSelectProgram = (id) => {
    setSelectedPrograms((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((programId) => programId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    setShowConfirm(false);
    setIsLoading(true);

    // Simulasikan proses hapus dengan delay
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setSelectedPrograms([]);

      // Sembunyikan notifikasi sukses setelah 5 detik
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const handleCancelDelete = () => {
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
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-semibold">Program berhasil dihapus!</span>
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
            Hapus Program
          </h2>
        </div>

        {/* Daftar Program dengan Checkbox */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative group cursor-pointer"
              onClick={() => toggleSelectProgram(program.id)}
            >
              <img
                src={program.image}
                alt={program.title}
                className={`w-full h-auto rounded-2xl object-cover ${
                  selectedPrograms.includes(program.id) ? "opacity-50" : ""
                }`}
              />
              <div className="absolute top-4 right-4">
                <div
                  className={`w-8 h-8 rounded-full border-4 ${
                    selectedPrograms.includes(program.id)
                      ? "bg-[#B7DC3D] border-[#B7DC3D]"
                      : "bg-white border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedPrograms.includes(program.id) && (
                    <CheckIcon className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 bg-[#0C1E28] bg-opacity-80 w-full py-2 rounded-b-2xl">
                <h3 className="text-white text-center text-3xl font-bold">
                  {program.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Hapus */}
        {selectedPrograms.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={handleDeleteClick}
              className={`bg-[#DC673D] text-[#0C1E28] font-bold text-lg sm:text-2xl px-6 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center ${
                isLoading ? "cursor-not-allowed opacity-70" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-6 w-6 mr-3 text-[#0C1E28]"
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
              ) : null}
              Hapus
            </button>
          </div>
        )}
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
                Apakah Anda yakin ingin menghapus program yang dipilih?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancelDelete}
                  className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Tidak
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="bg-[#DC673D] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#c0542d] transition duration-200 flex items-center"
                >
                  Ya
                  <svg
                    className="ml-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-semibold">Program berhasil dihapus!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HapusProgramPage;
